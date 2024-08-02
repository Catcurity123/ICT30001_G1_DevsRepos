FROM node:20-alpine3.19

RUN mkdir -p /home/app

COPY . /home/app

WORKDIR /home/app

RUN npm install

RUN npm run build

EXPOSE 80

CMD ["npm", "run", "start"]