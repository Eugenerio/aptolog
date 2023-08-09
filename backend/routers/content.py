from fastapi import APIRouter, Depends
from dependencies.auth import get_current_active_user

from dependencies.roles import user_role
from models import User
from schemas import UserRead

router = APIRouter(prefix="/api/test")

@router.get("/user")
def user(current_user=Depends(user_role)):
    return "user content"

@router.get("/all")
def all():
    return "public content"

@router.get("/profile", response_model=UserRead)
def read_users_me(current_user: User = Depends(get_current_active_user)):
    user = UserRead(username=current_user.username, email=current_user.email)
    return user

