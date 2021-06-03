# stage development environment
FROM node:lts-buster-slim as build_dev

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm ci

COPY . /usr/src/app

EXPOSE 3000

CMD ["npm", "run", "start"]

# stage production environment
FROM node:lts-buster-slim as build_prod

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm ci

COPY . /usr/src/app

RUN npm run build

# nginx for production environment
FROM nginx:stable as build
COPY --from=build_prod /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]