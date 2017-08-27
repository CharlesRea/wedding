export type CreateRsvp = {
  name: string,
  canAttend: boolean,
  email: string | null,
  dietaryRequirements: string | null,
  hasGuest: boolean | null,
  guestName: string | null,
  guestDietaryRequirements: string | null,
  comments: string | null,
}