# For this adventure we will need familiarity with...

- python
    - particularly 3.12 (Why? Because 3.12 will be officially supported for the next 4-5 years and I want this video to have as long a shelf-live as possible)
        - ie: `https://devguide.python.org/versions/`
    - You can download Python 3.12 by going straight to the source ie: `https://www.python.org/downloads/release/python-3122/`
    - You can ALIAS your installed python version if you like...
        - `vi ~/.zshrc`
        - `alias python='/Library/Frameworks/Python.framework/Versions/3.12/bin/python3.12'`
        - `alias pip='/Library/Frameworks/Python.framework/Versions/3.12/bin/pip3'`
    - `python --version`
    - `pip --version`
    - `python -m venv ./venv`
    - `source venv/bin/activate`
    - `touch requirements.txt`
        ```
        fastapi
        pydantic
        uvicorn
        ```
    - `pip install -r requirements.txt`
    - `pip freeze > requirements.txt`

- .git
- React
- Node.js