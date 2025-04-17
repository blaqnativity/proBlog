import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const signUserOut = async () => {
    await signOut(auth);
    navigate("/login");
  };
  return (
    <>
      <header class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-xl">
        <div class="px-4">
          <div class="flex items-center justify-between">
            <div class="flex shrink-0">
              <Link class="flex items-center" to="/">
                <p class="text-lg font-semibold text-zinc-700">ProBlogger</p>
              </Link>
            </div>
            <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
              {!user ? (
                <Link
                  class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                  to="/login"
                >
                  Sign In
                </Link>
              ) : (
                <Link
                  class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                  to="/add-post"
                >
                  Create Posts
                </Link>
              )}
            </div>
            {user && (
              <div className="flex items-center justify-end gap-3">
                <div className="flex items-center gap-2">
                  <img
                    src={user.photoURL}
                    alt="user"
                    className="h-10 w-10 rounded-full"
                  />
                  <span>{user?.displayName}</span>
                </div>

                <button
                  onClick={signUserOut}
                  className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
