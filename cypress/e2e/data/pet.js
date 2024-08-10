class Pet {



    postBodyPayload() {
        const postData = {
            "id": 123456654321,
            "category": {
                "id": 135531,
                "name": "string"
            },
            "name": "beluga whale",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 246642,
                    "name": "string"
                }
            ],
            "status": "available"
        }
        return postData;
    }

    updatePayload() {
        const postData = {
            "id": 123456654321,
            "category": {
                "id": 135531,
                "name": "string"
            },
            "name": "white shark",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 246642,
                    "name": "string"
                }
            ],
            "status": "available"
        }
        return postData;
    }

    formDataUpdate() {
        const postData = {
            "name": "polar22",
            "status": "sold"
        }
        return postData;
    }

    

}




export default Pet;