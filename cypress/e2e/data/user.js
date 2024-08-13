class User {


    userSign(username, password) {
        const queryBody = {
            "username": username,
            "password": password
        }
        return queryBody;
    }

    listPostData() {
        const postData = [
            {
                "id": 98,
                "username": "cevdetayaz",
                "firstName": "Cevdet",
                "lastName": "Ayaz",
                "email": "cevdetayaz@gmail.com",
                "password": "sifre123",
                "phone": "5356664422",
                "userStatus": 1
            },
            {
                "id": 998,
                "username": "ayhanayaz",
                "firstName": "Ayhan",
                "lastName": "Ayaz",
                "email": "ayhanayaz@gmail.com",
                "password": "sifre456",
                "phone": "5428887733",
                "userStatus": 1
            }
        ]
        return postData;
    }
    userPostData() {
        const putData =
        {
            "id": 998,
            "username": "ayhanayaz4",
            "firstName": "Ayhan4",
            "lastName": "Ayaz",
            "email": "ayhanayaz@hotmail.com4",
            "password": "password852",
            "phone": "00000",
            "userStatus": 1
        }

        return putData;
    }    
}

export default User;