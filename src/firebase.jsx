import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCAiVUj11j9umOkboNOhTwuelqAs818RH4",
  authDomain: "netflix-f3066.firebaseapp.com",
  projectId: "netflix-f3066",
  storageBucket: "netflix-f3066.appspot.com",
  messagingSenderId: "692149506554",
  appId: "1:692149506554:web:279c9003b04eae41bf1443"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

const signup=async(name,email,password)=>{
try{
   const res= await createUserWithEmailAndPassword(auth,email,password);
   const user=res.user;
   await addDoc(collection(db,"user"),{
    uid:user.uid,
    name,
    authProvider:"local",
    email,
   })
}catch(error){
console.log(error)
toast.error(error.code.split('/')[1].split('-').join(' '));



}
}

const login=async(email,password)=>{
try {
   await signInWithEmailAndPassword(auth,email,password)
} catch (error) {
   console.log(error) 
   toast.error(error.code.split('/')[1].split('-').join(' '));
}
}
const logout=()=>{
    signOut(auth);
}
export {auth,db,login,signup,logout}