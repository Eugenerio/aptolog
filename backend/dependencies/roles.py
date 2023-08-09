from sqlalchemy.orm import Session 
from fastapi import Depends, HTTPException

from database import get_session
from models import Role, User, UserToRole
from routers.auth import get_current_active_user

def user_role(session: Session = Depends(get_session), current_user: User = Depends(get_current_active_user)):
    role = session.query(Role).filter(Role.name == "ROLE_USER").first()
    user_to_roles = session.query(UserToRole).filter(UserToRole.user_id == current_user.id, UserToRole.role_id == role.id).all()
    if len(user_to_roles) == 0:
        raise HTTPException(403, "User not found")
    return current_user

