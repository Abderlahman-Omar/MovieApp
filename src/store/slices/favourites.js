import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
    name: "favourites",
    initialState: { movies: [] },
    reducers: {
        add: (state, action) => {
            state.movies.push(action.payload);
        },
        remove: (state, action) => {
            const index = state.movies.findIndex(
                (movies) => movies.id == action.payload
            );

            state.movies.splice(index, 1);
        },
    },
});
export default favouritesSlice.reducer;
export const { add, remove } = favouritesSlice.actions;
