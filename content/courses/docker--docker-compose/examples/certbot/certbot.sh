docker run -it --rm -p "5002:5002" -v "./logs:/var/log/letsencrypt/" certbot/certbot certonly --standalone \
--server https://host.docker.internal:14000/dir \
-d host.docker.internal \
--preferred-challenges http-01 \
--http-01-port 5002 \
--non-interactive --agree-tos --register-unsafely-without-email --no-verify-ssl