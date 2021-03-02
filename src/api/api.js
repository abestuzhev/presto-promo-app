import axios from "axios";


const iikoTransport = axios.create({
    baseURL: 'https://api-ru.iiko.services/',
    timeout: 1000,
    withCredentials: true,
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

    getToken: () => {
        iikoTransport.post("api/1/access_token", {"apiLogin": "1a8a7f96"})
            .then(res => {
                debugger
                // iikoTransport.defaults.headers.common['Authorization'] = 'Bearer ' + tokenKey + '';
            });
    },

    getOrganizations: () => {

    },

    getTerminal: () => {

    }


}

export const deliveryAPI = {

    createPay: () => {

    },

    createOrder: () => {

    }
}