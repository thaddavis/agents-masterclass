import json
from fastapi import APIRouter
from fastapi.responses import Response, StreamingResponse
from langchain_anthropic import ChatAnthropic
from langchain_core import load

router = APIRouter()


async def streamer():
    model = ChatAnthropic(
        model="claude-3-sonnet-20240229",
        temperature=0.2,
        max_tokens=1024,
        streaming=True,
    )
    async for chunk in model.astream("Tell 4 sentences about yourself"):
        yield chunk.content


@router.get("/llm-stream")
async def get_stream():
    return StreamingResponse(streamer(), media_type="text/event-stream")


@router.get("/prompt")
def prompt():
    llm = ChatAnthropic(
        model="claude-3-sonnet-20240229", temperature=0.2, max_tokens=1024
    )
    completion = llm.invoke("Write a 2 line sonnet maximing financial potential.")
    return Response(completion.content, media_type="text/plain")
