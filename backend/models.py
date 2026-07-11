from sqlalchemy import Column, Integer, String
from database import Base


class Quote(Base):
    __tablename__ = "quotes"

    id = Column(Integer, primary_key=True, index=True)

    material = Column(String)
    process = Column(String)
    quantity = Column(Integer)
    tolerance = Column(String)

    estimated_price = Column(Integer)
    lead_time = Column(String)