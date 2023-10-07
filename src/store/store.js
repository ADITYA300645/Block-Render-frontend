import authBannerSlice from "@/features/authBannerSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: { authBanner: authBannerSlice },
});
