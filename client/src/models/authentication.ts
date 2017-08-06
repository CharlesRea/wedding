import { includes } from 'lodash';

export type AuthenticationResponse = {
  access_token: string,
  expires_in: number,
}

export type AccessTokenPayload = {
  exp: number,
  user_name: string,
  authorities: Array<string>,
}

export type Role = 'DAY' | 'EVENING';
export const rolesByApiRoleCode: { [key: string]: Role } = {
  'ROLE_DAY': 'DAY',
};

export type UserDetails = {
  accessToken: string,
  expiryTime: number,
  role: Role,
}

export const getRole = (payload: AccessTokenPayload): Role => {
  if (includes(payload.authorities, 'ROLE_DAY')) {
    return 'DAY';
  }
  if (includes(payload.authorities, 'ROLE_EVENING')) {
    return 'EVENING';
  }
  throw new Error('Unrecognised role');
};
