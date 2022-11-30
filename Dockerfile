FROM node:18.12.1-alpine

ARG WORKDIR
ARG REACT_APP_API_URL

ENV LANG=C.UTF-8 \
    TZ=Azia/Tokyo

WORKDIR ${WORKDIR}

COPY . ./

RUN npm install

