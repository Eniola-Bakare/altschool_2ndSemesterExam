import { Link } from "react-router-dom";
import { useUserContext } from "../context/userContext";

function Footer() {
  const { data } = useUserContext();

  return (
    <footer className="flex flex-col gap-32 pb-12 ">
      <section className="contact-div flex flex-col sm:flex-row items-center sm:items-start justify-between w-[100%] md:w-[90%] font-semibold">
        <p className="text-lg sm:text-2xl md:text-3xl w-[60%] md:w-[45%] xl:w-[40%] text-center sm:text-start sm:w-[40%] mb-5 sm:mb-0">
          <Link to="/contact" className=" ">
            I am thrilled to answer to your next project &gt;
          </Link>
        </p>
        <p className="font-semibold text-2xl flex flex-col items-center sm:items-start sm:gap-7">
          <a href="mailto:eebakare@gmail.com">eebakare@gmail.com</a>{" "}
          <span className="text-base mt-3 sm:mt-0">View Resume</span>
        </p>
      </section>

      <section className="copyright flex flex-col sm:flex-row items-center sm:items-start justify-between">
        <p className="text-secondary font-bold">EniolaOluwa Bakare - 2023</p>
        <ul className="flex gap-2 ms:gap-6 font-bold text-mainBlack text-sm sm:text-base">
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
      </section>
    </footer>
  );
}

export default Footer;
