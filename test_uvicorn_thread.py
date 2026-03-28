import threading
from fastapi import FastAPI
import uvicorn
import time

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

def run_uvicorn():
    try:
        print("Starting uvicorn in thread...")
        uvicorn.run(app, host="127.0.0.1", port=8001)
        print("Uvicorn started successfully in thread.")
    except Exception as e:
        print(f"ERROR STARTING UVICORN: {e}")

if __name__ == "__main__":
    t = threading.Thread(target=run_uvicorn, daemon=True)
    t.start()
    time.sleep(2)
    print("Main thread finishing")
