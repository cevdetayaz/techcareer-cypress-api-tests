class Store {

    urlStoreFix() {
        const postData = '/v2/store/order/';
        return postData;
    }

    orderPetBody() {
        const postData = {
            "id": 99789782233,
            "petId": 1234566543210,
            "quantity": 1,
            "shipDate": "2024-08-07T21:04:52.462Z",
            "status": "placed",
            "complete": true
        }
        return postData;
    }
}

export default Store;