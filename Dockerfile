# Build stage
FROM node:lts-alpine as builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Run stage
FROM node:lts-alpine as runner
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app/dist /app
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "-p", "3000"]
