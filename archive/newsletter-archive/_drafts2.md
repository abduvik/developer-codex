### Sub-netting

Subnetting is a way to help divide the network and make it easier to find the device to connect to.

Important concepts to understand:

- **IP Address**: A unique identifier for a device on a network.
- **Subnet Mask**: A 32-bit number that separates the network and host portions of an IP address.

Reserved IP addresses:

- `192.168.0.1`: Router
- `192.168.1.255`: Broadcast channel

### Channel Messaging API

The Channel Messaging API allows you to communicate between different browsing contexts (windows, tabs, iframes, web
workers). The transfer is done through a `MessageChannel` object which create two `MessagePort` then we use the
`postMessage` method to send messages to another context.

On the parent context:

```html
<iframe id="iframe" src="./iframe.html"></iframe>
<script>
  const messageChannel = new MessageChannel();
  messageChannel.port1.onmessage = (event) => {
    console.log(event.data);
  };
  const iframe = document.getElementById("iframe");
  iframe.addEventListener("load", () => {
    iframe.contentWindow.postMessage("Hello from parent!", "*", [
      messageChannel.port2,
    ]);
  });
</script>
```

On the iframe context:

```html
<script>
  window.addEventListener("message", (event) => {
    if (!event.ports.length) return;
    console.log(event);
    event.ports[0].postMessage("Hello from iframe!");
  });
</script>
```

`MessagePort` is also a transferable object, which means that it can be transferred between different browsing contexts
then it won't be available in the original context. Transferable objects are used to improve performance by
transferring ownership of the object instead of copying it. This is a zero-copy operation and is faster than copying the
object similar to passing by reference in other programming
languages.

Read more:

- [Channel Messaging API](https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API)
- [Transferable Objects](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Transferable_objects)

### What is `X-Forwarded-Proto`?

I was developing a WordPress setup which required using a `nginx-proxy` which is a reverse proxy along with
`acme-companion` to automate SSL certificates generation but I kept getting a redirect loop.

The issue was that the WordPress site was behind a reverse proxy and the WordPress site was not aware of the http
protocol being used. That's why although the side was behind https, the WordPress site was thinking it was http and
tried to redirect again to https.

That's where `X-Forwarded-Proto` comes in. It's a header that is added by the reverse proxy to tell the application
behind it what protocol was used to access the site. So in the WordPress site, I added the following code to the
`wp-config.php` file:

```php
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
    $_SERVER['HTTPS'] = 'on';
}
```

This code checks if the `X-Forwarded-Proto` header is set and if it's `https`, then it sets the `HTTPS` server variable
to `on` which tells WordPress that the site is accessed using https. This fixed the redirect loop issue.

Read more:

- [`X-Forwarded-Proto` by MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Proto)
- [`X-Forwarded-Proto` by http.dev](https://http.dev/x-forwarded-proto)

### Public-key Cryptography

Public-key cryptography is a method of encrypting and decrypting data using two keys: a public key and a private key.

The public key is used to encrypt the data and the private key is used to decrypt it. The public key can be shared with
anyone, while the private key must be kept secret. This allows for secure communication between two parties without the
need to share a secret key.

Public-key cryptography is used in many applications, including:

- SSL/TLS for secure web communication
- SSH for secure remote access
- End-to-end encryption in messaging apps
- Digital signatures for verifying the authenticity of messages

Famous algorithms:

- RSA: Rivest-Shamir-Adleman, widely used for secure data transmission
- Diffie-Hellman: Used for secure key exchange
- EdDSA: Elliptic Curve Digital Signature Algorithm, used for digital signatures

Read more:

- [Elliptic Curve Cryptography Overview](https://www.youtube.com/watch?v=dCvB-mhkT0w)
- [Elliptic Curve Back Door - Computerphile](https://www.youtube.com/watch?v=nybVFJVXbww)
