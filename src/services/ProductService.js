export async function getAllProducts() {
    try{
        const response = await fetch('https://localhost:7003/botapi/Product/GetProducts');
        console.log(response);
        const data = await response.json();
        console.log(data);
        return data;
        
    } catch(error){
        console.log(error);
    }  
}