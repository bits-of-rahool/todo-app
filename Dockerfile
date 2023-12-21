bashCopy code
# Use the official Node.js image as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /

# Copy the application files into the working directory
COPY . /app

# Install the application dependencies
RUN npm install

ENV MONGO_URL "mongodb+srv://rahoolitis:qwertyuiop@cluster0.k8neshh.mongodb.net/todoDB"
# Define the entry point for the container
CMD ["node", "app.js"]