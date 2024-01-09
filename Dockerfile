# Stage 1: Build Angular app
FROM node:21.5.0-alpine as build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# Stage 2: Use Nginx to serve the built Angular app
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]