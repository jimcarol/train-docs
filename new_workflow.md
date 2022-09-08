# HSH GIT WORKFLOW

## Branchs
- **feature:** Each new feature should reside in its own branch, which can be pushed to the central repository for backup/collaboration. feature branches use develop as their parent branch. When a feature is complete, create a pull request to develop. 
- **develop:**  the develop branch serves as an integration branch for features
- **qa:** Once has enough features ready for testing, fork a qa branch off of develop. All branches that need to be tested should be merged into the QA branch
- **staging:** Once qa branch has acquired enough features for UAT, fork a Staging branch off of qa
- **main:**  Once UAT passed and ready to ship.
  - Pick the features that need to be released
  - merge these branchs into develop
  - Merge develop into the main branch

## Example
A complete example demonstrating a Feature Branch Flow is as follows.

1.STEP1
> ROLE: developer
```sh
git checkout develop
git pull origin develop
git checkout -b feature/hsh-101-update-layout-ui
# coding...
git add .
git commit -m "feat(hsh-101): update layout ui"
git push origin feature/hsh-101-update-layout-ui
# goto bitbucket issue a pull request

# 1.1 fix bugs
# coding...
git add .
git commit -m "feat(hsh-101): adjust spacing"
git push origin feature/hsh-101-update-layout-ui
```

2.STEP2
> ROLE: Tech Lead

```sh
# goto bitbucket review pull request
git checkout develop
git pull origin develop
git checkout -b qa
git pull origin feature/hsh-101-update-layout-ui
git push origin qa

# release 1.1-fix-bugs to qa
git checkout qa
git pull origin feature/hsh-101-update-layout-ui
git push origin qa
```

3.STEP3
verifed on QA, ready to go live
> ROLE: Tech Lead
1. goto bitbucket and merge feature branch to develop
2. merge develop to main

