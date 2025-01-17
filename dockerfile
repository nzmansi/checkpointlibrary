FROM node:18

WORKDIR /usr/src/app

COPY CheckPointLibrary/package*.json ./

RUN npm install

COPY CheckPointLibrary/app .

EXPOSE 3000

CMD ["node", "app.js"]