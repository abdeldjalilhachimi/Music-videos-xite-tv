import axios from 'axios'
export default async function getData() {
   
   try {
         return axios.get(process.env.REACT_APP_BASE_URL);
      
    } catch (error) {
      console.error(error);
    }


}
