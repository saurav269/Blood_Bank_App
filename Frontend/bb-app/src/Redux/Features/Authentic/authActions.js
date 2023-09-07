import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../Services/API";
import { toast } from "react-toastify";

//login function
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });

      if (data.success) {
        localStorage.setItem("token", data.token);
        toast.success(data.message);
        window.location.replace("/");
        return data; // Return the entire response data for success
      } else {
        // Handle the case where the server responds with an error message
        return rejectWithValue(data.message || "Login failed");
      }
    } catch (err) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue("An error occurred during login");
      }
    }
  }
);

//registration function
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      email,
      password,
      role,
      name,
      organisationName,
      hospitalName,
      website,
      address,
      phone,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
        email,
        password,
        role,
        name,
        organisationName,
        hospitalName,
        website,
        address,
        phone,
      })
      if(data.success) {
        alert("register successfully")
        toast.success(data.message)
        window.location.replace("/login")
      };
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//GETTING CURRENT USER
export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async ({rejectWithValue}) => {
    try{
      const res = await API.get('/auth/current-user')
      if(res?.data){
        return res?.data
      }
    }catch(err){
      console.log(err)
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
)
