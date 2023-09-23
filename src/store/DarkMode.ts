import { create } from "zustand";

export interface DarkModeType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useDarkModeStore = create<DarkModeType>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
