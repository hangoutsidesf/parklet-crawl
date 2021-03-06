FROM node:9

# Create crawler directory
WORKDIR /usr/src/crawler

# Get crawler dependencies
COPY package*.json ./

RUN npm install

# Bundle all source files
COPY . .

# expose container port to localhost
EXPOSE 3000

RUN npm run build
# start script
CMD ["npm", "start"]