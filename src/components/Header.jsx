import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="w-full mt-20">
      <section className="flex flex-col justify-center max-w-7xl px-4 py-10 mx-auto sm:px-6">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
          News Articles
        </h2>
        {user ? (
          <p>
            Welcome back, <strong>{user.displayName || "Reader"}</strong>! Enjoy
            your 2-min reads.
          </p>
        ) : (
          <p>
            Sign in to get started and find amazing 2-min reads that will catch
            your eyes.
          </p>
        )}
      </section>
    </div>
  );
};

export default Header;
