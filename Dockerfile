# 기본 이미지로 Node.js 사용
FROM node:14-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 소스 코드를 컨테이너의 작업 디렉토리로 복사
COPY . .

# 필요한 패키지 설치
RUN npm install

# 애플리케이션 빌드
RUN npm run build

# 3000번 포트 노출 (리액트 개발 서버 기본 포트)
EXPOSE 3000

# 애플리케이션 실행
CMD ["npm", "start"]