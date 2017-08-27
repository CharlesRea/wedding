package net.charlesrea.wedding.controller

import net.charlesrea.wedding.model.Rsvp
import net.charlesrea.wedding.service.RsvpService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class RsvpController(val rsvpService: RsvpService) {

    @PostMapping("/rsvp")
    fun createRsvp(@RequestBody rsvp: Rsvp) = rsvpService.createRsvp(rsvp)
}