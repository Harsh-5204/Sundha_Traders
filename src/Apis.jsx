import axios from "axios";

export  async function ShopData(){
    try{
        const response = await axios.get('https://supermarket-e9sk.onrender.com/products');
        return response.data.products;
    }catch(error){
        // console.log("ShopData() Err:" , error);
        throw error;
    }
}
export async function Categoryname() {
    try{
        const response = await axios.get('https://supermarket-e9sk.onrender.com/categories');
        return response.data.categories;
    }catch(error){
        // console.log("ShopData() Err:" , error);
        throw error;
    }
}
export async function Categorywisepro(name) {
    try{
        const response = await axios.get(`https://supermarket-e9sk.onrender.com/category/${name}`);
        return response.data.products;
    }catch(error){
        // console.log("ShopData() Err:" , error);
        throw error;
    }
}