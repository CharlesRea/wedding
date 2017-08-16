import * as request from 'superagent';
import {SuperAgentRequest, Request, Response} from "superagent";
import {AuthenticationResponse, UserDetails} from "./models/authentication";
import {CreateRsvp} from "./models/Rsvp";

export type HttpMethod = 'delete' | 'get' | 'post' | 'put';
export type ApiResponse<T> = request.Response & { body: T};
export type ApiRequest<T> = SuperAgentRequest & Promise<ApiResponse<T>>;

const defaultTimeout = 60000;

export type ApiError = Error & {
  status: number,
  response: request.Response
};

export const isApiError = (error: Error): error is ApiError => (error as ApiError).status != null;

export const from = (url: string, method: HttpMethod): SuperAgentRequest => request[method](`/api/${url}`);

export const fetchJson = <T>(req: SuperAgentRequest): ApiRequest<T> =>
  req
    .set('Accept', 'application/json')
    .set('Cache-Control', 'no-cache')
    .set('Pragma', 'no-cache')
    .timeout(defaultTimeout)
    .withCredentials();

function withAuthHeader(req: request.SuperAgentRequest, user: UserDetails) {
  return req.set('Authorization', `Bearer ${user.accessToken}`);
}

export const fetchSecureJson = <T>(req: SuperAgentRequest, user: UserDetails): ApiRequest<T> =>
  withAuthHeader(fetchJson(req), user);

export const withJsonBody = <T>(body: T) => (req: SuperAgentRequest): ApiRequest<T> =>
  req
    .set('Content-Type', 'application/json')
    .send(body);

export const fetchAccessToken = (password: string): Promise<AuthenticationResponse> =>
  fetchJson(from('oauth/token', 'post'))
    .send('client_id=website')
    .send('grant_type=password')
    .send(`username=${password}`)
    .send(`password=${password}`)
    .then(response => response.body);

export const sendRsvp = (rsvp: CreateRsvp, user: UserDetails): ApiRequest<{}> =>
  withJsonBody(rsvp)(fetchSecureJson(from('rsvp', 'post'), user));