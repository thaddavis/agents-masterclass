# TLDR

Setting up the API

## Setting up virtualenv

- https://virtualenv.pypa.io/en/latest/installation.html
- virtualenv venv

## Create a Dockerfile

- https://hub.docker.com/_/python
- https://www.docker.com/blog/containerized-python-development-part-1/
- https://devguide.python.org/versions/
- https://fastapi.tiangolo.com/deployment/docker/#build-a-docker-image-for-fastapi
- touch Dockerfile
- touch requirements.txt
- docker build -t agent-api .
- docker images
- docker run -v $(pwd):/usr/src/app -p 4000:80 agent-api
- curl localhost:4000

## Setting up the FastAPI

- explain the concept of A.I. streaming
- set up streaming with FastAPI
- https://github.com/github/gitignore/blob/main/Python.gitignore

## Setting up debugging solution

- @ext:ms-vscode-remote.remote-containers