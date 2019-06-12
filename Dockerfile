FROM node:10.15.3

# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY src ./src
EXPOSE 8080
CMD [ "npm", "start" ]