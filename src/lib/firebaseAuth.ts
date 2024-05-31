//* firebaseAuth.ts
import { auth, app } from "../firebase/clientApp";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, getAuth, GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { setDoc, doc, collection, getFirestore } from "firebase/firestore";

const db = getFirestore(app);

interface UserCredential {
    user: User;
}

export const registerUser = async (email: string, password: string, displayName: string): Promise<User> => {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await addUserDataToFirestore(user.uid, displayName, email);
    await sendEmailVerificationToUser(user);
    return user;
};

export const loginUser = async (email: string, password: string): Promise<User> => {
    const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
};

export const loginWithGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const userCredential: UserCredential = await signInWithPopup(auth, provider);
    await addUserDataToFirestore(userCredential.user.uid, userCredential.user.displayName || '', userCredential.user.email || '');
    return userCredential.user;
};

const addUserDataToFirestore = async (uid: string, displayName: string, email: string): Promise<void> => {
    await setDoc(doc(collection(db, "users"), uid), { uid, displayName, email });
};

const sendEmailVerificationToUser = async (user: User): Promise<void> => {
    if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser);
    }
};
