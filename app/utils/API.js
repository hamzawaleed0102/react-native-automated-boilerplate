const isDevMode = false; // change this to toggle dev/prod domain name

export const DOMAIN = {
  dev: 'https://endpoint.com',
  prod: 'https://endpoint.com',
};

const PATH = {
  dev: '/api/',
  prod: '/api/',
};

export const baseDomain = isDevMode ? DOMAIN.dev : DOMAIN.prod;
export const baseUrl = isDevMode
  ? DOMAIN.dev + PATH.dev
  : DOMAIN.prod + PATH.prod;

const API = {
  getProjecsList: baseUrl + 'Projects/GetProjectsList',
  signup: baseUrl + 'SignUpRequests/SaveSignUpRequest',
  login: baseUrl + 'UserLogin/UserAuthentication',
  forgotPassword: baseUrl + 'User/Forgotpassword',
};

export default API;
