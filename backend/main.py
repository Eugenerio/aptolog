from functools import lru_cache

from fastapi import FastAPI, Depends, APIRouter, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse, PlainTextResponse
from starlette.exceptions import HTTPException as StarletteHTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from fastapi import Depends, HTTPException, status
from datetime import timedelta

from dependencies.auth import authenticate_user, create_access_token

from routers import auth, content

import config


app = FastAPI()
router = APIRouter()
app.include_router(auth.router)
app.include_router(content.router)

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True, 
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.exception_handler(StarletteHTTPException)
async def http_error_handler(request, exc):
    print(f"{repr(exc)}")
    return PlainTextResponse(str(exc.detail), status_code=exc.status_code)

@lru_cache()
def get_settings():
    return config.Settings()

@app.get("/")
def read_root(settings: config.Settings = Depends(get_settings)):
    print(settings.app_name)
    return "Hello World"

# TODO: this is the wrong thing
@router.post("/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    username = form_data.username
    password = form_data.password

    user = authenticate_user(username, password)  # Call your authentication function

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # If authentication is successful, generate an access token
    access_token_expires = timedelta(minutes=15)
    access_token = create_access_token({"sub": user.username}, expires_delta=access_token_expires)

    # Return a response indicating a successful login along with the access token
    return {"message": "Login successful", "access_token": access_token, "token_type": "bearer"}






@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):

    exc_str = f'{exc}'.replace('\n', ' ').replace('   ', ' ')
    content = {'status_code': 10422, 'message': exc_str, 'data': None}
    return JSONResponse(content=content, status_code=status.HTTP_422_UNPROCESSABLE_ENTITY)

# @app.on_event("startup")
# async def startup_db():
#     await database.connect()
#     metadata.create_all(bind=engine)

# @app.on_event("shutdown")
# async def shutdown_db():
#     await database.disconnect()
