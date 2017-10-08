FROM node:alpine

# Copy application files
COPY src /app/src
COPY package.json /app

WORKDIR /app

# Install dependencies
RUN npm install

# Run
ENTRYPOINT [ "npm", "start" ]
