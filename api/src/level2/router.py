import json
from fastapi import APIRouter
from fastapi.responses import Response
from langchain_anthropic import ChatAnthropic
from langchain_core import load

router = APIRouter()


@router.get("/prompt")
def prompt():
    llm = ChatAnthropic(
        model="claude-3-sonnet-20240229", temperature=0.2, max_tokens=1024
    )

    completion = llm.invoke("Write a 2 line sonnet maximing financial potential.")

    return Response(completion.content, media_type="text/plain")
