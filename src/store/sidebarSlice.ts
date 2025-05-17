import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface SidebarState {
  isOpen: boolean;
}

const initialState: SidebarState = {
  isOpen: true,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

export const selectSidebarIsOpen = (state: RootState) => state.sidebar.isOpen;

export default sidebarSlice.reducer; 