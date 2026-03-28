import subprocess

with open("git_log_local.txt", "w", encoding="utf-8") as f:
    try:
        f.write("LOCAL LOG:\n")
        f.write(subprocess.check_output(['git', 'log', '-n', '10', '--oneline']).decode('utf-8', errors='ignore'))
    except Exception as e:
        f.write(str(e))
