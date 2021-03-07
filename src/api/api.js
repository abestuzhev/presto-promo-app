import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.pizzapresto.ru',
    timeout: 1000,
    headers: {
        'Content-type': 'application/json'
    }
})



//get token alljs


//organization/
//terminal/
//action/
//order/
//auth/


export const generalAPI = {

    testRequest: () => {
        axios.get("https://jsonplaceholder.typicode.com/todos/4").then( res => {
            console.log("testRequest", res.data);
        });
    },

    getСities: () => {
        instance.get("/cities").then(res => {
            console.log("getСities", res.data);
        });
    },

    getOrganizations: () => {
        instance.get("/organizations").then(res => {
            console.log("getOrganizations", res.data);
        });
    },

    getTerminal: () => {

    }
}

export const actionsAPI = {

    getActions: () => {

    },

    createAction: (data) => {
        return instance.post("/action", data);

    },

    updateAction: () => {

    },

    deleteAction: () => {

    },

    activationAction: () => {

    },

    deactivationAction: () => {

    }
}

export const deliveryAPI = {

    createPay: () => {

    },

    createOrder: () => {

    }
}