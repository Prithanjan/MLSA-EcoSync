import subprocess

with open("git_ls_remote.txt", "w", encoding="utf-8") as f:
    try:
        f.write("LS REMOTE:\n")
        f.write(subprocess.check_output(['git', 'ls-remote', 'origin']).decode('utf-8', errors='ignore'))
    except Exception as e:
        f.write(str(e))
