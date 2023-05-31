FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install -y

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "build/index.js"]
