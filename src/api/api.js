import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.pizzapresto.ru/v1',
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
        // return instance.get("/actions").then(res => {
        //     console.log("getActions", res.data);
        // });
        return instance.get("/actions");
    },

    createAction: (data) => {
        return instance.post("/action", data, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        });
    },

    updateAction: () => {

    },

    deleteAction: (id) => {
        return instance.delete(`/action/${id}`);
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