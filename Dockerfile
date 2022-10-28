# Stage 1

FROM node:14 as build-step

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install --scripts-prepend-node-path=auto

COPY . /usr/src/app

RUN npm run build-uat --scripts-prepend-node-path=auto

# Stage 2
FROM nginx:1.21.0-alpine

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-step /usr/src/app/dist /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
