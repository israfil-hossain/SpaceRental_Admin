FROM node:lts-alpine as base

# Build stage
FROM base as builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Run stage
FROM base as runner
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist /app
EXPOSE 3000
CMD ["serve", "-s", "-p", "3000"]
