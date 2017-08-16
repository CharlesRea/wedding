package net.charlesrea.wedding.service

import net.charlesrea.wedding.model.Rsvp
import net.charlesrea.wedding.repository.RsvpRepository
import org.springframework.stereotype.Service

@Service
class RsvpService(val rsvpRepository: RsvpRepository) {
    fun createRsvp(rsvp: Rsvp) = rsvpRepository.save(rsvp)
}