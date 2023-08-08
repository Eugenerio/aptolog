from fastapi import FastAPI
from .database import database, engine, metadata
from .models import users

app = FastAPI()

@app.on_event("startup")
async def startup_db():
    await database.connect()
    metadata.create_all(bind=engine)

@app.on_event("shutdown")
async def shutdown_db():
    await database.disconnect()
