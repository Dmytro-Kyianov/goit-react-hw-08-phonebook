import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (regData, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', regData);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (logData, thunkAPI) => {
  try {
    const res = await axios.post('/users/login', logData);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth;
  if (!token) return thunkAPI.rejectWithValue('Valid token does not exist');
  try {
    setAuthHeader(token);
    const res = await axios.get('/users/current');
    return res.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});