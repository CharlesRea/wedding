package net.charlesrea.wedding

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
class WeddingApplication

fun main(args: Array<String>) {
    SpringApplication.run(WeddingApplication::class.java, *args)
}
