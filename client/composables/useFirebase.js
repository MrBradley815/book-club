import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

export const createUser = async (email, password) => {
  try {
    const auth = getAuth()
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
    return credentials
  } catch (err) {
    return err.message
  }
}

export const signInUser = async (email, password) => {
  try {
    const auth = getAuth()
    const credentials = await signInWithEmailAndPassword(auth, email, password)
    return credentials
  } catch (err) {
    return err.message
  }
}

export const initUser = async () => {
  const auth = getAuth()
  onAuthStateChanged(auth, user => {
    if (user) {
      const uid = user.uid
      console.log(user)
    } else {

    }
  })
}

export const signOutUser = async () => {
  const auth = getAuth()
  const result = await auth.signOut()
  console.log('Sign out:', result)
}