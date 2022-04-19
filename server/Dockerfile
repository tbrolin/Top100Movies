FROM node:16
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
COPY graphql.js .
COPY start.js .
RUN yarn
ENTRYPOINT ["yarn", "start"]