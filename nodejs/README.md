# Node JS

Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging.

## Agenda

- Config Webpack
- Import/Export 
- Webpack dev server 

## Install dependencies

```bash
npm init -y
```

```bash
npm install express
```

```bash
npm install --save -D nodemon
```

## Start

```bash
node server.js 
```

```bash
npm run dev 
```

## Docker
- clone mongo machine
```bash
docker pull mongo
```
- create mongo image and redirect to port 27017
```bash
docker run --name mongodb -p 27017:27017 -d mongo
```

- all images
```bash
docker ps 
```
- start server
```bash
docker start mongo
```

## Links
- https://docs.docker.com/docker-for-mac/install/
- https://robomongo.org/download