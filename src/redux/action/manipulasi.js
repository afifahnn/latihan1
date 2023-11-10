import { createSlice } from '@reduxjs/toolkit'

export const manipulasi = createSlice({
  name: 'makeup',
  initialState: {
    jumlahMakeup: 10,
    namaBrand: "lato-lato",
    penerbit: "sari roti", 
    listBedak: ["bedak tabur", "foundation", "bedak halus"]
  },
  reducers: {
    kurangMakeup : (state) => {state.jumlahMakeup = state.jumlahMakeup - 1},
    tambahMakeup : (state) => {state.jumlahMakeup = state.jumlahMakeup + 1},

    gantiBrand : (state, action) => {
        state.namaBrand = action.payload.namaBrand
        state.penerbit = action.payload.penerbit
    },

    hapusList : (state) => {state.listBedak.pop()},
    tambahList : (state, action) => {
      const addList = action.payload
      state.listBedak.push(addList)
    }
  },
})

export const {kurangMakeup, tambahMakeup, gantiBrand, hapusList, tambahList} = manipulasi.actions

export default manipulasi.reducer