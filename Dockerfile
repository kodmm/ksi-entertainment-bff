# syntax=docker/dockerfile:1

# --- build stage ---
FROM golang:1.27.1-alpine AS build
WORKDIR /src

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -trimpath -o /out/ksi-entertainment-bff .

# --- runtime stage ---
FROM gcr.io/distroless/static-debian12 AS runtime
WORKDIR /app
COPY --from=build /out/ksi-entertainment-bff ./ksi-entertainment-bff

ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["/app/ksi-entertainment-bff"]
