FROM node:21.4.0-alpine
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["sh", "-c", "npm run dev"]



