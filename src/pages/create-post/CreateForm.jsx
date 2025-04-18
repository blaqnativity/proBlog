import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);
  const schema = yup.object().shape({
    title: yup.string().required("post title is required"),
    description: yup.string().required("post description is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, "posts");

  const onCreatePost = async (data) => {
    await addDoc(postsRef, {
      ...data,
      username: user.displayName,
      userId: user?.uid,
    });
    navigate("/");
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onCreatePost)}
        class="mt-40 max-w-xl mx-auto flex w-full flex-col border border-gray-200 rounded-lg bg-white p-8"
      >
        <h2 class="title-font mb-1 text-lg font-medium text-gray-900">
          Create your own post
        </h2>
        <p class="mb-5 leading-relaxed text-gray-600">
          Have anything you'd like to share?
        </p>
        <div class="mb-4">
          <label for="email" class="text-sm leading-7 text-gray-600">
            Title
          </label>
          <input
            {...register("title")}
            type="text"
            class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
          <span className="text-[12px] italic text-red-400 opacity-60">
            {errors.title?.message}
          </span>
        </div>
        <div class="mb-4">
          <label for="message" class="text-sm leading-7 text-gray-600">
            Post
          </label>
          <textarea
            {...register("description")}
            class="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          ></textarea>
          <span className="text-[12px] italic text-red-400 opacity-60">
            {errors.description?.message}
          </span>
        </div>
        <button
          type="submit"
          class="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none"
        >
          Add Post
        </button>
        <p class="mt-3 text-xs text-gray-500">
          Feel free to connect with me on
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/olukayode-asemudara-8b04ba196/"
            className="text-blue-500 font-semibold ml-1"
          >
            LinkedIn
          </Link>
        </p>
      </form>
    </>
  );
};

export default CreateForm;
