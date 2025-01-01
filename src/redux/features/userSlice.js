import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const userSlice = createSlice({
  name: "products",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// Async thunk for posting product data
export const register = createAsyncThunk("user/create", async (user) => {
  try {
    const response = await fetch("http://localhost:5000/api/v1/user/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
});


export default userSlice.reducer;
