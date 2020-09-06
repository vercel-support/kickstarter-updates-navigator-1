FROM node:11-alpine as base

WORKDIR /node/app

RUN npm install -g @vue/cli

COPY package.json /node/app/package.json
COPY package-lock.json /node/app/package-lock.json

COPY ./babel.config.js /node/app/babel.config.js
COPY ./tsconfig.json /node/app/tsconfig.json

COPY ./public /node/app/public
COPY ./src /node/app/src

RUN npm install

# Builder... might be useful later
FROM base as builder
RUN cd /node/app && NODE_ENV=production npm run build -- --mode production

# Dev
FROM base as dev
EXPOSE 8080
CMD ["npm", "run", "serve"]
