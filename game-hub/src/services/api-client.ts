import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'6fbecc3fa66f415e9e626526cb69e8f1'
    }
})