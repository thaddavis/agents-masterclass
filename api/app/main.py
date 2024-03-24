import time
from typing import Union

from fastapi import FastAPI
from fastapi.responses import StreamingResponse

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World!"}

def streamer():
    for i in range(7):
        yield f"Hello {i}\n"
        time.sleep(1)

@app.get("/stream")
async def get_stream():
    return StreamingResponse(streamer(), media_type="text/plain")

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}