import os
from sqlalchemy import create_engine, text
from sqlalchemy.exc import OperationalError

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql://postgres:root@trekky-hub-db:5432/postgres"
)

print("🔗 Connecting to:", DATABASE_URL)

try:
    engine = create_engine(DATABASE_URL, pool_pre_ping=True)

    with engine.connect() as conn:
        result = conn.execute(text("SELECT 1"))
        print("✅ Database connection SUCCESS")
        print("📊 Test query result:", result.scalar())

except OperationalError as e:
    print("❌ Database connection FAILED")
    print(e)
