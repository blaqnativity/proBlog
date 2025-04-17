import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

const Post = ({ post }) => {
  const [likes, setLikes] = useState(null);
  const likesRef = collection(db, "likes");
  const likesDoc = query(likesRef, where("postId", "==", post.id));
  const [user] = useAuthState(auth);

  const getLikes = async () => {
    const data = await getDocs(likesDoc);
    setLikes(data.docs.length);
  };

  const addLike = async () => {
    await addDoc(likesRef, { userId: user?.uid, postId: post.id });
    getLikes();
  };

  const removeLike = async () => {
    await deleteDoc(likesRef, { userId: user?.uid, postId: post.id });
    getLikes();
  };

  useEffect(() => {
    getLikes();
  }, []);
  return (
    <>
      <div class="p-4 flex flex-col justify-between gap-2 border rounded-lg shadow-md bg-white dark:bg-gray-700 dark:border-gray-400/40">
        <a
          class="text-xl font-semibold text-blue-700 hover:underline two-lines dark:text-blue-100"
          href=""
        >
          {post.title}
        </a>

        <div class="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-300">
          <span class="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-600">
            @{post.username}
          </span>
          <button onClick={addLike} className="cursor-pointer">
            &#128077;
          </button>
          {likes && <p>Likes :{likes}</p>}
        </div>

        <p class="text-gray-800 two-lines dark:text-gray-300 truncate">
          {post.description}
        </p>

        <div class="flex items-center justify-between text-sm">
          <button class="text-gray-500 dark:text-gray-300">2 min read</button>

          <a href="" class="text-blue-700 hover:underline dark:text-white">
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default Post;
