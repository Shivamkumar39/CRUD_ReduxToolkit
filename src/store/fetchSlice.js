import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


//create data
export const creatUser = createAsyncThunk(
    'CreateUsers',
    async (data, { rejectWithValue }) => {
        try {
            const response = await fetch('https://667ba718bd627f0dcc934fa1.mockapi.io/crudtoolkit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

//read data 
export const readUsers = createAsyncThunk('readusers', async (data, {rejectWithValue}) =>{

    const response = await fetch('https://667ba718bd627f0dcc934fa1.mockapi.io/crudtoolkit', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',   
        },
        body: JSON.stringify(data),

    })
    
    try {
        const result = await response.json();
        return result;
    } catch (error) {
       return rejectWithValue(console.error)
    }

    
})


//delet funtion


export const deleteUsers = createAsyncThunk('deleteUser', async (id, { rejectWithValue }) => {
    try {
        const response = await fetch(`https://667ba718bd627f0dcc934fa1.mockapi.io/crudtoolkit/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error('Failed to delete user');
        }

        return id; // Return ID of deleted user on success
    } catch (error) {
        console.error('Error deleting user:', error);
        return rejectWithValue(error.message || 'Failed to delete user');
    }
});


//edit and update users editUser
export const editUser = createAsyncThunk(
    'editUser',
    async (data, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://667ba718bd627f0dcc934fa1.mockapi.io/crudtoolkit/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);



const fetchSlice = createSlice({
    name: 'Crud_Toolkit',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(creatUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(creatUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(creatUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(readUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(readUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(readUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(deleteUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteUsers.fulfilled, (state, action) => {
                state.loading = false;
                const id = action.payload;
                state.users = state.users.filter((user) => user.id !== id);
            })
            .addCase(deleteUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to delete user';
            })

            
            .addCase(editUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(editUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.map((data)=>{
                    data.id == action.payload.id ? action.payload : data
                })
            })
            .addCase(editUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export default fetchSlice.reducer;
