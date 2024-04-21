# 기본 이미지로 Node.js 사용
FROM node:14-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest as production-stage

COPY nginx.conf /etc/nginx/conf.d/default.conf

# 빌드된 앱을 Nginx에 복사
COPY --from=build-stage /app/build /usr/share/nginx/html

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]