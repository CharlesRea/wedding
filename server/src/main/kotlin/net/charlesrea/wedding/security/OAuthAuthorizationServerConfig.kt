package net.charlesrea.wedding.security

import org.springframework.context.annotation.Bean
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer
import org.springframework.context.annotation.Configuration
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer


@Configuration
@EnableAuthorizationServer
class OAuthAuthorizationServerConfig(val authenticationManager: AuthenticationManager, val authenticationSettings: AuthenticationSettings) : AuthorizationServerConfigurerAdapter() {

    override fun configure(endpoints: AuthorizationServerEndpointsConfigurer) {
        endpoints
                .authenticationManager(authenticationManager)
                .accessTokenConverter(accessTokenConverter())
    }

    override fun configure(config: AuthorizationServerSecurityConfigurer) {
        config
                .tokenKeyAccess("permitAll()")
                .checkTokenAccess("isAuthenticated()")
                .allowFormAuthenticationForClients()
    }

    override fun configure(clients: ClientDetailsServiceConfigurer) {
        clients
                .inMemory()
                .withClient("website")
                .authorizedGrantTypes("password", "refresh_token")
                .scopes("all")
                .accessTokenValiditySeconds(60 * 60 * 14)
    }

    @Bean
    fun accessTokenConverter(): JwtAccessTokenConverter {
        val converter = JwtAccessTokenConverter()
        converter.setSigningKey(authenticationSettings.key)
        return converter
    }
}

