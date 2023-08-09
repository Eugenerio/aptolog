from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from datetime import timedelta
from fastapi.security import OAuth2PasswordRequestForm

from database import get_session 
from dependencies.auth import authenticate_user, create_access_token, get_current_active_user, get_password_hash
from models import User, Role, UserToRole 
from schemas import LogInRequest, Token, UserIn, UserRead, TokenJson

router = APIRouter(prefix="/api/auth")

@router.post("/token", response_model=Token)
def get_token(
    form_data: OAuth2PasswordRequestForm = Depends()
):
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(data={"sub": user.username})
    return {"access_token": access_token, 'token_type':"bearer"}

@router.post("/login", response_model=TokenJson)
def login(login_request: LogInRequest):
    user = authenticate_user(login_request.username, login_request.password)
    
    if not user:
        print(f"Login failed for username: {login_request.username}")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # Print the hashed password for debugging purposes
    # hashed_password = get_password_hash(login_request.password)
    # print(f"Input password hash: {hashed_password}")
    
    access_token = create_access_token(data={"sub": user.username})
    return {"token": access_token, 'token_type':"bearer"}


@router.get("/users/me", response_model=UserRead)
def read_user_me(current_user: User = Depends(get_current_active_user)):
    user = UserRead(username=current_user.username, email=current_user.email)
    return user

@router.get("/users/me/items")
def read_own_items(current_user: User = Depends(get_current_active_user)):
    return [{"item_id": "Foo", "owner": current_user.username}]

@router.post("/signup", response_model=UserRead)
def sing_up(user: UserIn, session: Session = Depends(get_session)):
    existing_user = session.query(User).filter(User.email == user.email).first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already exists",
        )

    hashed_password = get_password_hash(user.password)

    new_user = User(email=user.email, username=user.username, password=hashed_password)
    session.add(new_user)
    session.commit()

    # Assign the default ROLE_USER role to the user
    role = session.query(Role).filter(Role.name == "ROLE_USER").first()
    if role:
        user_to_role = UserToRole(user_id=new_user.id, role_id=role.id)
        session.add(user_to_role)
        session.commit()

    session.refresh(new_user)

    access_token = create_access_token(data={"sub": user.username})
    return {"token": access_token, 'token_type':"bearer"}
