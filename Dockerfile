FROM node:alpine3.11

# set working directory
WORKDIR /app

# in case you want to get in the container using bash for debugging
# uncomment the following line, and rebuid the image to install bash
# RUN apk update && apk add bash

# install client dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

RUN npm install react-scripts@latest

ENV PATH /app/node_modules/.bin:$PATH

# add code
COPY . ./

# client runs on port 3000
EXPOSE 3000

# start client app
CMD ["npm", "start"]