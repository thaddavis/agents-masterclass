# TLDR

Useful info related to this FastAPI

## Downloading 3.12.x

- https://www.python.org/downloads/release/python-3122/
- https://github.com/pyenv/pyenv
- python --version # ie: should output 3.12.x

## uninstalling python

https://stackoverflow.com/questions/72005302/completely-uninstall-python-3-on-mac

## Setting up venv

- python --version
- python -m venv ./venv
- source venv/bin/activate
- pip install -r requirements.txt
- 

## How to run with devcontainers - DIDN'T WORK RELIABLY

- Shift + CMD + P
- Dev containers - Reopen in Container

## How to run this API

- LOCALLY: `uvicorn app.main:app --host 0.0.0.0 --port 80`
- REBUILD DOCKET IMAGE: `docker build -t agent-api .`
- IN DOCKER: `docker run -v $(pwd):/usr/src/app -p 4000:80 agent-api`

## Reference .devcontainer/devcontainer.json from Microsoft dev

https://github.com/minsa110/devcontainer-fastapi/blob/main/.devcontainer/devcontainer.json