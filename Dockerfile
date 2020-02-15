# Base image
FROM node:12.2.0-alpine

# Set working directory
RUN mkdir -p /usr/src/e-commerce-demo
WORKDIR /usr/src/e-commerce-demo

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/freezed-frontend/node_modules/.bin:$PATH

# Remove node_modules & package-lock.json on a new build
RUN rm -rf node_modules && rm -rf package-lock.json

# Install and cache app dependencies
COPY ./package.json /usr/src/e-commerce-demo/
RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent

# Start app
CMD [ "npm", "run", "start"]
