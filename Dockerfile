# Fetching the latest Node.js image on Alpine Linux
FROM node:alpine AS development

# Declaring environment variables
ENV NODE_ENV=development
ENV NODE_OPTIONS=--max-old-space-size=4096

# Setting up the working directory
WORKDIR /react-rubia_website

# Copying package files
COPY package*.json ./

# Installing dependencies
RUN npm install

# Copying project files
COPY . .

# Exposing the new port
EXPOSE 1000

# Starting the application
CMD ["npm", "start"]
