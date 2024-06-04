import { Password } from '@mui/icons-material';

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
//import { UserQueries } from '../api/userQueries';
//import * as SecureStore from 'expo-secure-store';
interface UserState {
  user: User | null;
  token: string | null;
  signInStatus: "idle" | "pending" | "succeeded" | "failed";
  signUpStatus: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}
const initialState: UserState = {
  user: null,
  token: null,
  signInStatus: "idle",
  error: null,
  signUpStatus: "idle",
};
interface User {
  id: number;
  userName: string;
  role: Role
}

export enum Role {
  User = 'user',
  PremiumUser = 'premium',
  Admin = 'admin',
}

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = '';
      console.log("test");
      //SecureStore.deleteItemAsync('token')//TODO
    },
  },

  extraReducers: (builder) => {
    //LOGIN
    builder
      .addCase(signin.pending, (state) => {
        state.signInStatus = "pending";;
        state.error = null;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.signInStatus = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.access_token;
        //SecureStore.setItemAsync('token', action.payload.access_token); //TODO:set token
      })
      .addCase(signin.rejected, (state, action) => {
        state.signInStatus = "failed";
        state.error = action.payload as string;
      })

      //SIGNUP
      .addCase(signup.pending, (state) => {
        state.signUpStatus = "pending";
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.signUpStatus = "succeeded";
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(signup.rejected, (state, action) => {
        state.signUpStatus = "failed";
        state.error = action.payload as string;
      });
  },
});
interface Credentials {
  userName: string;
  password: string;
}
export const signin = createAsyncThunk(
  'user/login',
  async (credentials: { userName: string; password: string }, thunkAPI) => {
    try {
      const response = await loginRequest(credentials.userName, credentials.password);
      console.log(response);
      return response;
    } catch (error) {
      //@ts-ignore
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signup = createAsyncThunk(
  'user/signup',
  async (userData: { userName: string; email: string; password: string, licensePlate: string }, thunkAPI) => {
    try {
      const response = signupRequest(userData.userName, userData.email, userData.password, userData.licensePlate)
      console.log("userSlice", response);
      return response;
    } catch (error) {
      //@ts-ignore
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

















async function loginRequest(userName: string, password: string) {
  try {
    const reponse = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName, password }),
    })
    return reponse.json()

  } catch (error) {
    console.log(error);
  }
}
async function signupRequest(userName: string, email: string, password: string, licensePlate: string) {
  try {
    const reponse = await fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName, email, password, licensePlate }),
    })
    return reponse.json()

  } catch (error) {
    console.log(error);
  }
}











export const { setToken, logout } = userSlice.actions
export const selectUser = (state: RootState) => state.user.user;
export const selectToken = (state: RootState) => state.user.token;
export const selectLoading = (state: RootState) => state.user.signInStatus;
export const selectError = (state: RootState) => state.user.error;

export default userSlice.reducer;
