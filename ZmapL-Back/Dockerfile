FROM node:20.11.1 as zmaplback
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --production --silent 
COPY . .
EXPOSE 3000
RUN chown -R node /usr/app
USER node
CMD ["npm", "start"]
