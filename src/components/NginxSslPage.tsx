import { Container, Link, TextField, Typography } from '@material-ui/core'
import { useState } from 'react'

const processPortOrPath = (portOrPath: string) => {
  if (/^\d+$/.test(portOrPath)) {
    return `
  location / {
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://localhost:${portOrPath}/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
  }`
  } else {
    return `
  root ${portOrPath}

  location / {
      try_files $uri $uri/ =404
  }`
  }
}

const template = (subdomain: string, portOrPath: string) => {
  return `\
server {
  if ($host = ${subdomain}) {
    return 301 https://$host$request_uri;
  }
  listen 80;
  listen [::]:80;
  server_name ${subdomain};
  return 301 https://$host$request_uri;
}

server {
  ssl_certificate /etc/letsencrypt/live/${subdomain}/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/${subdomain}/privkey.pem;
  listen 443 ssl;
  listen [::]:443 ssl;
  server_name ${subdomain};
${processPortOrPath(portOrPath)}
}
  `
}

const NginxSslPage = () => {
  const [subdomain, setSubdomain] = useState('www.dipsy.me')
  const [portOrPath, setPortOrPath] = useState('3000')
  return (
    <Container style={{ overflowY: 'auto' }}>
      <Typography variant="h3">Nginx subdomain SSL config generation</Typography>
      <Typography>This util is to generate nginx ssl config with enforced HTTPS for a subdomain, and generate cert with certbot let's encrypt</Typography>
      <Typography>Please refer to these articles for details: <Link href='https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx'>Certbot official</Link> / <Link href='https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04'>Digital Ocean</Link></Typography>
      <Typography>First enter the subdomain, then enter port if you want this subdomain to proxy to a localhost server, or an absolute path if it is a static file hosting.</Typography>
      <TextField label="Subdomain" value={subdomain} onChange={({ target }) => setSubdomain(target.value)}/>
      <TextField label="port or path" value={portOrPath} onChange={({ target }) => setPortOrPath(target.value)}/>
      <Typography>Then generate the cert using certbot</Typography>
      <Typography><code>sudo certbot --nginx -d {subdomain}</code></Typography>
      <Typography>Next <code>sudo vi /etc/nginx/conf.d/{subdomain}.conf</code> and copy paste below</Typography>
      <pre>
        <code>
          {template(subdomain, portOrPath)}
        </code>
      </pre>
      <Typography>Finally run <code>sudo systemctl reload nginx</code></Typography>
    </Container>
  )
}

export default NginxSslPage
