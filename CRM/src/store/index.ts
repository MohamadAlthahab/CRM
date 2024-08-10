import { configureStore } from "@reduxjs/toolkit";
import productSection from "./section/productSection";
export const index = configureStore({
    reducer: {
        products: productSection,   
    },
});

export type AppState = ReturnType<typeof index.getState>

