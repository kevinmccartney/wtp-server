FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY wtp_server.conf /etc/nginx/conf.d/

CMD nginx -g 'daemon off;'
