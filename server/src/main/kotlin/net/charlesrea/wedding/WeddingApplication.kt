package net.charlesrea.wedding

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer

@SpringBootApplication
@EnableResourceServer
class WeddingApplication

fun main(args: Array<String>) {
    SpringApplication.run(WeddingApplication::class.java, *args)
}
