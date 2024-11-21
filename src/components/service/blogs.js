import { api } from "../../api"

 export const blogsAll = async () => {
    const res = await api.get('/posts')
   if(!res.data){
    throw new Error("Error while posts ");
   }return res.data;
}




