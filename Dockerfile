# syntax=docker/dockerfile:1.4

FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/ /usr/share/nginx/html
EXPOSE 80