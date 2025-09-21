---
title: OAuth vs SAML vs Kerberos
---

# OAuth vs SAML vs Kerberos

They are all ways to help authenticate and authorize users/services to another service through an identity provider.
They use different strategies and have some differences between them.

OAuth:

- Parties are: Client, Service Provider, and Authorization Provider
- Main task: It gives a service provider access to some resource through the Authorization Provider requiring Client’s
  consent
- OAuth allows to give scopes to these service providers to have certain access
- OAuth returns an Access Token to be used by the service provider
- OAuth can have an identity layer and it’s named OpenId Connect or OIDC, it returns also an Id Token which is used to
  identify the user
- JSON-Based and uses JWTs
- More modern and used by newer apps
- Doesn’t require prior introduction between the Authorization Provider and Service Provider making it easy to setup

SAML:

- Used mainly for Authentication but can have an authorization layer
- Parties are: Client, Service Provider and Identity provider
- Main task: it gives access to a client to a service provider through the identity provider
- Very similar to OIDC
- XML based and used by older applications and government software

Kerberos

- Used mainly for Authentication & Authorization among a bunch of services with asymmetric keys (no public key) and
  avoid sharing keys between these many services
- Parties: many services and a Key Distribution Center which includes two servers Authentication server and Ticket
  Granting server
- Main Task: Gives access and keys to a service to communicate with another service using a session key

Read more:

- [An Illustrated Guide to OAuth and OpenID Connect](https://www.youtube.com/watch?v=t18YB3xDfXI)
- [How SAML Authentication Works](https://www.youtube.com/watch?v=VzRnb9u8T1A)
- [Taming Kerberos - Computerphile](https://www.youtube.com/watch?v=qW361k3-BtU)
- [What is the difference between OpenID and SAML?](https://stackoverflow.com/questions/7699200/what-is-the-difference-between-openid-and-saml)
