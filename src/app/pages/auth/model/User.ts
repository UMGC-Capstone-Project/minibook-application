export interface User {
    userId: number;
    displayName: string;
    email: string;
    firstname: string;
    lastname: string;
    avatar: string;
}


export interface UserLoginRequest {
    email: string;
    password: string;
}

export interface UserLoginResponse {
    token: string;
}