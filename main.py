import os
from fastapi import FastAPI, UploadFile, File, Form
from fastapi.responses import JSONResponse,PlainTextResponse
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

def get_pdf_text(pdf_file_path: str):
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

def get_vector_store(text_chunks, index_name):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    vector_store = FAISS.from_texts(text_chunks, embedding=embeddings)
    vector_store.save_local(index_name)

def get_conversational_chain():
    prompt_template = """
    Answer the question of user by using information from context. Provide the answer step by step in a clear format and attractive response. If the answer is not in the context, just say "The answer is not available." Do not provide incorrect information.\n\n
    CONTEXT: {context}\n
    Question: {question}\n
    Answer:\n
    """
    model = ChatGroq(groq_api_key=groq_api_key, model_name="Llama3-8b-8192")
    prompt = PromptTemplate(template=prompt_template, input_variables=["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)
    return chain

@app.post("/process_pdf1")
async def process_pdf1(pdf_file_path: str = 'ntudata.pdf'):
    raw_text = get_pdf_text(pdf_file_path)
    text_chunks = get_text_chunks(raw_text)
    get_vector_store(text_chunks, "faiss_index4")
    return JSONResponse(content={"message": "PDF processed successfully for ntudata!"})

@app.post("/process_pdf2")
async def process_pdf2(pdf_file_path: str = 'GCUdata.pdf'):
    raw_text = get_pdf_text(pdf_file_path)
    text_chunks = get_text_chunks(raw_text)
    get_vector_store(text_chunks, "faiss_index10")
    return JSONResponse(content={"message": "PDF processed successfully for GCUdata!"})

@app.post("/process_pdf3")
async def process_pdf2(pdf_file_path: str = 'agridata.pdf'):
    raw_text = get_pdf_text(pdf_file_path)
    text_chunks = get_text_chunks(raw_text)
    get_vector_store(text_chunks, "faiss_index9")
    return JSONResponse(content={"message": "PDF processed successfully for agridata!"})

@app.post("/process_pdf4")
async def process_pdf2(pdf_file_path: str = 'unifsddata.pdf'):
    raw_text = get_pdf_text(pdf_file_path)
    text_chunks = get_text_chunks(raw_text)
    get_vector_store(text_chunks, "faiss_index11")
    return JSONResponse(content={"message": "PDF processed successfully for unifsddata!"})

@app.post("/process_pdf5")
async def process_pdf2(pdf_file_path: str = 'riphahdata.pdf'):
    raw_text = get_pdf_text(pdf_file_path)
    text_chunks = get_text_chunks(raw_text)
    get_vector_store(text_chunks, "faiss_index12")
    return JSONResponse(content={"message": "PDF processed successfully for riphahdata!"})

@app.post("/process_pdf6")
async def process_pdf2(pdf_file_path: str = 'faastdata.pdf'):
    raw_text = get_pdf_text(pdf_file_path)
    text_chunks = get_text_chunks(raw_text)
    get_vector_store(text_chunks, "faiss_index13")
    return JSONResponse(content={"message": "PDF processed successfully for faastdata!"})

@app.post("/askntu")
async def ask_question1(query: UserQuery):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    new_db = FAISS.load_local("faiss_index4", embeddings, allow_dangerous_deserialization=True)
    docs = new_db.similarity_search(query.question)
    chain = get_conversational_chain()
    response = chain({"input_documents": docs, "question": query.question}, return_only_outputs=True)
    formatted_response = format_response(response["output_text"])
    return JSONResponse(content={"response": formatted_response})

@app.post("/askgc")
async def ask_question2(query: UserQuery):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    new_db = FAISS.load_local("faiss_index10", embeddings, allow_dangerous_deserialization=True)
    docs = new_db.similarity_search(query.question)
    chain = get_conversational_chain()
    response = chain({"input_documents": docs, "question": query.question}, return_only_outputs=True)
    formatted_response = format_response(response["output_text"])
    return JSONResponse(content={"response": formatted_response})

@app.post("/askagri")
async def ask_question2(query: UserQuery):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    new_db = FAISS.load_local("faiss_index9", embeddings, allow_dangerous_deserialization=True)
    docs = new_db.similarity_search(query.question)
    chain = get_conversational_chain()
    response = chain({"input_documents": docs, "question": query.question}, return_only_outputs=True)
    formatted_response = format_response(response["output_text"])
    return JSONResponse(content={"response": formatted_response})

@app.post("/askunifsd")
async def ask_question2(query: UserQuery):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    new_db = FAISS.load_local("faiss_index11", embeddings, allow_dangerous_deserialization=True)
    docs = new_db.similarity_search(query.question)
    chain = get_conversational_chain()
    response = chain({"input_documents": docs, "question": query.question}, return_only_outputs=True)
    formatted_response = format_response(response["output_text"])
    return JSONResponse(content={"response": formatted_response})

@app.post("/askriphah")
async def ask_question2(query: UserQuery):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    new_db = FAISS.load_local("faiss_index12", embeddings, allow_dangerous_deserialization=True)
    docs = new_db.similarity_search(query.question)
    chain = get_conversational_chain()
    response = chain({"input_documents": docs, "question": query.question}, return_only_outputs=True)
    formatted_response = format_response(response["output_text"])
    return JSONResponse(content={"response": formatted_response})

@app.post("/askfaast")
async def ask_question2(query: UserQuery):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    new_db = FAISS.load_local("faiss_index13", embeddings, allow_dangerous_deserialization=True)
    docs = new_db.similarity_search(query.question)
    chain = get_conversational_chain()
    response = chain({"input_documents": docs, "question": query.question}, return_only_outputs=True)
    formatted_response = format_response(response["output_text"])
    return JSONResponse(content={"response": formatted_response})




def format_response(text):
    lines = text.split('**')
    formatted_text = ""
    
    for i in range(len(lines)):
        if i % 2 == 0:
            formatted_text += lines[i].strip() + "\n"
        else:
            items = lines[i].split('*')
            formatted_text += f"{items[0].strip()}\n"
            for item in items[1:]:
                formatted_text += f"  * {item.strip()}\n"
    return formatted_text     
    
     
    


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
