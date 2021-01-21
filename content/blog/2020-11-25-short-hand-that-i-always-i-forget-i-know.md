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

* How to resolve git conflict in pipenv lockfiles -- Robert Rees:  <https://dev.to/rrees/resolving-git-conflicts-in-pipenv-lockfiles-2g03?signin=true>