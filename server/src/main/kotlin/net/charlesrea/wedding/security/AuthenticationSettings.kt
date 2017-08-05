package net.charlesrea.wedding.security

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.stereotype.Component


@Component
@ConfigurationProperties(prefix = "authentication")
class AuthenticationSettings {
    lateinit var key: String
}