**[Demo of changes in this branch](http://geckos19-hangman.surge.sh)**
----------------------
# v8-geckos-team-19
Add-project-description-here | Voyage-8 | https://chingu.io/

Before submitting a PR
----------------------

Clean up all:

Ghost Code

Console logs

Code indentations

White spaces

Empty lines at EOF

If there are passwords remove them and use environment variables

IDE setting files are not to be committed

Removing files that have been committed that you want to add to the gitignore

if you have already committed the file it won't go away if you have added the gitignore rule afterwards.

So the easiest way to fix this is to make a local copy on your laptop
delete it in the repo
commit this change
then add it back

Debugging React
---------------
https://code.visualstudio.com/docs/nodejs/reactjs-tutorial#_debugging-react

How to resolve comments
-----------------------

STEP 1 - If a reviewer requires changes, and you agree to those changes then change whatever is required to change on the branch that needs to be merged in.

STEP 2 - Once you've made the changes COMMIT and PUSH those changes.
Your changes will automatically be updated on your PR once you refresh the page.

STEP 3 - Reply back on that comment "Done" so that the reviewer knows and can check it for you.

STEP 4 - The reviewer will resolve the comment, you SHOULD NOT resolve the comment yourself.

STEP 5 - Once all comments are resolved you are allowed to merge your PR.


Workflow
--------

1. Ensure that your repository is up-to-date with develop

If it is not, Use "Git pull origin develop"

2. Once your repository is up-to-date with develop, create a feature branch from the develop branch

To move to a new branch use "Git checkout -b <name_of_branch>"

3. Once you're on a new branch, you can make the changes required

4. Once the changes have been made, you can commit your changes

To add changed files, use "Git add ."

5. Once you have added your changed files, commit them

To commit them, use "Git commit -m "First files" "

6. Once you have commit have committed them, push them to the remote repository only after pulling the develop branch

*To pull the project, you will have to use "Git pull origin develop"*

To push them to the remote repository, use "Git push origin <name_of_branch>"

7. Once you have pushed to the remote repository, make sure that you make a pull request against the develop branch

and add reviewers
