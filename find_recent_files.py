import os
import time

current_time = time.time()
two_hours_ago = current_time - (2 * 3600)

with open("recent_files.txt", "w", encoding="utf-8") as f:
    for root, dirs, files in os.walk("."):
        if ".git" in root or "node_modules" in root or "__pycache__" in root or ".venv" in root:
            continue
        for file in files:
            filepath = os.path.join(root, file)
            try:
                mtime = os.path.getmtime(filepath)
                if mtime > two_hours_ago:
                    f.write(f"{filepath} - {time.ctime(mtime)}\n")
            except Exception:
                pass
