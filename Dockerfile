FROM node:21-alpine3.18

# COPY package.json /app/

# WORKDIR /app

# COPY src /app/

# WORKDIR /app

# RUN npm install

# CMD ["node", "server.js"]

WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
