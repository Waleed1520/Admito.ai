import os
from fastapi import FastAPI, UploadFile, File, Form
from fastapi.responses import JSONResponse # type: ignore
from pydantic import BaseModel
from typing import List
from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_google_genai import ChatGoogleGenerativeAI
import google.generativeai as genai
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
from langchain_openai import OpenAIEmbeddings
from langchain_groq import ChatGroq
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)


class UserQuery(BaseModel):
    question: str

groq_api_key = os.getenv("GROQ_API_KEY")
google_api_key = os.getenv("GOOGLE_API_KEY")
os.environ["OPENAI_API_KEY"] = 'sk-proj-K4NwKSDKhSiszuJxJLQeT3BlbkFJduMQt83alY5kTQZzNjSk'

genai.configure(api_key=google_api_key)

llm = ChatGroq(groq_api_key=groq_api_key, model_name="Llama3-8b-8192")

def get_pdf_text(pdf_file_path: str = 'GCUdata.pdf'):
    text = ""
    with open(pdf_file_path, "rb") as pdf_file:
        pdf_reader = PdfReader(pdf_file)
        for page in pdf_reader.pages:
            text += page.extract_text()
    return text

def get_text_chunks(text):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=300)
    chunks = text_splitter.split_text(text)
    return chunks

def get_vector_store(text_chunks):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    vector_store = FAISS.from_texts(text_chunks, embedding=embeddings)
    vector_store.save_local("faiss_index7")

def get_conversational_chain():
    prompt_template = """
    Answer the question of user by using information from context. Provide the answer Step by step and in clear format and attractive response. If the answer is not in the context, just say "The answer is not available." Do not provide incorrect information.\n\n
give me response like this 

    \nCONTEXT: {context}\n

    \nQuestion: {question}\n

   \n Answer:\n
     
    """

    model = ChatGroq(groq_api_key=groq_api_key, model_name="Llama3-8b-8192")
    prompt = PromptTemplate(template=prompt_template, input_variables=["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)
    return chain

@app.post("/process_pdf")
async def process_pdf(pdf_file_path: str = 'GCUdata.pdf'):
    raw_text = get_pdf_text(pdf_file_path)
    text_chunks = get_text_chunks(raw_text)
    get_vector_store(text_chunks)
    return JSONResponse(content={"message": "PDF processed successfully!"})

@app.post("/gcq")
async def ask_question(query: UserQuery):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    new_db = FAISS.load_local("faiss_index7", embeddings)
    docs = new_db.similarity_search(query.question)
    chain = get_conversational_chain()
    response = chain({"input_documents": docs, "question": query.question}, return_only_outputs=True)
    formatted_response = format_response(response["output_text"])
    return JSONResponse(content={"response": formatted_response})

def format_response(text: str) -> str:
    # Custom formatting logic
    lines = text.split('\n\n\n')
    formatted_lines = [] 

    for line in lines:
        if line.strip() and not line.startswith("* "):
            # Treat as a heading
            formatted_lines.append(f"{line.strip()}")
        elif line.strip():
            # Treat as a bullet point
            formatted_lines.append(f"* {line.strip()}")

    formatted_response = "\n\n\n".join(formatted_lines)
    return formatted_response

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8002)
