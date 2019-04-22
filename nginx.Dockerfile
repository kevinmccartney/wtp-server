FROM node:8.16.0 AS builder

WORKDIR /client

COPY ./src/client/*.json ./

RUN npm install

COPY ./src/client ./

RUN npm run build

FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder ./client/dist/project /usr/share/nginx/html/

COPY ./api.nginx.conf /etc/nginx/conf.d/
COPY ./client.nginx.conf /etc/nginx/conf.d/