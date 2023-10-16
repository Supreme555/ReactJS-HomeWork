import { createSlice } from '@reduxjs/toolkit'
import { cars as carsData } from '../../../public/cars.data'
import { useState } from 'react'

const initialState = {
    car: carsData,
    value: 0,
}

export const additemsSlice = createSlice({
    name: 'carItem',
    initialState,
    reducers: {
        addCar: (state, action) => {
            let data = action.payload
            let l = state.car.length
            const setState = state.car
            setState(prev => [
                { id: prev.length + 1, ...data }, ...prev])
        },
    },
})

// Action creators are generated for each case reducer function
export const { addCar } = additemsSlice.actions

export default additemsSlice.reducer