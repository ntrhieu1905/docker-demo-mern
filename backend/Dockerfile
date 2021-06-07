# stage development environment
FROM node:lts-buster-slim as build_dev

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm ci

COPY . /usr/src/app

EXPOSE 8080

CMD ["npm", "run", "start"]

# stage development environment
FROM node:lts-buster-slim as build_prod

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm ci

COPY . /usr/src/app

EXPOSE 6000

CMD ["npm", "run", "build"]