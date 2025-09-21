---
title: Using Docker-in-Docker
---

# Using Docker-in-Docker

Using Docker-in-Docker or DinD is useful for docker development or when you want to have different isolated environments
for a complex application like CI for example. Though I needed to use this approach to run a WordPress Multi-tenant
architecture and it worked nicely.

There are two ways to run a DinD:

- Run a Docker container inside another Docker container and it will have its own Docker daemon and spawned containers
- Run a Docker container and share the host Docker socket with the container so that it runs containers on the host
  directly

I needed to use the second approach. The idea is to share the host socket `/var/run/docker.sock:/var/run/docker.sock`
with the Docker container.

So an example command will be like this

```sh
docker run -it -v /var/run/docker.sock:/var/run/docker.sock docker:26-cli docker run nginx
```

This will run a nginx container from a docker container all shared on the same docker host

Read more:

- [Using Docker-in-Docker for your CI or testing environment? Think twice](https://jpetazzo.github.io/2015/09/03/do-not-use-docker-in-docker-for-ci/)
