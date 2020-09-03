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

export const addBlogEntries = async (
  author,
  title,
  summary,
  content,
  date,
  importance
) => {
  const collection = db.collection(`User Notes: ${uid}`);
  const bid = Date.now();

  const req = await collection.doc(`${bid}`).set({
    bid: bid,
    author,
    title,
    summary,
    content,
    date,
    importance,
    date: moment().format("llll"),
  });

  return req;
};

export const deleteBlogEntries = async (uid, nid) => {
  const collection = db.collection(`User Notes: ${uid}`);

  const req = await collection.doc(`${nid}`).delete();
  return req;
};
