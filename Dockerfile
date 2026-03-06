FROM node:20-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --production=false
COPY . .
# Ensure public exists even if empty
RUN mkdir -p public
RUN npm run build

FROM gcr.io/distroless/nodejs20-debian12
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080
# Copy the standalone server build
COPY --from=builder /app/.next/standalone ./
# Static assets
COPY --from=builder /app/.next/static ./.next/static
# Public assets (may be empty)
COPY --from=builder /app/public ./public
EXPOSE 8080
CMD ["server.js"]
