from typing import Optional
from pydantic import BaseModel

class LogInRequest(BaseModel):
    username: str
    password: str

class TokenJson(BaseModel):
    token: str 
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class UserIn(BaseModel):
    username: str
    email : str
    password: str

class UserRead(BaseModel):
    username: str
    email: str