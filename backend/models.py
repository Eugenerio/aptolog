from sqlalchemy import Column, Integer, String, DateTime
from database import Base, engine

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, unique=True, primary_key=True, index=True)
    username = Column(String(255))
    email = Column(String(255), unique=True)
    profile_picture = Column(String(255))
    password = Column(String(255), unique=True)

class Role(Base):
    __tablename__ = "roles"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), default="ROLE_USER")  # Default to ROLE_USER

class UserToRole(Base):
    __tablename__ = "users_to_roles"
    user_id = Column(Integer, primary_key=True)
    role_id = Column(Integer, primary_key=True)

class Crate(Base):
    __tablename__ = 'crates'
    id = Column(Integer, autoincrement=True, primary_key=True)
    name = Column(String(255), nullable=False, unique=True)
    author = Column(String(255), index=True)
    description = Column(String)  # Use String instead of Text for MySQL compatibility
    license = Column(String(255)) 
    readme_text = Column(String)  # Use String instead of Text for MySQL compatibility

class Dependencies(Base):
    __tablename__ ='dependencies'
    id = Column(Integer, autoincrement=True, primary_key=True)
    crate_id = Column(Integer, index=True)
    dependency = Column(String(255), index=True)

class Versions(Base):
    __tablename__ = 'versions'
    id = Column(Integer, autoincrement=True, primary_key=True)
    crate_id = Column(Integer, index=True)
    version = Column(String(255))
    upload_date = Column(DateTime)
    uploader = Column(String(255))
    size = Column(Integer)

class Tags(Base):
    __tablename__='tags'
    id = Column(Integer, autoincrement=True, primary_key=True)
    crate_id = Column(Integer, index=True)
    tag = Column(String(255), index=True)

Base.metadata.create_all(bind=engine, checkfirst=True)
