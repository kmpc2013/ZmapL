FROM node:20.11.1 as angular
WORKDIR /app
COPY package.json .
RUN npm install --silent
COPY . .
RUN npm run build --prod

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular /app/dist/zmap-l-front/browser /usr/share/nginx/html 
COPY others/certs/ /etc/nginx/ssl
COPY others/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80