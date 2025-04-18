import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="mx-auto max-w-screen-xl p-4 mt-16 grid md:grid-cols-2 gap-12 xl:col-span-2 xl:mt-0">
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold leading-6 text-gray-900">Links</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a
                  class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  href="#"
                >
                  Homepage
                </a>
              </li>
              <li>
                <a
                  class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  href="#"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  href="#"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-10 md:mt-0">
            <h3 class="text-sm font-semibold leading-6 text-gray-900">
              Support
            </h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a
                  class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  href="#"
                >
                  Legal Notice
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="">
          <h3 class="text-sm font-semibold leading-6 text-gray-900">
            Subscribe to our Newsletter
          </h3>
          <p class="mt-2 text-sm leading-6 text-gray-600">
            We will inform you about promotions and exclusive offers as well as
            new teaching materials.
          </p>
          <form class="mt-6 sm:flex sm:max-w-md">
            <label for="email-address" class="sr-only">
              {" "}
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email-address"
              autocomplete="email"
              required=""
              class="w-full min-w-0 border appearance-none rounded-md border-gray-300 bg-white px-2  text-base leading-7 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
              placeholder="E-Mail Address"
            />
            <div class="mt-4 rounded-md sm:mt-0 sm:ml-4 sm:flex-shrink-0">
              <div class="flex justify-end">
                <button
                  class="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent disabled:bg-gray-400 appearance-none text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-white w-full"
                  type="submit"
                >
                  <div class="relative">
                    <div class="">Subscribe</div>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </footer>
    </>
  );
};

export default Footer;
