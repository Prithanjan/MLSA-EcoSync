import subprocess

with open("git_branches_sorted.txt", "w", encoding="utf-8") as f:
    out = subprocess.check_output(['git', 'for-each-ref', '--sort=-committerdate', 'refs/remotes/']).decode('utf-8', errors='ignore')
    f.write(out)
