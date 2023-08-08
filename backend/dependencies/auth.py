from typing import Optional
from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session
from datetime import datetime, timedata
from fastapi.security import OAuth2AuthorizationCodeBearer
from jose import JWTError, jwt
from passlib.context import CryptContext

from database import engine
from models import User
from schemas import TokenData

SECRET_KEY = "b7d8e69bd8f9df2fa9b8635e30f6357426f5fe4069548f0ec0b5fa5d076195ce"
ALGORITHM = 'HS256'

pwd_context = 
