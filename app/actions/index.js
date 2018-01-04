export const USER_LOGIN_ATTEMPT = 'USER_LOGIN_ATTEMPT';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

export function login(userCredentials) {
    if(userCredentials.username === 'testuser' && userCredentials.password === '123') {
        return {
            type: USER_LOGIN_SUCCESS
        }
    } else {
        return {
            type: USER_LOGIN_ERROR
        }
    }
}