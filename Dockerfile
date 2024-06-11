# Use the official Node.js image from the Docker Hub
FROM node:18

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm ci --only=production

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 5000
EXPOSE 5000

# Command to run the Node.js application
CMD ["npm", "start"]
