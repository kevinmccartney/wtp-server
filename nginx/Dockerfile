FROM nginx:latest

RUN echo "daemon off;" >> /etc/nginx/nginx.conf
RUN rm /etc/nginx/conf.d/default.conf
COPY wtp_server.conf /etc/nginx/conf.d/
