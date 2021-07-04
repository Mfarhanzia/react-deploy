FROM node:16 as builder

WORKDIR /app

COPY . .

RUN npm run build

# EXPOSE 3000

# CMD ["yarn", "start"]

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .

CMD ["nginx", "-g", "daemon off;"]