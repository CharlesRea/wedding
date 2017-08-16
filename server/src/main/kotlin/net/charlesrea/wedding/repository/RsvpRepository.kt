package net.charlesrea.wedding.repository

import net.charlesrea.wedding.model.Rsvp
import org.springframework.data.repository.CrudRepository

interface RsvpRepository : CrudRepository<Rsvp, Long>