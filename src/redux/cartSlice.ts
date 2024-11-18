import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    totalAmount: number;
}

const initialState: CartState = {
    items: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
            state.totalAmount += action.payload.price * action.payload.quantity;
        },
        removeItem(state, action: PayloadAction<number>) {
            const index = state.items.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.totalAmount -= state.items[index].price * state.items[index].quantity;
                state.items.splice(index, 1);
            }
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
