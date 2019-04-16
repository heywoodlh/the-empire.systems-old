---
title: 'Install Arpalert on MacOS'
date: 2019-04-16
autotoc: true
excerpt: true
layout: post.html
collection: all, macos, cybersecurity
---


## Installation:

1. Download the most recent version of [arpalert](https://www.arpalert.org/arpalert.html):
    I.E.: `curl -O 'https://www.arpalert.org/src/arpalert-2.0.12.tar.gz'` 
    

2. Extract the downloaded file and `cd` into the newly extracted directory:
    `tar xzvf arpalert*.tar.gz && cd arpalert-2.0.12`


3. Prepare your build:
    `./configure`


4. Replace `LDFLAGS = -Wl,--export-dynamic` with `LDFLAGS = -rdynamic` in the newly created Makefile:
    `sed -i -e 's/LDFLAGS = -Wl,--export-dynamic/LDFLAGS = -rdynamic/' Makefile`


5. Build arpalert:
    `make && make install`

    If you get a permission error, make sure your user owns `/opt`, or run `make install` with `sudo`.


After compiling, the arpalert binary should be available at `/opt/arpalert/sbin/arpalert`.
