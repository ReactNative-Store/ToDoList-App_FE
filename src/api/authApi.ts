import rootApi from "./rootApi";


export const loginApi = (username: string, password: string) => {
    return rootApi.post('/users/login', { username, password });
}

export const registerApi = (
    username: string,
    password: string,
    name: string,
    email: string,
    image: string
) => {
    return rootApi.post('/users/register', { username, password, name, email, image });
}

