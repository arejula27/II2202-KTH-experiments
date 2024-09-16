# hello world with FastAPI

from fastapi import FastAPI, Response

app = FastAPI()


@app.get("/")
def greet(response: Response):
    response.headers["content-type"] = "text/plain"
    return "Hello World"
