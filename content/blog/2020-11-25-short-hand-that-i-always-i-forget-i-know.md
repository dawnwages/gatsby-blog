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

If you want to kill a process running on port number 8080 then first you need to find the 8080 port process identification number(PID) and then kill it. Run the following command to find 8080 port number PID:

```

```

Here,

* **sudo** - command to ask admin privilege(user id and password).
* **lsof** - list of files(Also used for to list related processes)
* **\-t** - show only process ID
* **\-i** - show only internet connections related process
* **:8080** - show only processes in this port number

So you can now easily kill your PID using following command:

```
sudo lsof -t -i:8080
```

Here,

* kill - command to kill the process
* \-9 - forcefully

You can use one command to to kill a process on a specific port using the following command:

```
sudo kill -9 <PID>
```

For more you can see the following link [How to kill a process on a specific port on linux](https://mr-khan.gitlab.io/linux/2018/05/02/kill-specific-port-on-linux.html)