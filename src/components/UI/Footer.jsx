import { useUserContext } from "../context/userContext";

function Footer() {
  const { data } = useUserContext();

  return (
    <footer className="flex flex-col gap-32 ">
      <section className="contact-div flex justify-between   font-semibold">
        <p className="w-[30%] text-3xl">I am thrilled to answer to your next project &gt;</p>
        <p className="font-semibold text-2xl flex flex-col gap-7">
          eebakare@gmail.com <span className="text-base">View Resume</span>
        </p>
      </section>

      <section className="copyright flex justify-between">
        <p className="text-secondary font-bold">EniolaOluwa Bakare --2023</p>
        <ul className="flex gap-6 font-bold text-mainBlack">
          <li>Github</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
