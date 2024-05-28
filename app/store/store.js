// store/store.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createUserSlice } from './userSlice';
import { createPostSlice } from './postSlice';
import { createNotificationsSlice } from './notificationsSlice';
import { createStripeSlice } from './stripeSlice';

export const useStore = create(
    persist(
        (...a) => ({
            ...createUserSlice(...a),
            ...createPostSlice(...a),
            ...createNotificationsSlice(...a),
            ...createStripeSlice(...a),
        }),
        {
            name: 'app-storage', // unique name for the storage
            storage: createJSONStorage(() => localStorage), // use local storage
        }
    )
);

export default useStore;



