const initialState = {
    actions: [
        {
            title: "Пицца «Чоризо» 28 см за 250₽",
            cafe: "ТРЦ Макси",
            timeLimit: "30",
            img: '',
            notation: '*Акция действует только на самовынос по адресу: ТРЦ "Макси", пр. Ленинградский, 38. Срок действия акции ограничен. С акциями и бонусами не пересекается.'
        }
    ]
}

export const actionReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}
