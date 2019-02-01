---
title: 'Install Ansible Awx'
date: 2019-02-01
autotoc: true
excerpt: true
layout: post.html
collection: all, linux
---


## Prerequisites:

    - Python and pip installed: `sudo apt-get install python python-pip`
    - Docker (latest version) installed: (https://docs.docker.com/install/linux/docker-ce/ubuntu/)
    - Docker python module installed: `sudo pip install docker`
    - Ansible (latest version) installed: https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#latest-releases-via-apt-ubuntu


## Installation:

1. Download Ansible Awx
    
    ```
    cd /opt
    git clone https://github.com/ansible/awx
    cd awx/installer
    ```




2. Edit the following values in the "inventory" file (set with any values desired – not the default):

    ```
    shost_port=80
    ...
    pg_username=awx
    pg_password=awxpass
    pg_database=awx
    pg_port=5432
    postgres_data_dir=/opt/pgdocker
    ...
    rabbitmq_password=awxpass
    rabbitmq_erlang_cookie=cookiemonster
    ...
    admin_user=admin
    admin_password=password
    ...
    secret_key=awxsecret
    ```




3. Run the installer:

    ```
    ansible-playbook -i inventory install.yml
    ```



The install should be complete and the web interface should be accessible on the remote server on whatever port was specified in the inventory file in Step 2.
