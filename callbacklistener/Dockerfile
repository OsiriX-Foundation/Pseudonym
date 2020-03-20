FROM node:7.7.2-alpine
WORKDIR /usr/app
COPY . .
RUN npm install express
EXPOSE 8887
CMD ["node", "listen_callback.js" ] 
