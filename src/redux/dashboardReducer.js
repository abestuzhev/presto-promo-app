const SET_ACTIONS = "SET_ACTIONS";
const CHANGE_STATUS = "CHANGE_STATUS";
const ACTIONS_SUCCESS = "ACTIONS_SUCCESS";
const DELETE_ACTION = "DELETE_ACTION";

const initialState = {

    actions: null
    // actions: [
    //     {
    //         id: 646541,
    //         img: null,
    //         title: "Пицца «Чоризо» 28 см за 250₽",
    //         composition: "Колбаски Чоризо, томатный соус, сыр Моцарелла, орегано",
    //         productId: null,
    //         newPrice: 250,
    //         oldPrice: 410,
    //         status: true,
    //         organizations: [
    //             {
    //                 id: "17aa8a63-fe59-470f-bf78-d633c454f329",
    //                 terminalId: "000",
    //                 Fullname: "Кафе на Дзержинского 7",
    //                 name: "Дзержинского 7"
    //             },
    //             {
    //                 id: "dfae61dd-1666-4068-b3fb-3cc65be4e0fd",
    //                 terminalId: "000",
    //                 Fullname: "ТРЦ Макси, пр. Ленинградский, 38",
    //                 name: "Макси"
    //             }],
    //         city: {
    //             name: "Архангельск",
    //             url: "arkhangelsk"
    //         }
    //     },
    //     {
    //         id: 562434,
    //         img: null,
    //         title: "Пицца «Пепперони» 28 см за 199₽",
    //         composition: "Колбаски Пепперони, томатный соус, сыр Моцарелла, орегано",
    //         productId: null,
    //         newPrice: 199,
    //         oldPrice: 390,
    //         status: false,
    //         organizations: [
    //             {
    //                 id: 1,
    //                 terminalId: "000",
    //                 name: "ТРЦ Макси, ул. Пролетарская, 2"
    //             }
    //         ],
    //         city: {
    //             name: "Тула",
    //             url: "tula"
    //         }
    //     }
    // ]
}

export const dashboardReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ACTIONS:
            return {
                ...state
            }

        case CHANGE_STATUS:
            return {
                ...state,                
                actions: state.actions.map(item => {
                    if(item.id === action.payload.actionId) {
                        return {...item, status: action.payload.status}
                    }
                    return item;
                })
            }

        case ACTIONS_SUCCESS:
            return {
                ...state,                
                actions: action.data
            }

        case DELETE_ACTION:
            return {
                ...state
            }

        default:
            return state;
    }
}


export const changeStatus = (actionId, status) => ({type: CHANGE_STATUS, payload: {actionId, status}});
export const actionSuccess = (data) => ({type: ACTIONS_SUCCESS, data});
export const deleteAction = () => ({type: DELETE_ACTION});
