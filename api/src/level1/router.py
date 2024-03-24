import time
from fastapi import APIRouter
from fastapi.responses import StreamingResponse

router = APIRouter()

def streamer():
    for i in range(7):
        yield f"Hello {i}\n"
        time.sleep(1)

@router.get("/stream")
async def get_stream():
    return StreamingResponse(streamer(), media_type="text/plain")

@router.get("/")
def read_root():
    return {"Hello": "World!"}