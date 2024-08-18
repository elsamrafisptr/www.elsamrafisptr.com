import { create } from "zustand";

interface useSidebarStoreProps {
  isOpen: boolean;
  handleShowSidebar: () => void;
}

export const useSidebarStore = create<useSidebarStoreProps>((set) => ({
  isOpen: true,
  handleShowSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));
