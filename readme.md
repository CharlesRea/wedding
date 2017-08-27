# Wedding website

A website for our wedding, written with a Spring Boot API in Kotlin, a React frontend in Typescript, and a PostgreSQL database.

### Development
Requires Node v6+, Yarn, Java 8, Postgres 9.6.

To create the database, make sure the Postgres bin folder is on your path and run:
```
createdb -U postgres wedding
```

To run the server, run through IntelliJ, or run
```
./gradlew server:bootRun
```
To run the front end dev server, in /client run
```
yarn start
```

### Deployment
To build and run an executable JAR file running the server with bundled javascript code, run
```
./gradlew bootJar
java -jar .\server\build\libs\server-0.0.1-SNAPSHOT.jar
```

### Heroku
The application be deployed via Heroku. To set up a Heroku application, install the Heroku CLI and run:
```
heroku create <appname>
heroku buildpacks:set https://github.com/negativetwelve/heroku-buildpack-subdir
heroku addons:create heroku-postgresql
git push heroku master
```