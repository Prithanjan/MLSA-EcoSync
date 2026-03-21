# Stage 1: Build the React frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /app-ui
COPY app/package*.json ./
RUN npm install
COPY app/ ./
RUN npm run build

# Stage 2: Build the Python backend and assemble the monolith
FROM python:3.11-slim
WORKDIR /server

# Install Python dependencies
COPY backend/requirements.txt ./backend/
RUN pip install --no-cache-dir -r backend/requirements.txt

# Copy the backend code
COPY backend/ ./backend/

# Copy the built frontend from Stage 1 into the exact path expected by FastAPI
COPY --from=frontend-builder /app-ui/dist ./app/dist

# Railway provides the PORT environment variable natively
# Run the monolithic backend
WORKDIR /server/backend
CMD ["python", "main.py", "--buildings", "50"]
