package net.charlesrea.wedding.security

import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.authentication.configurers.GlobalAuthenticationConfigurerAdapter


@Configuration
open class AuthenticationConfig : GlobalAuthenticationConfigurerAdapter() {
    override fun init(auth: AuthenticationManagerBuilder) {
        auth.inMemoryAuthentication()
                    .withUser("day")
                    .password("day")
                    .roles("DAY")
                .and()
                    .withUser("evening")
                    .password("evening")
                    .roles("EVENING")
    }
}