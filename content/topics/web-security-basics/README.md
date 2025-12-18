---
title: Web Security Basics
---

# Web Security Basics

## CSRF (Cross-Site Request Forgery)

This is when a user is logged into website.com using cookies and then visit evil.com. Then evil.com sends a request to website.com from the browser which then send those cookies and then execute a code as if it was the user with their consent.

### Nonces 

These are used to protect against CSRF. The idea that for each form, the website.com will generatea random used code and send it to the user to use it when submitting or sending a request. When the nonce is generated, it is saved on the server cache for a certain time and is bound to a certain user and a certain action to limit the attack surface.

This can be protected against using Nonces, or setting a `SameSite` policy for the cookie or by using JWT tokens with `Authorization` header.

### Secure cookies

```
Set-Cookie: sessionid=abc123; Secure; HttpOnly; SameSite=Lax
```

## CORS (Cross-Origin Resource Sharing)

A mechanism that allows restricted resources (e.g., fonts, APIs) on a web page to be requested from another domain outside the current origin.

```
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Origin: *

Access-Control-Allow-Credentials: true

Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS
Access-Control-Allow-Methods: *

Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With
Access-Control-Allow-Headers: *

Access-Control-Expose-Headers: X-Custom-Header, Retry-After
Access-Control-Expose-Headers: *

Access-Control-Max-Age: 86400
```

Overly permissive CORS (e.g., Allow-Origin: * with credentials) can expose user data.

## Content Security Policy (CSP)

Mitigates XSS by specifying allowed sources for scripts, styles, images, etc. This can be very granular.

```
Content-Security-Policy: default-src 'self'; script-src 'unsafe-inline' https://cdn.example.com
```

- `default-src`: Fallback for other fetch directives if not specified
- `script-src`: Controls allowed JavaScript sources
- `style-src`: Controls allowed stylesheets
- `img-src`: Controls image sources
- `font-src`: Controls font sources
- `connect-src`: Limits URLs for scripts (e.g., fetch, XMLHttpRequest)
- `frame-src`: Controls allowed embedded frames/iframes
- `object-src`: Controls plugins like <object>, <embed>
- `base-uri`: Restricts values for <base> tag
- `form-action`: Restricts where forms can submit
- `frame-ancestors`: Replaces X-Frame-Options; prevents clickjacking

Values can be:

- `self`: Same origin (protocol, host, port).
- `none`: Blocks everything.
- `unsafe-inline`: Allows inline scripts/styles (⚠️ weakens security).
- `unsafe-eval`: Allows eval() and similar (⚠️ dangerous).
- `strict-dynamic`: Trusts scripts that are already allowed (used with nonces/hashes in modern - CSP).
- `nonce-<base64>`: Allows specific inline scripts with a matching random token.
- `sha256-<hash>`: Allows inline script/style matching a known hash.

Example:

```
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' 'nonce-r4nd0m123!' https://cdn.jsdelivr.net;
  style-src 'self' 'nonce-r4nd0m123!';
  img-src 'self' data: https://images.example.com;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://api.yourservice.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
```

## Mime sniffing

Browser behavior where it tries to guess the correct MIME type of a resource (e.g., a script or image) based on its content, rather than trusting the server’s declared Content-Type header. It can lead to security issues like XSS if a malicious file (e.g., a .txt file containing JavaScript) is interpreted as executable code.

```
X-Content-Type-Options: nosniff
```

## HSTS (HTTP Strict Transport Security)

This will force using https instead of insecure http

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## Referrer Policy

Controls how much referrer information (URL of the previous page) is included in requests to other sites.

```
Referrer-Policy: no-referrer
```

Values:

- `no-referrer`: Sends no referrer.
- `same-origin`: Sends referrer only for same-origin requests.
- `strict-origin-when-cross-origin` (recommended default).

## Permissions Policy

Allows developers to control which browser features (e.g., camera, geolocation, autoplay) a page or iframe or external scripts can use.

```
Permissions-Policy: camera=(), geolocation=(self), autoplay=(self "https://trusted.com")
```

## Clickjacking Protection

This is to prevent attakers from loading the website as an iframe and then overlaying a div that covers important buttons like "Transfer X money" for example. This includes CSS trickery and issues with sending cookies along the request. To solve this, we can restrict iframing the website by other websites, or limiting it to certain links.

```
X-Frame-Options: DENY
Content-Security-Policy: frame-ancestors 'none'
```

## Subresource Integrity (SRI)

This is to ensure that 3rd party libraries loaded especially from CDNs hasn't been tampered. It's an integrity has in the script tag.

```
<script src="https://cdn.example.com/v1.2.3/jquery.js" integrity="sha384-..."></script>
```

Avoid using `latest` libraries.

## resources

- [OWASP Top 10 Web Application Security Risks](https://www.youtube.com/watch?v=wUaeKEl1RCw)