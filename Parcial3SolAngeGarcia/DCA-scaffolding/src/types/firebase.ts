import firebaseConfig from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import {getFirestore,collection,getDocs} from "firebase/firestore";

export const addData = async (formData:any)=>{
    try {
        const querySnapshot = await getDocs(collection(db, "UserColors"));
        const Saveuser: any = []
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          Saveuser.push({id:doc.id,...formData})
        });  
        return Saveuser
    } catch (error) {
        console.error(error)
    }
}

export default { addData }

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
