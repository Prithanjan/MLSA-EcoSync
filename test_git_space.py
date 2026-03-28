import subprocess

with open("git_diff_space.txt", "w", encoding="utf-8") as f:
    try:
        f.write("DIFF HEAD vs space/main:\n")
        f.write(subprocess.check_output(['git', 'diff', '--name-status', 'HEAD', 'space/main']).decode('utf-8', errors='ignore'))
        f.write("\nLOG OF space/main:\n")
        f.write(subprocess.check_output(['git', 'log', '-n', '5', 'space/main']).decode('utf-8', errors='ignore'))
    except Exception as e:
        f.write(str(e))
