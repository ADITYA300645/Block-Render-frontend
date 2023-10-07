const { createSlice } = require("@reduxjs/toolkit");

export const authBannerSlice = createSlice({
    name: "authBanner",
    initialState: { isVisible: false },
    reducers: {
        showBanner: (state) => {state.isVisible = true},
        hideBanner: (state) => {state.isVisible = false},
    },
});

export const {showBanner,hideBanner} = authBannerSlice.actions;
export default authBannerSlice.reducer;
