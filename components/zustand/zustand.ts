import {create} from 'zustand';

export const useStore = create((set)=>({
    menuOpen:false,
    testing:'false',
    // handleMenuClick:()=>set({menuOpen:(current:boolean)=>!current}),
    handleMenuClick:()=>set((state:any)=>({menuOpen:!state.menuOpen})),
    handleMenuClose:()=>set((state:any)=>({menuOpen:false})),

}))