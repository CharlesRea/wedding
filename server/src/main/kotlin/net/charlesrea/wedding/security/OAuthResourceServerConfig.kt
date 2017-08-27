package net.charlesrea.wedding.security

import org.springframework.context.annotation.Configuration
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer
import org.springframework.security.config.annotation.web.builders.HttpSecurity

@Configuration
@EnableResourceServer
class OAuthResourceServerConfig() : ResourceServerConfigurerAdapter() {
    override fun configure(http: HttpSecurity) {
        http
                .csrf().disable()
                .httpBasic().disable()
                .antMatcher("/api/**")
                    .authorizeRequests()
                    .anyRequest().authenticated()
    }
}