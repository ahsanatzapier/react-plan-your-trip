import { initializeApp } from "firebase/app";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  // arrayUnion,
  // updateDoc,
  // arrayRemove,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaAcLZ3b-apIsbgFT3L8Mugb4RomROYxs",
  authDomain: "planmytrip-259ff.firebaseapp.com",
  projectId: "planmytrip-259ff",
  storageBucket: "planmytrip-259ff.appspot.com",
  messagingSenderId: "189354171980",
  appId: "1:189354171980:web:c2d4957fb03c3386f1dee9",
};

// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * ***************************
 * createPlanArrayForToken
 * ***************************
 */
export const createPlacesArrayForToken = async (token) => {
  if (!token) return;

  const tokenDocRef = doc(db, "plans", `${token}`);
  const tokenSnapshot = await getDoc(tokenDocRef);

  console.log(tokenDocRef);
  console.log(tokenSnapshot.exists());

  if (!tokenSnapshot.exists()) {
    try {
      await setDoc(tokenDocRef, {
        plans: [],
      });
      console.log("Plans Array Created for token");
    } catch (error) {
      console.log("error creating the token document", error.message);
    }
  }
  return tokenDocRef;
};
