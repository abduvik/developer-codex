---
title: Multiple Github Accounts
---

# Multiple Github Accounts

This is useful when you have multiple accounts for github or any other git repo provider on the same machine (ex: Work
and Personal accounts).

The concept is that we need to:

- Generate different SSH keys for each account
- Add ssh keys to `~/.ssh/config` with separate hosts
- Add condition to `.gitconfig` to use certain user for a certain directory for example
- We pull the repo using a specific host name (not the domain)

Steps:

1. Generate SSH keys:

```shell
ssh-keygen -t ed25519 -C "<email_address>"
```

1. Add the keys to `~/.ssh/config`:

```
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519

Host github.com-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal
```

1. Add the condition to `.gitconfig`:

```
[includeIf "gitdir:~/work/"]
  path = .gitconfig-work
```

Then create a `.gitconfig-work` file with the following content:

```
[user]
  email = <email_address>
  name = <name>
[core]
    sshCommand = "ssh -i /path/to/work/ssh/file -o IdentitiesOnly=yes"
```

1. Clone the repo using the specific host:

```shell
git clone git@github.com:repo_org/repo_name.git
```

For the personal account:

```shell
git clone git@github.com-personal:repo_org/repo_name.git
```

and afterwards, you can use git commands normally and it will know which credentials to use.
