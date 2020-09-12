FROM node:11-alpine as base

WORKDIR /node/app

RUN npm i -g vercel
RUN npm install -g @vue/cli

COPY package.json /node/app/package.json
COPY package-lock.json /node/app/package-lock.json

COPY ./babel.config.js /node/app/babel.config.js
COPY ./tsconfig.json /node/app/tsconfig.json

COPY ./public /node/app/public
COPY ./src /node/app/src

RUN npm install

# Dev
FROM base as dev
EXPOSE 8080
CMD ["npm", "run", "serve"]
