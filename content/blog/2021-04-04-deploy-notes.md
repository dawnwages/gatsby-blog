---
title: Deploy Notes
date: 2019-04-04T21:16:00.000Z
description: |-
  Last Updated: Apr 4, 2021 17:16
  Notes for Deploying Heroku, Digital Ocean, Python Anywhere 
featuredpost: true
featuredimage: /content/assets/allgo-an-app-for-plus-size-people-eqlrthvn188-unsplash.jpg
thumbnail: ../assets/allgo-an-app-for-plus-size-people-eqlrthvn188-unsplash.jpg
tags:
  - deploy
  - python
  - django
  - heroku
  - ""
---
# Heroku

```
 ERROR: No matching distribution found for pkg-resources==0.0.0 (from -r /tmp/build_49c34ce3/requirements.txt (line 32))
```

Q. Why does this randomly show up in my requirements with my pip freeze? weird. Solution: just removed and it fixed the problem.

\- Multiple Buildpacks with Heroku 

<https://devcenter.heroku.com/articles/using-multiple-buildpacks-for-an-app>