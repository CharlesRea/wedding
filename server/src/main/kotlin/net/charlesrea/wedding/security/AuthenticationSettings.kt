package net.charlesrea.wedding.security

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.stereotype.Component


@Component
@ConfigurationProperties(prefix = "authentication")
@EnableConfigurationProperties
class AuthenticationSettings {
    lateinit var key: String
    var password: Password = Password()
}

class Password {
    lateinit var day: String
    lateinit var evening: String
}