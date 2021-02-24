const SET_ACTIONS = "SET_ACTIONS";
const CHANGE_STATUS = "CHANGE_STATUS";

const initialState = {
    actions: [
        {
            id: 1,
            img: null,
            title: "Пицца «Чоризо» 28 см за 250₽",
            composition: "Колбаски Чоризо, томатный соус, сыр Моцарелла, орегано",
            newPrice: 250,
            oldPrice: 410,
            status: true,
            organizations: [
                {
                    id: 1,
                    name: "ТРЦ Макси, пр. Ленниградский, 38"
                },
                {
                    id: 2,
                    name: "Дзержинского, 7"
                }],
            city: {
                name: "Архангельск",
                url: "arkhangelsk"
            }
        },
        {
            id: 2,
            img: null,
            title: "Пицца «Пепперони» 28 см за 199₽",
            composition: "Колбаски Пепперони, томатный соус, сыр Моцарелла, орегано",
            newPrice: 199,
            oldPrice: 390,
            status: false,
            organizations: [
                {
                    id: 1,
                    name: "ТРЦ Макси, ул. Пролетарская, 2"
                }
            ],
            city: {
                name: "Тула",
                url: "tula"
            }
        }
    ]
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

        default:
            return state;
    }
}


export const changeStatus = (actionId, status) => ({type: CHANGE_STATUS, payload: {actionId, status}})
