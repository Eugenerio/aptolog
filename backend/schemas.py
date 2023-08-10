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
    email: str
    password: str


class UserRead(BaseModel):
    username: str
    email: str


class UserJson(BaseModel):
    username: str
    profile_picture: Optional[str]

    class Config:
        orm_mode = True


class CrateJson(BaseModel):
    name: str
    author: UserJson
    description: Optional[str]

    class Config:
        orm_mode = True
