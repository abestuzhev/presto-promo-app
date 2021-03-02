const initialState = {
    location: {
        city: null,
        organizationId: null,
        terminalId: null
    },
    quantity: 0,
    productId: null

}

export const createOrder = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}