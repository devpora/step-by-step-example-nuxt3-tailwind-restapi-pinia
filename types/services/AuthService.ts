export interface LoginResponse {
    access_token: string;
    token_type: string;
    expires_at: string;
    userData: {
        id: number;
        email: string;
    };
}

export interface RegisterResponse {
    access_token: string;
    token_type: string;
    expires_at: string;
    userData: {
        id: number;
        email: string;
        name: string;
    };
}
export interface LogoutResponse {
    message: string;
}