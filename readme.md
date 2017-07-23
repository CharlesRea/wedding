# Wedding website

A website for our wedding, written with a Spring Boot server in Kotlin, and a React frontend in Typescript.

### Development
Requires Node v6+, Yarn.

To run the server, run
```
./gradlew server:bootRun
```
To run the front end dev server, in /client run
```
yarn start
```

### Deployment
To build an executable JAR file running the server with bundled javascript code, run
```
./gradlew bootJar
```