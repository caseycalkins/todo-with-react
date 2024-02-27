# Todo with React

Basic todo app with React and styled with Material-UI.

# Docker setup

## Build the image

```bash
docker build -t todo-app .
```

## Run the container

```bash
docker run -p 3000:3000 todo-app
```

## Access the app

Open your browser and go to `http://localhost:3000`

## Stop the container

```bash
docker stop {container_id or name}
```
