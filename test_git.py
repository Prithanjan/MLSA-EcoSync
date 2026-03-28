import subprocess

with open("git_files_changed.txt", "w", encoding="utf-8") as f:
    try:
        # Show all files changed in the commits that are in origin/main but not in our main
        # Wait, if friend pushed to the repo and our HEAD is ahead or behind...
        # Let's just do git log -n 5 origin/main --stat
        out = subprocess.check_output(['git', 'log', 'origin/main', '-n', '5', '--stat']).decode('utf-8', errors='ignore')
        f.write("LOG:\n" + out + "\n")
        
        # Git diff between current HEAD and origin/main
        out_diff = subprocess.check_output(['git', 'diff', 'HEAD', 'origin/main', '--name-status']).decode('utf-8', errors='ignore')
        f.write("DIFF:\n" + out_diff + "\n")
    except Exception as e:
        f.write(str(e))
