import subprocess

with open("git_remotes.txt", "w", encoding="utf-8") as f:
    try:
        f.write("REMOTES:\n")
        f.write(subprocess.check_output(['git', 'remote', '-v']).decode('utf-8', errors='ignore'))
        f.write("\nBRANCHES:\n")
        f.write(subprocess.check_output(['git', 'branch', '-a']).decode('utf-8', errors='ignore'))
        f.write("\nLOG OF ALL BRANCHES RECENT:\n")
        f.write(subprocess.check_output(['git', 'log', '--all', '--oneline', '-n', '15']).decode('utf-8', errors='ignore'))
    except Exception as e:
        f.write(str(e))
