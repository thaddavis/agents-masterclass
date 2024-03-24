from fastapi import FastAPI
from dotenv import load_dotenv
from . import level1
from . import level2

load_dotenv()

app = FastAPI()

app.include_router(level1.router)
app.include_router(level2.router)
