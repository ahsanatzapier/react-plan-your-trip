import { initializeApp } from "firebase/app";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  arrayUnion,
  updateDoc,
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
 * createPlacesArrayForToken
 * ***************************
 */
export const createPlacesArrayForToken = async (token) => {
  if (!token) return;

  const tokenDocRef = doc(db, "plans", `${token}`);
  const tokenSnapshot = await getDoc(tokenDocRef);

  // console.log(tokenDocRef);
  // console.log(tokenSnapshot.exists());

  if (!tokenSnapshot.exists()) {
    try {
      await setDoc(tokenDocRef, {
        places: [],
      });
      console.log("Places Array Created for token");
    } catch (error) {
      console.log("error creating the token document", error.message);
    }
  }
  return tokenDocRef;
};

/*
 * **************************
 * getPlaceArrayForToken
 * **************************
 */
export const getPlacesArrayForToken = async (token) => {
  if (!token) return;

  const tokenDocRef = doc(db, "plans", `${token}`);

  const docSnap = await getDoc(tokenDocRef);
  if (docSnap.exists()) {
  } else {
    console.log("No such document!");
  }
  // console.log(docSnap.data());
  return docSnap.data();
};

/**
 * ********************************
 * addPlaceToPlacesArrayForToken
 * ********************************
 */
export const addPlaceToPlacesArrayForToken = async (token, place) => {
  if (!token && place) return;

  const tokenDocRef = doc(db, "plans", `${token}`);
  const userSnapshot = await getDoc(tokenDocRef);

  if (userSnapshot.exists()) {
    try {
      await updateDoc(tokenDocRef, { places: arrayUnion(place) });
    } catch (error) {
      console.log("error adding place to array", error.message);
    }
  }
  return tokenDocRef;
};
