import {cp} from "cloudpayments";

const publicId = {
    developerMode: {
        arhangelsk: "pk_7786fd478b8b67cf1af47ce42fd3f",
        tula: "pk_db4c33a016a1ce3790d8220c8ee04"
    },
    productionMode: {
        arhangelsk: "pk_f4610e69d65a6315a90b45fdc8c81",
        tula: "pk_280dcdf671b6a343345885495dcf6"
    }    
}

const payOrder = () => {
    const widget = new cp.CloudPayments();
       widget.pay('charge ', // или 'pay'
           { //options
               publicId: publicId.developerMode.arhangelsk, //карта 4242 4242 4242 4242 Архангельск
               description: 'Оплата товаров в sale.pizzapresto.ru', //назначение
               amount: 100, //сумма
               currency: 'RUB', //валюта
            //    accountId: 'user@example.com', //идентификатор плательщика (необязательно)
            //    invoiceId: '1234567', //номер заказа  (необязательно)
            //    skin: "mini", //дизайн виджета (необязательно)
            //    data: {
            //        myProp: 'myProp value'
            //    }
           },
           {
               onSuccess: function (options) { // success
                   //отправка заказа в iiko
                   //создание плашки заказа на главной с success и номером заказа
               },
               onFail: function (reason, options) { // fail
                   //создание плашки заказа на главной с ошибкой
               },
               onComplete: function (paymentResult, options) { //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
                   //например вызов вашей аналитики Facebook Pixel
               }
           }
       )
   };

   export default payOrder;