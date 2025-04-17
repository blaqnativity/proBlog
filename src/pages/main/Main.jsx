import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import Header from "../../components/Header";
import Post from "./Post";
import { useEffect, useState } from "react";

const Main = () => {
  const [postsList, setPostList] = useState([]);
  const postsRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <Header />
      <div class="mb-20 max-w-screen-xl mx-auto grid grid-cols-1 gap-4 px-1">
        {postsList?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Main;
