import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    token: string | null;
}

const initialState: AuthState = { token: null}

const authSlice = createSlice({
    name: 'auth',
    initialState, // initialState là giá trị ban đầu của state
    reducers: { // reducers là nơi chúng ta định nghĩa các hàm reducers (các hàm reducers này sẽ được redux tự động tạo ra action)
        //state là state hiện tại của slice, trong trường hợp này là token 
        // action là một object chứa thông tin về action mà chúng ta đã gửi đi
        // PayloadAction là một kiểu dữ liệu mà redux toolkit cung cấp đảm bảo rằng payload sẽ được kiểm tra kiểu dữ liệu (string)
        // action.payload sẽ chứa giá trị mà chúng ta gửi đi khi dispatch action
        loginSuccess: (state, action: PayloadAction<string>) =>{ 
            state.token = action.payload;
        },
        logout: (state) => {
            state.token = null;
        },
        registerSuccess: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        }
    }
})

export const { loginSuccess, logout,registerSuccess } = authSlice.actions; // authSlice.actions là một object chứa tất cả các action mà chúng ta đã định nghĩa trong authSlice (login,logout ...)
export default authSlice.reducer; // authSlice.reducer là một reducer mà chúng ta đã định nghĩa trong authSlice