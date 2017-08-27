package net.charlesrea.wedding.security

import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.authentication.configurers.GlobalAuthenticationConfigurerAdapter


@Configuration
open class AuthenticationConfig(val authenticationSettings: AuthenticationSettings) : GlobalAuthenticationConfigurerAdapter() {
    override fun init(auth: AuthenticationManagerBuilder) {
        auth.inMemoryAuthentication()
                    .withUser(authenticationSettings.password.day.substring(0, 3))
                    .password(authenticationSettings.password.day)
                    .roles("DAY")
                .and()
                    .withUser(authenticationSettings.password.evening.substring(0, 3))
                    .password(authenticationSettings.password.evening)
                    .roles("EVENING")
    }
}