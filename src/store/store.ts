// Reduct Store dùng để lưu trữ toàn bộ state của ứng dụng
// Kết nối các slide lại với nhay để 


import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'

// configureStore là một hàm tạo ra một store redux
// configureStore nhận vào một object có key là reducer
export const store = configureStore({
    reducer: { // reducer là một object chứa các reducer của toàn bộ ứng dụng 
        auth: authSlice, // auth là key, authSlice là reducer
    }
    
    
})


// RootState là kiểu dữ liệu của toàn bộ state trong store
// RootState sẽ được tính toán dựa trên các reducer mà chúng ta truyền vào cho configureStore
// Khi bạn cần biết "dữ liệu trong store hiện tại có kiểu dữ liệu gì" thì bạn sẽ sử dụng RootState
export type RootState = ReturnType<typeof store.getState>

// AppDispatch là kiểu dữ liệu của hàm dispatch trong store
// AppDispatch sẽ được sử dụng khi bạn cần dispatch(gửi) một action (thay đổi state) trong store
export type AppDispatch = typeof store.dispatch