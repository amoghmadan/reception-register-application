FROM node:18-bullseye-slim

LABEL maintainer="Amogh Madan <amoghmadaan@gmail.com>"

WORKDIR /reception-register/

WORKDIR /reception-register/reception_register_webui
COPY ./reception_register_webui/package.json .
RUN npm install --location=project

WORKDIR /reception-register/reception_register_api
COPY ./reception_register_api/package*.json .
RUN npm install --location=project

WORKDIR /reception-register
