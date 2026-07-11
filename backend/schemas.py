from pydantic import BaseModel, Field

class QuoteRequest(BaseModel):
    material: str = Field(..., examples=["Aluminium"])
    process: str = Field(..., examples=["CNC"])
    quantity: int = Field(..., examples=[25])
    tolerance: str = Field(..., examples=["Medium"])