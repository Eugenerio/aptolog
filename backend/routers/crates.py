from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from database import get_session
from models import Crate
from schemas import CrateJson

router = APIRouter(prefix="/api/crates")


@router.get("/{crate_name}", response_model=CrateJson)
def get_crate(crate_name: str, session: Session = Depends(get_session)):
    crate = session.query(Crate).filter(Crate.name == crate_name).first()
    if not crate:
        raise HTTPException(status_code=404, detail="Crate not found")
    return crate


@router.get("/{crate_name}/dependencies", response_model=list[CrateJson])
def get_crate_dependencies(crate_name: str, session: Session = Depends(get_session)):
    crate = session.query(Crate).filter(Crate.name == crate_name).first()
    if not crate:
        raise HTTPException(status_code=404, detail="Crate not found")
    return crate.dependencies
