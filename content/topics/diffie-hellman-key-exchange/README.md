---
title: Diffie-Hellman Key Exchange
---

# Diffie-Hellman Key Exchange

Diffie-Hellman Key Exchange is a method to securely exchange cryptographic keys over a public channel. It uses a mix of
asymmetric and symmetric encryption to create a secure channel.

We have three parties: Client, Server, and Attacker.

The steps are:

1. The client and server agree on two numbers: a prime number, and a base number.
2. The client and server generate a private key and a public key.
3. The client and server exchange their public keys which has the following formula:
   `public_key = (base_number ^ private_key) % prime_number`.
4. They then exchange the public keys and generate a shared secret key using the following formula:
   `shared_secret_key = (public key of the other party ^ private key) % prime_number`.
5. Doing this, mathematically, the shared secret key will be the same for both the client and server.
6. The client and server can now communicate securely using the shared secret key.

Diffie-Hellman protects against Forward Secrecy, which means that if the attacker gets the private key, they can't
decrypt the previous messages.

Protecting against Forward Secrecy is important because if the attacker gets the private key, they can decrypt all the
previous messages. With Diffie-Hellman, the attacker can't decrypt the previous messages because the shared secret key
is only used for the current session and every session has a different shared secret key.

Read more:

- [Explaining the Diffie-Hellman Key Exchange](https://www.youtube.com/watch?v=pa4osob1XOk)
- [Secret Key Exchange (Diffie-Hellman) - Computerphile](https://www.youtube.com/watch?v=NmM9HA2MQGI)
- [Diffie Hellman -the Mathematics bit- Computerphile](https://www.youtube.com/watch?v=Yjrfm_oRO0w)
- [Perfect Forward Secrecy](https://www.youtube.com/watch?v=IkM3R-KDu44)
