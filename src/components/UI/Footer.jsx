import { Link } from "react-router-dom";
import { useUserContext } from "../context/userContext";

function Footer() {
  const { data } = useUserContext();

  return (
    <footer className="flex flex-col gap-32 pb-12 w-[90%]">
      <section className="contact-div flex justify-between   font-semibold">
        <p className="text-3xl w-[30%] md:w-[40%]">
          <Link to="/contact" className=" ">
            I am thrilled to answer to your next project &gt;
          </Link>
        </p>
        <p className="font-semibold text-2xl flex flex-col gap-7">
          <a href="mailto:eebakare@gmail.com">eebakare@gmail.com</a>{" "}
          <span className="text-base">View Resume</span>
        </p>
      </section>

      <section className="copyright flex justify-between">
        <p className="text-secondary font-bold">EniolaOluwa Bakare - 2023</p>
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
      </section>
    </footer>
  );
}

export default Footer;
