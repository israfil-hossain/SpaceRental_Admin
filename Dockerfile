FROM node:lts-alpine as base

# Build stage
FROM base as builder
ENV NODE_ENV=production

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Run stage
FROM base as runner
ENV NODE_ENV=production

WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist /app
EXPOSE 3000
CMD ["serve", "-s", "-p", "3000"]
