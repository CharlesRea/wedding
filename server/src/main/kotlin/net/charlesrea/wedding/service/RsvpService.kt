package net.charlesrea.wedding.service

import net.charlesrea.wedding.model.Rsvp
import net.charlesrea.wedding.repository.RsvpRepository
import org.springframework.mail.MailSender
import org.springframework.stereotype.Service
import org.springframework.mail.MailException
import org.springframework.mail.SimpleMailMessage

@Service
class RsvpService(val rsvpRepository: RsvpRepository, val mailSender: MailSender) {
    fun createRsvp(rsvp: Rsvp): Rsvp {
        rsvpRepository.save(rsvp)
        sendEmail(rsvp);
        return rsvp;
    }

    private fun sendEmail(rsvp: Rsvp) {
        val message = SimpleMailMessage()
        message.to = arrayOf("wedding@harrietandcharles.com")
        message.from = "wedding@harrietandcharles.com"
        message.subject = "RSVP received from ${rsvp.name}"
        message.text = rsvp.toString()
        try {
            mailSender.send(message)
        } catch (ex: MailException) {
            // simply log it and go on...
            System.err.println(ex.message);
        }
    }
}