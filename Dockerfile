FROM node:22-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Ensure we have the right permissions
RUN chmod -R 755 /app
RUN npm run build

FROM nginx:stable-alpine as production-stage
# Copy the entire dist directory structure
COPY --from=build-stage /app/dist/ /usr/share/nginx/html/
# Ensure nginx can read the files
RUN chmod -R 755 /usr/share/nginx/html
# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]