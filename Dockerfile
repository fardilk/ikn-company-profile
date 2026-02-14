# Multi-stage build untuk React app dengan Nginx

# Stage 1: Build React app
FROM node:18-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files saja dulu
COPY package.json pnpm-lock.yaml ./

# Install dependencies dengan clean install
RUN pnpm install --frozen-lockfile --strict-peer-dependencies=false

# Copy source code (excluding node_modules)
COPY . .

# Build aplikasi
RUN pnpm run build

# Stage 2: Serve dengan Nginx
FROM nginx:alpine

# Copy Nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built files dari builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/health || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
