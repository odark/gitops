
# syntax=docker/dockerfile:1

FROM node:10

WORKDIR /usr/src/app

COPY . .

RUN npm install && \
    npm install express 
     

EXPOSE 3000

CMD ["node", "web.js"]