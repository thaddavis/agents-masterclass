from fastapi import FastAPI
from . import level1

app = FastAPI()

app.include_router(level1.router)
