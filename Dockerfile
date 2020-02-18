# Base image
FROM node:12.2.0-alpine

# Set working directory
RUN mkdir -p /usr/src/e-commerce-demo
WORKDIR /usr/src/e-commerce-demo

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/e-commerce-demo/node_modules/.bin:$PATH

# Install and cache app dependencies
COPY ./package.json /usr/src/e-commerce-demo/
RUN npm install --silent
RUN npm install react-scripts@3.4.0 -g --silent

# Start app
CMD [ "npm", "run", "start"]
