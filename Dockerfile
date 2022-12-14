FROM node:14.20.0

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["npm", "run", "dev"]
