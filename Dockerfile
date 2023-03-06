
# syntax=docker/dockerfile:1

FROM node:10

WORKDIR /usr/src/app

COPY . .

RUN apt-get update && apt-get install -y docker && \
    npm install && \
    npm install express && \
     

EXPOSE 3000

CMD ["node", "web.js"]