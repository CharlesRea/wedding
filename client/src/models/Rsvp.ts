export type CreateRsvp = {
  name: string,
  canAttend: boolean,
  email: string | null,
  dietaryRequirements: string | null,
  comments: string | null,
}