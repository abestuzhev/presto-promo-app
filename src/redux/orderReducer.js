const SET_ORGANIZATION_ID = "SET_ORGANIZATION_ID";
const SET_TERMINALGROUPE_ID = "SET_TERMINALGROUPE_ID";
const SET_ITEM = "SET_ITEM";

const initialState = {
    itemOrder: {
        organizationId: "7bc05553-4b68-44e8-b7bc-37be63c6d9e9",
        terminalGroupId: "4fab19a5-203c-4bf5-94eb-f572aa8b117b",
        
        order: {
            phone: "+79000000000",
            comment: "ID заказа: Спросите у гостя номер заказа.",
            customer: {
                name: "Промосайт Престо"
            },
            items: [
                {
                    id: "",
                    name: "",
                    amount: null,
                    sum: null,
                    modifiers: []
                },
            ],  
            payments: [
                {
                    paymentTypeKind: "Cash",
                    sum: 0,
                    paymentTypeId: "09322f46-578a-d210-add7-eec222a08871",
                    isProcessedExternally: true,
                }
            ],
            orderServiceType: "DeliveryByClient"
        }
    },
    payOrder: {
        status: false,
        sum : 0
    }    
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_ORGANIZATION_ID: {

        }

        case SET_TERMINALGROUPE_ID: {

        }

        case SET_ITEM: {

        }

        default:
            return state;
    }
}

const setOrganizationId = (id) =>  ({type: SET_ORGANIZATION_ID, id});
const setTerminalId = (id) =>  ({type: SET_TERMINALGROUPE_ID, id});
const setItem = (item) =>  ({type: SET_ITEM, item});