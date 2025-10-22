FROM node:alpine

WORKDIR /app

COPY package*.json /app/

RUN npm i

COPY . /app

EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "start"]