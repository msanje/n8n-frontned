import { create } from "zustand";

interface UIState {
  sidebarCollapsed: boolean;
  sidebarVisible: boolean;
  triggersOpen: boolean;

  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  setSidebarVisible: (visible: boolean) => void;

  toggleTriggers: () => void;
  setTriggersOpen: (open: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  sidebarCollapsed: false,
  sidebarVisible: true,
  triggersOpen: false,

  toggleSidebar: () =>
    set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
  setSidebarVisible: (visible) => set({ sidebarVisible: visible }),

  toggleTriggers: () => set((state) => ({ triggersOpen: !state.triggersOpen })),
  setTriggersOpen: (open) => set({ triggersOpen: open }),
}));
