import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import Nav from "../UI/Nav";
import Footer from "../UI/Footer";
import { useUserContext } from "../context/userContext";

function ErrorBoundary({ children }) {
  const { data } = useUserContext();
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // This effect captures errors in child components
    const handleError = (error) => {
      console.error(error);
      setHasError(true);
      setError(error.message);
    };

    window.addEventListener("error", handleError);

    return () => {
      // Clean up the event listener
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    // Render a fallback UI when an error is captured
    return (
      <div className="max-w-[1440px] w-[1440px] flex flex-col justify-center items-center h-[100dvh] ">
        <div className="errorBoundary-text h-[40%] flex flex-col items-center">
          <p className="text-6xl">Something went wrong :(</p>
          <p className="text-2xl pt-6 underline underline-offset-4">
            <span>{error}</span>
          </p>
        </div>
        <section className="copyright flex justify-between w-[100%]">
          <p className="text-secondary font-bold">
            Please, reach eniolaOluwa if this error persists &gt;
          </p>
          <ul className="flex gap-6 font-bold text-mainBlack">
            <li>
              <a
                href={`https://twitter.com/${data.html_url}`}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={`https://linkedin.com/in/bakareeniola`}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`https://twitter.com/${data.twitter_username}`}
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </section>{" "}
      </div>
    );
  }

  return children;
}

export default ErrorBoundary;
