import { DECREMENT, INCREMENT } from "./types"

const initialState = {
	likes: 0
}

export const likesReducer = (state, action) => {
	console.log('likes')
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				likes: state.likes + 1

			}
		case DECREMENT:
			return {
				...state,
				likes: state.likes - 1

			}
		default:
			return state
	}
}