FROM node:8-alpine@sha256:1b1928c9eea9e6cd5ff6155a2adda33a022a08911a1418f5ebe8ff992abd2a69

WORKDIR /usr/src/

COPY ./package-lock.json ./package.json /usr/src/

RUN npm install

RUN apk --no-cache add curl gettext

ENV PATH=$PATH:/usr/src/node_modules/.bin

RUN mkdir /output

WORKDIR /app

CMD ["sh", "bin/execute"]
