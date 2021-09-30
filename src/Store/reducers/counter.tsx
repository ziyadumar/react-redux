import { Actions } from "../actions";

const counter = (state: number = 0, action: Action) => {
    switch (action.type) {
        case Actions.INCREMENT:
            return state + action.payload;
        case Actions.DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

export default counter;

export interface Action {
    type: string;
    payload?: any;
}