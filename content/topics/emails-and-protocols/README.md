---
title: Emails and Protocols
---

# Emails and Protocols

Email technology consists of many interacting protocols and standards that work together to send and receive messages.

Architecture of Email consists of:

- [Mail User Agent (MUA)](https://en.wikipedia.org/wiki/Mail_user_agent): It is a program that allows the user to read
  and send emails. Examples: Thunderbird, Outlook, etc.
- [Mail Submission Agent (MSA)](https://en.wikipedia.org/wiki/Mail_submission_agent): It is a program that allows the
  user to send emails. It is usually part of the MUA.
- [Mail Transfer Agent (MTA)](https://en.wikipedia.org/wiki/Mail_transfer_agent): It is a program that transfers emails
  between servers. Examples: Postfix, Exim, Sendmail, etc. There can be multiple MTAs in the email delivery used to
  relay from one server to another. Like when using Gmail or Sendgrid, they will relay the email to the recipient's MTA.
  Each time a mail is relayed it added a `Received` header to the email
- [Mail Delivery Agent (MDA)](https://en.wikipedia.org/wiki/Mail_delivery_agent): It is a program that delivers emails
  to the user's mailbox. Examples: Dovecot, Courier, etc.

MTAs communicate between each other using port 25 and use the
[Simple Mail Transfer Protocol (SMTP)](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol). Port 25 is used for
sending emails between servers and it's usually blocked by ISPs and cloud providers to prevent spam. You will have to
manually request removing the limit on this port. Most of the time, you will use port 587 for sending emails from your
MUA to the MSA. Meanwhile port 25 is used by the MTA to relay emails to the MDA.

There are few configurations needed when setting up an email server to prevent being marked as spam:

- [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework): Sender Policy Framework. It is a DNS record that
  specifies which servers are allowed to send emails on behalf of your domain. It helps to prevent email spoofing.
- [DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail): DomainKeys Identified Mail. It is a method for
  validating the authenticity of an email message by adding a digital signature to the email header. It helps to prevent
  email spoofing and phishing attacks.
- [DMARC](https://en.wikipedia.org/wiki/DMARC): Domain-based Message Authentication, Reporting & Conformance. It is a
  policy that allows domain owners to specify how email receivers should handle emails that fail SPF or DKIM checks. It
  helps to prevent email spoofing and phishing attacks.

There are two famous protocols used to retrieve emails from the MDA:

- [Post Office Protocol (POP3)](https://en.wikipedia.org/wiki/Post_Office_Protocol): It is a protocol that allows the
  user to retrieve emails from the MDA. It downloads the emails to the user's device and deletes them from the server.
- [Internet Message Access Protocol (IMAP)](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol): It is a
  protocol that allows the user to retrieve emails from the MDA. It keeps the emails on the server and allows the user
  to access them from multiple devices.

File attachments are usually sent using the
[Multipurpose Internet Mail Extensions (MIME)](https://en.wikipedia.org/wiki/MIME) which is just encoding the binary
data into a base64 string and adding it to the email body. The email client will decode the base64 string and display
the attachment. Usually the maximum size of an email is 25MB, and for bigger files they will be uploaded to a cloud
storage and send a link to the file instead.

For testing email servers, you can use one of the following tools to test them:

- [MailHog](https://github.com/mailhog/MailHog): It is a tool that allows you to test email servers by capturing emails
  sent to it and displaying them in a web interface. It is useful for testing email servers during development. Project
  is sadly dead.
- [Mailpit](https://github.com/axllent/mailpit): an alternative for Mailhog.
- [MailCatcher](https://mailcatcher.me/): Similar to MailHog, it captures emails sent to it and displays them in a web
  interface.
- [Mail Tester](https://www.mail-tester.com/): It is a tool that allows you to test your email server configuration and
  deliverability. It checks your email server configuration and provides a score based on various factors like SPF,
  DKIM, DMARC, etc.

For fighting spam, there is DNSBL or DNS Blocklist, which is a list of IP addresses that are known to be malicious. You
can use a tool like [DNSBL Info](https://www.dnsbl.info/) to check if an IP address is on the list.

DNS records that need to be set for emails to be delivered correctly:

- SPF: Sender Policy Framework. It is a DNS record that specifies which servers (IP Addresses) are allowed to send
  emails on behalf of your domain. It helps to prevent email spoofing. It's just a TXT record.
- DKIM: DomainKeys Identified Mail. It uses public/private keys to sign the email and make sure the message is
  authentic. It involves generating a public/private key pair and adding the public key to the DNS record and private
  key to the email server.
- DMARC: Domain-based Message Authentication, Reporting & Conformance. It is a policy that allows domain owners to
  specify how email receivers should handle emails that fail SPF or DKIM checks and how to report them. It helps to
  prevent email spoofing and phishing attacks. It's just a TXT record.

For encryption, SMTP is by default unencrypted but it can use the `STARTTLS` command to upgrade from unsecure to a
secure communication. This is called Opportunistic TLS which is different from Implicit TLS which assumes TLS is already
used from the start.
