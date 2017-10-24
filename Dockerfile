FROM node:8-slim

RUN yarn global add pm2

WORKDIR /opt/app/

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn run build:prod

CMD ["pm2-docker", "process.yml"]
