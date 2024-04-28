FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
COPY .npmrc ./

RUN npm ci

COPY . .

COPY sqlite.db .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
