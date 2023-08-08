from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, unique=True, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True)
    profile_picture = Column(String)  # Store file path or URL
    password_hash = Column(String, unique=True)

class Crate(Base):
    __tablename__ = 'crates'

    id = Column(String, nullable=False, primary_key=True)
    author = Column(String, index=True)
    description = Column(String)
    license = Column(String) 
    readme_text = Column(String)

class Depndencies(Base):
    __tablename__ ='dependencies'

    crate = Column(String, index=True)
    dependency = Column(String, index=True)

class Versions(Base):
    __tablename__ = 'versions'

    crate = Column(String, index=True)
    version = Column(String)
    upload_date = Column(DateTime)
    uploader = Column(String)
    size = Column(Integer)

class Tags(Base):
    __tablename__='tags'

    crate = Column(String, index=True)
    tag = Column(String, index=True)