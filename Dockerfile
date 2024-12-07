FROM node:16.20

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 8082
EXPOSE 8083

CMD ["npm", "start"]
