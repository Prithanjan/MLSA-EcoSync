import subprocess

with open("git_diff_friend.txt", "w", encoding="utf-8") as f:
    try:
        f.write("LOG FRIEND/MAIN RECENT COMMITS:\n")
        f.write(subprocess.check_output(['git', 'log', '-n', '10', 'friend/main', '--oneline']).decode('utf-8', errors='ignore'))
        f.write("\n\nFILES DIFFERENT (HEAD vs friend/main):\n")
        f.write(subprocess.check_output(['git', 'diff', 'HEAD', 'friend/main', '--name-status']).decode('utf-8', errors='ignore'))
    except Exception as e:
        f.write("Error: " + str(e))
