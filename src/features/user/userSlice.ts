// src/features/user/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    value: {
        name: string;
        email: string;
        last_login: string;
        id: string;
    } | null;
}
interface Users {
    name: string;
    email: string;
    last_login: string;
    id: string;
}
const initialState: UserState = {
    value: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<Users>) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = null;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
