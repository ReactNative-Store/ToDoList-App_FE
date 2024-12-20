import { useDispatch } from "react-redux";
import { loginApi, registerApi } from "../../api/authApi";
import { loginSuccess, registerSuccess } from "./authSlice";
import Toast from "react-native-toast-message";
import { toastStyles } from "../../styles/toastStyles";



// userAuth dùng để lấy thông tin về việc đăng nhập, đăng xuất của người dùng
export const useAuth = () => {
    const dispatch = useDispatch(); // dispatch là một hàm giúp chúng ta gửi action đến store

    const login = async (username: string, password: string) => {
        try {
            const response = await loginApi(username, password);
            dispatch(loginSuccess(response.data.token))
            Toast.show({
                ...toastStyles.successToast,
                text2: response.data.message,
            })
            console.log("Login", response);
            
        } catch (error: any) {
            if (error.response && error.response.data) {
                console.log("Login Failed", error.response.data.message);
                Toast.show({
                    ...toastStyles.errorToast,
                    text2: error.response.data.message,
                })
                throw new Error(error.response.data.message);
            } else {
                throw new Error('Login failed');
            }
        }
    }

    const register = async (username: string, password: string, name: string, email: string, image: string) => {
        try {
            const response = await registerApi(username, password, name, email, image);
            dispatch(registerSuccess(response.data.token));
            Toast.show({
                ...toastStyles.successToast,
                text1: "Register Success",
                text2: response.data.message,
            })
            console.log("Register", response);
            
        } catch (error: any) {
            if (error.response && error.response.data) {
                console.log("Register Failed", error.response.data.message);
                Toast.show({
                    ...toastStyles.errorToast,
                    text2: error.response.data.message,
                })
                throw new Error(error.response.data.message);
            } else {
                throw new Error('Register failed');
        }
        
    }
    }



    return { login, register };
};