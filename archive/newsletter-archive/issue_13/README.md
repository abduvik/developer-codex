---
date: 2023-08-13
---

# Issue #13: Options vs Head, Auth with OAuth vs SAML vs Kerberos

Good morning Techiees 🧑‍💻

I am finally making progress to clean up my 567 Chrome tabs 🙈 and making use of my new mini whiteboard to organize my
daily todos. Very handy and only costs €5 from Woolworth ❤️

Using physical todos is more satisfying than complex Notion setups 😌

## Technical Summaries

### OPTIONS vs HEAD methods

OPTIONS is used to get the allowed methods for an endpoint

HEAD is used to get meta information about the resource. They should have the same headers as the GET method response
without the body. Also, this helps to check if the a cached resource should be invalided and a GET request should be
initiated.

Read more:

- [RESTful API methods; HEAD & OPTIONS](https://stackoverflow.com/questions/6660019/restful-api-methods-head-options)

### OAuth vs SAML vs Kerberos

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
  avoid
  sharing keys between these many services
- Parties: many services and a Key Distribution Center which includes two servers Authentication server and Ticket
  Granting server
- Main Task: Gives access and keys to a service to communicate with another service using a session key

Read more:

- [An Illustrated Guide to OAuth and OpenID Connect](https://www.youtube.com/watch?v=t18YB3xDfXI)
- [How SAML Authentication Works](https://www.youtube.com/watch?v=VzRnb9u8T1A)
- [Taming Kerberos - Computerphile](https://www.youtube.com/watch?v=qW361k3-BtU)
- [What is the difference between OpenID and SAML?](https://stackoverflow.com/questions/7699200/what-is-the-difference-between-openid-and-saml)

## Videos of the Week

### Blue Light Glasses: A Waste of Money? Explained by an MD

@[youtube](https://www.youtube.com/watch?v=h8feWf7X750)

### Why Corporate America Is Obsessed With "Company Culture"

@[youtube](https://www.youtube.com/watch?v=88SGfykwt8g)
