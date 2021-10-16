export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE"
});

export const Logout = () => ({
    type: "LOGOUT",
});

export const UpdateStart = (userCredentials) => ({
    type: "UРDATE_START",
});

export const UpdateSuccess = (user) => ({
    type: "UРDATE_SUCCESS",
    payload: user,
});

export const UpdateFailure = () => ({
    type: "UРDATE_FAILURE"
});