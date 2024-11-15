import { create } from "zustand";


interface User {
    id: number
    email: string
    firstName: string
    lastName: string
}

interface UserStore {
    selectedUser: User | null
    setSelectedUser: (user: User) => void
    clearUser: ()=> void
}

export const useStore = create<UserStore>((set) => ({
    selectedUser: null,
    setSelectedUser: (user) => set({ selectedUser: user }),
    clearUser: () => set({ selectedUser: null })
}))