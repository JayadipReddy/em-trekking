from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy.exc import OperationalError
from sqlalchemy import text
import time

from database import SessionLocal, engine
from models import Base, User
from schemas import RegisterRequest, LoginRequest

app = FastAPI()

# ✅ CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:30007"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ DB dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ✅ WAIT for DB before app starts (K8s-safe)
@app.on_event("startup")
def startup_event():
    retries = 10

    while retries > 0:
        try:
            # 🔍 lightweight connection test
            with engine.connect() as conn:
                conn.execute(text("SELECT 1"))

            # 🧱 create tables AFTER DB is reachable
            Base.metadata.create_all(bind=engine)

            print("✅ Database connected & tables ready")
            return

        except OperationalError as e:
            print(f"⏳ Database not ready, retrying... ({retries})")
            retries -= 1
            time.sleep(3)

    raise Exception("❌ Database connection failed after retries")

# ✅ Register
@app.post("/register")
def register(user: RegisterRequest, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(User.email == user.email).first()
    if existing_user:
        return {"success": False, "message": "Email already exists"}

    new_user = User(
        name=user.name,
        email=user.email,
        password=user.password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"success": True, "message": "User registered successfully"}

# ✅ Login
@app.post("/login")
def login(user: LoginRequest, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(
        User.email == user.email,
        User.password == user.password
    ).first()

    if not db_user:
        return {"success": False, "message": "Invalid email or password"}

    return {"success": True, "message": "Login successful"}
