# Basic Nodejs Https App With Docker

## This is a basic example of nodejs with docker, using knowledge from the Docker capitain course

to facilitate local development using https let's use this tool [mkcert](https://github.com/FiloSottile/mkcert), just follow the step by step to install and use, it's very easy for me.

after everything is installed, just run this command in the project's root directory:

```bash
$ mkcert -cert-file cert.pem -key-file key.pem localhost 127.0.0.1 ::1
```

now that everything is ready just run the project the way it is, we have some options to run it locally:

**most common way**
```bash
$ node app.js
```
**running with docker**
```bash
$ docker build . -t test-docker-nodejs

$ docker run -p 8080:8080 -d test-docker-nodejs  
```
**running with docker-compose**
```bash
$ docker-compose up
```
