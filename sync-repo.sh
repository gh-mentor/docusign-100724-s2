# This bash script uses git to sync changes between the local and remote GitHub repository on branch 'main'.

# Steps: pull changes from the remote repo, stage the changes, and commit the changes, then push changes to the remote repo.

# Pull changes from the remote repo
git pull origin main

# Stage the changes
git stage .

# Commit the changes
git commit -m "Sync changes between local and remote repo"

# Push changes to the remote repo
git push origin main
