import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function ErrorPage({ status }) {
  const title = {
    503: "503: Service Unavailable",
    500: "500: Server Error",
    404: "404: Page Not Found",
    403: "403: Forbidden",
  }[status];

  const description = {
    503: "Sorry, we are doing some maintenance. Please check back soon.",
    500: "Whoops, something went wrong on our servers.",
    404: "Sorry, the page you are looking for could not be found.",
    403: "Sorry, you are forbidden from accessing this page.",
  }[status];

  return (
    <div
      className="
        flex
        items-center
        justify-center
        w-screen
        h-screen
        bg-primary-cobalt-blue-100
        dark:bg-primary-cobalt-blue-600"
    >
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-blue-600 text-9xl">{status}</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-red-500">{title}</span>
          </h6>

          <p className="mb-8 text-center text-gray-500 md:text-lg">
            {description}
          </p>

          <Link
            href="/"
            type="button"
            className="block sm:hidden font-semibold hover:bg-primary-cobalt-blue-600 bg-primary-cobalt-blue-100
            ring-blue-400 dark:ring-blue-800 px-7 py-3 rounded-full text-neutral-white text-xs focus:outline-none focus:ring"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
