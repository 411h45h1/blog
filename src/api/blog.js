import firebase from "../../core/firebase";
import "firebase/firestore";

const db = firebase.firestore();

export const getBlogEntries = async () => {
  const collection = db.collection("blog");

  const Blog = await collection.get();
  return Blog.docs.map((doc) => {
    return { bid: doc.id, ...doc.data() };
  });
};
