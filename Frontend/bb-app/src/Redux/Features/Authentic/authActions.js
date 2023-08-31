import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../Services/API";
import {toast } from 'react-toastify';



export const userLogin = createAsyncThunk(
    'auth/login',
    async({role, email, password}, {rejectWithValue}) => {
          try{
            const {data} = await API.post('/auth/login', {role, email, password})

            //STORE TOKEN
            if(data.success){
                localStorage.setItem('token', data.token)
                toast.success(data.message)
            }
            return data;
          }catch(err){
            if(err.response && err.response.data.message){
                return rejectWithValue(err.response.data.message)
            }else{
                return rejectWithValue(err.message)
            }
          }
    }
)