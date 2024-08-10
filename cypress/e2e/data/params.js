class Params{
    url(){
        return "https://petstore.swagger.io";
    }

    headerPayload() {
        const headerBody = {
            "accept": "application/json",
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Access-Control-Allow-Methods" : "'*'"
        }
        return headerBody;
    }
}
export default Params