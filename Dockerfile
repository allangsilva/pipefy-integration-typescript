FROM node:12.22.1

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

RUN yarn build

CMD node dist/server.js

EXPOSE 3333
