---
title: Short Hand That I Always I Forget I know
date: 2020-06-01T17:17:06.094Z
description: Git, Postgres, Yarn, why am I always looking these commands up?
  Idk. This post is more for me than it is for you but I hope you gain something
  from it as well.
featuredpost: false
featuredimage: /content/assets/bbbb.jpg
thumbnail: ../assets/bbbb.jpg
tags:
  - postgresql
  - git
  - pipenv
  - virtualenv
  - django migrations
---
# Git

```shell
git commit --amend --no-edit
```

# PostgreSQL

\- Super intro sh*t I always forget the order : [https://www3.ntu.edu.sg/home/ehchua/programming/sql/PostgreSQL_GetStarted.html](https://www3.ntu.edu.sg/home/ehchua/programming/sql/PostgreSQL_GetStarted.htmlhttps://www3.ntu.edu.sg/home/ehchua/programming/sql/PostgreSQL_GetStarted.html)

<https://www.cyberciti.biz/faq/howto-add-postgresql-user-account/>

\- <https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-18-04>

\- <https://www.digitalocean.com/community/tutorials/how-to-deploy-django-to-app-platform>

# Python

```python
# One liner for the terminal
python -c "import sys; print('\n'.join(sys.path))"


"""
If you are on Linux

    Open your favorite terminal program;

    Open the file ~/.bashrc in your text editor – e.g. atom ~/.bashrc;

    Add the following line to the end:
"""
        export PYTHONPATH=/home/my_user/code
"""
    Save the file.

    Close your terminal application;

    Start your terminal application again, to read in the new settings, and type this:
"""
        echo $PYTHONPATH
"""
    It should show something like /home/my_user/code.
"""
```

# Django Migrations

*

# virtualenv

* virtualenv wrapper aliases for venv users -- Tim Allen : <https://www.pyphilly.org/virtualenvwrapper-aliases-venv-users/>

# Pipenv

(no longer being supported) use virtualenv love <3 ;`(

* How to resolve git conflict in pipenv lockfiles -- Robert Rees:  <https://dev.to/rrees/resolving-git-conflicts-in-pipenv-lockfiles-2g03?signin=true>

```python
65

The following should give you the paths

$ pipenv --where
/home/wonder/workspace/myproj

$ pipenv --venv
/home/wonder/PyEnvs/myproj-BKbQCeJj
```

## \- Linux - How to end a port that's hanging out there

**Step 1:**

Open up cmd.exe (note: you *may* need to run it as an administrator, but this isn't always necessary), then run the below command:

> `netstat -ano | findstr :<PORT>`

(Replace `<PORT>` with the port number you want, but keep the colon)

![](https://i.stack.imgur.com/lEpCZ.png)

The area circled in red shows the PID (process identifier). Locate the PID of the process that's using the port you want.

**Step 2:**

Next, run the following command:

> `taskkill /PID <PID> /F`

(No colon this time)

![](https://i.stack.imgur.com/8k64x.png)

Lastly, you can check whether the operation succeeded or not by re-running the command in "Step 1". If it was successful you shouldn't see any more search results for that port number.