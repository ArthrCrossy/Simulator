export interface CreateUserPayload {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface CreateUserResponse {
    message: string;
    user?: {
        id: number;
        name: string;
        email: string;
        created_at: string;
        updated_at: string;
    };
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginResponse {
    message: string;
    token?: string;
    user?: {
        id: number;
        name: string;
        email: string;
    };
}

export async function createUser(
    payload: CreateUserPayload
): Promise<CreateUserResponse> {
    const response = await fetch("http://localhost:3333/user/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Erro ao criar conta.");
    }

    return data;
}

export async function loginUser(
    payload: LoginPayload
): Promise<LoginResponse> {
    const response = await fetch("http://localhost:3333/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Erro ao fazer login.");
    }

    return data;
}