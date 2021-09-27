export const increment = (payload: number) => {
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



export enum Actions {
    INCREMENT = 'Increment',
    DECREMENT = 'Decrement'
}

