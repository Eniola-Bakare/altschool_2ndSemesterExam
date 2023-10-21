import { useEffect, useState } from "react";
import { useUserContext } from "../context/userContext";

function HomeProfilePage() {
  const { data } = useUserContext();
  const about = data?.bio?.split(/\r?\n/);
  return (
    <div>
      <div className="border-b-2 border-mainBlack mb-16 ">
        <section className="hero flex mb-44 justify-between items-end ">
          <div className="hero-text w-[50%]">
            <p className="text-6xl font-semibold mb-16">
              Hi, I'm {data?.name || "eniolaOluwa"}, a Front-End Engineer
            </p>
            {about?.length > 0 ? (
              about.map((desc) => (
                <p
                  key={desc}
                  className="hero-text text-mainGray text-3xl mb-10 "
                >
                  {desc}
                </p>
              ))
            ) : (
              <p className="hero-text text-mainGray text-3xl mb-10 ">
                My work is mainly focused on third-dimension modeling, texturing
                and rendering. I like exploring the creatures with a touch of
                dark surrealism for characters and production. Now I’m an
                interactive media design student in Istanbul ⏤ currently
                freelancing and seeking internship opportunities.
              </p>
            )}
            <span className="hero-text text-mainGray text-3xl "></span>
          </div>

          <div className="hero-img w-[43%] flex justify-end ">
            <img
              src={data?.avatar_url || "../src/assetsheroImg.JPG"}
              alt="user's profile picture"
            />
          </div>
        </section>

        <section className="skills w-[60%] flex flex-col pb-24 ">
          <div className="main-software flex text-mainBlack pb-3">
            <p className="main-SW text-3xl underline font-bold">Company:</p>
            <div className="desc w-[60%] pl-5">
              <p className="main-SW-desc text-2xl text-mainGray">
                {data.company}
              </p>

              {/* <div className="extra-desc text-2xl text-mainGray">Adobe CC, Figma, Ableton</div> */}
            </div>
          </div>
          <div className="main-skills flex text-mainBlack pb-3 ">
            <p className="main-SW text-3xl underline font-bold">Location:</p>
            <div className="desc w-[60%] pl-5">
              <p className="main-SK-desc text-2xl text-mainGray ">
                {data.location}
              </p>
            </div>
          </div>
          <div className="main-skills flex text-mainBlack pb-3">
            <p className="main-SW text-3xl underline  font-bold">GitHub Profile:</p>
            <div className="desc w-[60%] pl-5">
              <p className="main-SK-desc text-2xl text-mainGray ">
                {data.html_url}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomeProfilePage;
