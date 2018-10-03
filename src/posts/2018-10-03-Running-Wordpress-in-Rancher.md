---
layout: post.html
date: 2018-10-3
collections: all, server, linux, docker
---


Rancher is an awesome service/operating system for managing Docker containers. In this post I will be using DigitalOcean as my infrastructure for running Rancher. This will be written shorthand mainly so I remember how to do this in the future.



### Deploying Rancher:

1. Create Droplet:

- Droplets > Create > Container Distributions > Rancher

- Size: 4G RAM, 2 vCPUs, 80GB SSD, 4 TB Transfer

- Additional Config

CREATE


2. Deploy Rancher Server (Web Dashboard):

- `sudo docker run -d --restart=unless-stopped -p 8080:8080 rancher/server`


3. Access Web Dashboard: http://<ip>:8080



### Add DigitalOcean Hosts: 


1. Obtain DigitalOcean API key:

- API > Tokens/Keys > Generate New Token

- Save the key somewhere secure


2. Add DO Hosts via Rancher:

- Infrastructure > Hosts > Add Hosts > Select the DigitalOcean Icon

- Enter your access token

- Enter all the configuration desired (do the defaults if unsure)



### Deploy Wordpress:

1. Deploy Wordpress stack:

- Stacks > All > Add from Catalog > Wordpress > View Details

- Enter all the configuration desired

LAUNCH


