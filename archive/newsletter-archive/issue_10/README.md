---
date: 2023-03-28
---

# Issue #10: Github Copilot X, Tackling Technical Debt and SELinux

Hey Friends,

Hope you all doing alright and having a nice start to the week ❤️

A bit of a long time since I published the last issue but it has been quite a ride since then :D I finally got my tax
refund sorted with the Tax office, am about to finish a huge project I am working on with a client, traveled to lovely
Passau, and focusing now to get in shape and finaaallly to get better in Deutsch 🇩🇪

This week’s summary is packed with good stuff and I am sure you will like it!

Wish you all stay healthy, and fit and enjoy the upcoming good weather ☀️

## Technical Summaries

### Github X

I have been working on a huge consultation project for the past few months building a system similar to Monday.com or
Personio but for nursing facilities with the help of Github Copilot which has been an arsenal on its own helping me
programming in .NET which I never used before.

Now, GitHub has announced GitHub Copliot X which is the upcoming generation of Github Copilot and a few upcoming
features will be:

- Integrating the same model as ChatGPT-4
- Integrating Chat into VSCode which will help you understand pieces of code within the IDE
- Writing unit tests
- Writing Pull Requests descriptions
- Integration with Frameworks docs

Programming is never going to be the same and too much fun is coming up with this new toy :D

Read more:

- [GitHub Copilot X: The AI-powered developer experience](https://github.com/features/copilot)

### 6 Steps to Tackle Technical Debt by [Seifeldin Mahjoub](https://www.linkedin.com/in/seif-sayed/)

Seif managed to transform a UI design system with a heavy technical debt to have repaid all of it with full interest :D

In his article, he shares tips and ideas on how to practically tackle technical debt both from engineering and
management perspectives:

- Building trust among team members is crucial for tackling technical debt effectively. This involves being open and
  honest in communication, treating others with respect and kindness, and focusing on a shared vision.

- Making technical debt visible through tools like a tech debt radar can help prioritize the most pressing issues and
  drive progress.

- It's important to prove the need for technical debt management to stakeholders, highlighting the risks and financial
  impact of neglecting it.

- Breaking down technical debt into smaller, manageable phases and prioritizing using frameworks like the Cyfin
  framework can help make the job more manageable.

- Allocating dedicated time for technical improvements and making it a part of the development process can help drive
  progress.

- Engineers should take ownership of the code and lead by example in tackling technical debt, ultimately leading to
  improved results for the team and the company.

Read the full article:

- [From Technical Debt to Technical Wealth: A Team Approach](https://javascript.plainenglish.io/from-technical-debt-to-technical-wealth-a-team-approach-5179f9eaeb2a)

::: tip Let's spread knowledge ❤️
Do you write tech articles? If you're interested in having your content shared with a wider audience, please send me
your links and I'll attach a summary for it here.
:::

### SELinux

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
