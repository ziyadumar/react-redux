
export enum Actions {
    INCREMENT = 'Increment',
    DECREMENT = 'Decrement'
}
export const increment = (payload: number = 1) => {
    return {
        type: Actions.INCREMENT,
        payload
    }
}

export const decrement = () => {
    return {
        type: Actions.DECREMENT
    }
}




