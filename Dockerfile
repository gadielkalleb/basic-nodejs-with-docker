FROM node:14.17.5-alpine
EXPOSE 8080
COPY package.json package-lock.json* ./
WORKDIR /node
RUN mkdir app && chown -R node:node .
USER node
RUN npm i && npm cache clean --force
WORKDIR /node/app
COPY --chown=node:node . .
CMD [ "node", "app.js" ]
