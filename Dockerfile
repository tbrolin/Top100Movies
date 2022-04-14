FROM node:16
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY server/graphql.js ./server/
COPY scripts/start-graphql.js ./scripts/
EXPOSE 80
CMD ["node scripts/start-graphql.js"]
