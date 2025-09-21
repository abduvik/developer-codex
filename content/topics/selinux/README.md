---
title: SELinux
---

# SELinux

SELinux (Security-Enhanced Linux) is a security mechanism that provides an additional layer of protection to Linux
systems. It is built into the Linux kernel and uses a Mandatory Access Control (MAC) model to enforce access controls
and restrict unauthorized access to system resources.

SELinux's security mechanism is based on security contexts or labels assigned to files, processes, and other resources.
The context is a combination of a user identity, role, and type that defines the level of access a resource has.

It was developed by the US National Security Agency (NSA) and is now included in most modern Linux distributions.

Some of the most important components of SELinux are:

- Security server: responsible for enforcing security policies and access controls.

- Security Policy: a set of rules and guidelines that define how the Security server should enforce access controls on
  the system.

- SELinux Utilities: command-line tools that allow system administrators to manage and configure SELinux policies,
  contexts, and other related settings.

- Audit system: logs security events and other system activity for troubleshooting, tracking system activity, and
  providing forensic analysis in case of a security breach.

- Security Contexts: are assigned to files, processes, and network resources, and define their level of access.

SELinux can be used with container technologies such as Docker and Kubernetes to enhance their security. By enabling
SELinux, access controls can be restricted, preventing unauthorized access to system resources, and improving the
overall security of containerized applications.

Read more:

- [Security-Enhanced Linux for mere mortals by Thomas Cameron](https://www.youtube.com/watch?v=_WOKRaM-HI4)
