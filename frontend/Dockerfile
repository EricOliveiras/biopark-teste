FROM node:18

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

RUN npm install -y

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
