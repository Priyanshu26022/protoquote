from pricing_engine import calculate_quote
from fastapi import FastAPI, UploadFile, File, Depends
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
import uuid

from database import engine, SessionLocal
from models import Base, Quote
from sqlalchemy.orm import Session


Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


app = FastAPI(title="ProtoQuote API")


# ---------------- CORS ----------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://protoquote.vercel.app",
        "https://protoquote-67rlr8ssa-priyanshu26022s-projects.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# --------------------------------------


UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.get("/")
def root():
    return {"message": "ProtoQuote Backend Running 🚀"}


@app.get("/health")
def health():
    return {"status": "healthy"}


@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    filename = f"{uuid.uuid4()}_{file.filename}"
    filepath = os.path.join(UPLOAD_FOLDER, filename)

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "filename": filename,
        "original_filename": file.filename,
        "status": "uploaded successfully"
    }


class QuoteRequest(BaseModel):
    material: str
    process: str
    quantity: int
    tolerance: str


@app.post("/quote")
def generate_quote(
    request: QuoteRequest,
    db: Session = Depends(get_db)
):

    result = calculate_quote(
        request.material,
        request.process,
        request.quantity,
        request.tolerance
    )

    quote = Quote(
        material=request.material,
        process=request.process,
        quantity=request.quantity,
        tolerance=request.tolerance,
        estimated_price=result["estimated_price"],
        lead_time=result["lead_time"]
    )

    db.add(quote)
    db.commit()
    db.refresh(quote)

    return result


@app.get("/quotes")
def get_quotes(db: Session = Depends(get_db)):
    quotes = db.query(Quote).all()
    return quotes