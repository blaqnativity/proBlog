import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const returnHome = () => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  useEffect(() => {
    returnHome();
  }, []);

  return (
    <>
      <div class="bg-gray-100">
        <div class="h-screen flex flex-col justify-center items-center">
          <h1 class="text-8xl font-bold text-gray-800">404</h1>
          <p class="text-4xl font-medium text-gray-800">Page Not Found</p>
          <Link to="/" class="mt-4 text-xl text-blue-600 hover:underline">
            Go back home
          </Link>
          <span className=" mt-5 text-sm font-semibold text-zinc-400">
            You will be redirected back to the main page after 5 secs...
          </span>
        </div>
      </div>
    </>
  );
};

export default NotFound;
