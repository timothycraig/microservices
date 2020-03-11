# Node 12 LTS image to build client bundle
FROM node:12 as builder

# Source code is in /app
WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy code
COPY . .

# Build client bundle
RUN npm run build

# Serve client bundle with nginx
FROM nginx

# Copy nginx config
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy client bundle from builder container
COPY --from=builder /app/dist /usr/share/nginx/html

# Run nginx on port 80
EXPOSE 80
