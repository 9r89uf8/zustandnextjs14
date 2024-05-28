// store/userSlice.js
export const createUserSlice = (set) => ({
    user: null,
    setUser: (user) => set({ user }),
    logout: () => set({ user: null, }),
});
