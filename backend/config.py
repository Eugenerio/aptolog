from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    app_name: str = "Aptolog"
    db_host: str
    db_username: str
    db_password: str
    db_database: str
    db_port: str

    class Config:
        env_file=".env"
    