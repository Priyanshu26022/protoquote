# ProtoQuote

AI-powered manufacturing quotation platform built with React and FastAPI.

## Features

- Instant manufacturing cost estimation
- AI-powered quote generation
- Manufacturing lead time estimation
- CAD file upload
- Responsive modern UI
- FastAPI backend
- SQLite database

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS

### Backend
- FastAPI
- SQLAlchemy
- SQLite
- Uvicorn

## Project Structure

```
protoquote/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── main.py
│   ├── pricing_engine.py
│   ├── database.py
│   ├── models.py
│   └── requirements.txt
```

## Live Demo

Frontend:
https://YOUR-VERCEL-LINK

Backend API:
https://protoquote-backend.onrender.com

## Running Locally

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Health Check |
| POST | /quote | Generate Manufacturing Quote |
| POST | /upload | Upload CAD File |
| GET | /quotes | View Saved Quotes |

## Future Improvements

- User Authentication
- PDF Quote Export
- AI CAD Analysis
- Payment Integration
- Manufacturer Dashboard

## Author

**Priyanshu Tiwari**

GitHub:
https://github.com/Priyanshu26022
