from sqlalchemy import Column, Integer, String, DateTime, Text
from sqlalchemy.orm import relationship
from database import Base, engine


class UserToRole(Base):
    __tablename__ = "users_to_roles"
    user_id = Column(Integer, primary_key=True)
    role_id = Column(Integer, primary_key=True)


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    username = Column(String(255), unique=True, nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    profile_picture = Column(String(255))
    password = Column(String(255), nullable=False)
    crates = relationship(
        "Crate",
        foreign_keys="Crate.author_id",
        primaryjoin="User.id == Crate.author_id",
        back_populates="author",
    )
    roles = relationship(
        "Role",
        secondary="users_to_roles",
        primaryjoin=id == UserToRole.user_id,
        secondaryjoin="UserToRole.role_id == Role.id",
        back_populates="users",
    )


class Role(Base):
    __tablename__ = "roles"
    id = Column(Integer, primary_key=True)
    name = Column(String(255), default="ROLE_USER", nullable=False, unique=True)
    users = relationship(
        User,
        secondary="users_to_roles",
        primaryjoin=id == UserToRole.role_id,
        secondaryjoin=UserToRole.user_id == User.id,
        back_populates="roles",
    )


class Dependency(Base):
    __tablename__ = "dependencies"
    crate_id = Column(Integer, primary_key=True)
    dependency_id = Column(Integer, primary_key=True)


class Crate(Base):
    __tablename__ = "crates"
    id = Column(Integer, autoincrement=True, primary_key=True)
    name = Column(String(255), nullable=False, unique=True)
    author_id = Column(Integer, index=True, nullable=False)
    description = Column(Text, nullable=True)  # Nullable if needed
    license = Column(String(255), nullable=True)  # Nullable if needed
    readme_text = Column(Text, nullable=True)  # Nullable if needed
    author = relationship(
        User,
        foreign_keys=author_id,
        primaryjoin=User.id == author_id,
        back_populates="crates",
    )
    versions = relationship(
        "Version",
        foreign_keys="Version.crate_id",
        primaryjoin="Crate.id == Version.crate_id",
        back_populates="crate",
    )
    dependencies = relationship(
        "Crate",
        secondary="dependencies",
        primaryjoin=id == Dependency.crate_id,
        secondaryjoin=Dependency.dependency_id == id,
        back_populates="dependents",
    )
    dependents = relationship(
        "Crate",
        secondary="dependencies",
        primaryjoin=id == Dependency.dependency_id,
        secondaryjoin=Dependency.crate_id == id,
        back_populates="dependencies",
    )
    tags = relationship(
        "Tag",
        foreign_keys="Tag.crate_id",
        primaryjoin="Crate.id == Tag.crate_id",
        back_populates="crate",
    )


class Version(Base):
    __tablename__ = "versions"
    crate_id = Column(Integer, primary_key=True)
    version = Column(String(255), primary_key=True)
    upload_date = Column(DateTime, nullable=False)
    uploader_id = Column(Integer, nullable=False)
    size = Column(Integer, nullable=False)
    crate = relationship(
        Crate,
        foreign_keys=crate_id,
        primaryjoin=Crate.id == crate_id,
        back_populates="versions",
    )
    uploader = relationship(
        User,
        foreign_keys=uploader_id,
        primaryjoin=User.id == uploader_id,
    )


class Tag(Base):
    __tablename__ = "tags"
    crate_id = Column(Integer, primary_key=True)
    tag = Column(String(255), primary_key=True)
    crate = relationship(
        Crate,
        foreign_keys=crate_id,
        primaryjoin=Crate.id == crate_id,
        back_populates="tags",
    )
