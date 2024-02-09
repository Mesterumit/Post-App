import React from "react";
import { useSelector } from "react-redux";
import { github, gmail, linkedin } from "../helper/iconData";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.auth);
  console.log("CURRENT USER BIO",currentUser )
  const { blogs } = useSelector((state) => state.post);
  return (
    <section style={{height:'100vh'}} className=" bg-blueGray-50 py-8 pt-40 mt-40">
      <div style={{paddingTop:'80px'}} className="w-full  lg:w-8/12 px-4  mx-auto">
        <div className="flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 dark:text-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="pt-24">
            <div className="flex flex-wrap justify-center mt-20 ">
              <div className="w-full px-4 flex justify-center">
                <div className="relative ">
                  <img
                    alt="..."
                    src={currentUser?.image}
                    className="shadow-xl rounded-full h-24 align-middle border-none max-w-150-px "
                  />
                </div>
              </div>
              <div className="w-full px-4  text-center">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      {
                        blogs?.filter(
                          (item) => item.author === currentUser?.username
                        ).length
                      }
                    </span>
                    <span className="text-sm text-blueGray-400">Blogs</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold leading-normal capitalize text-blueGray-700 mb-2">
                {currentUser?.first_name.toUpperCase()} {currentUser?.last_name.toUpperCase()}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                {currentUser?.username}
              </div>
              <div className="flex justify-center max-sm:ml-6">
              <a
                rel="noopener noreferrer"
                href="https://github.com/Mesterumit"
                target="_blank"
                className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4">
                {github}
              </a>
              <a
                rel="noopener noreferrer"
                href="mailto:mesterumit@gmail.com"
                target="_blank"
                className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4">
                {gmail}
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/umitmester"
                target="_blank"
                className="text-dark hover:bg-primary hover:border-primary flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white">
                {linkedin}
              </a>
            </div>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                {currentUser?.email}
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  A seasoned Full Stack Developer at Nioyatech, I specialize in leading transformative projects,
                    delivering user-centric applications, and seamlessly integrating front-end and back-end components.
                    With a commitment to excellence and a passion for impactful solutions,
                    I actively seek opportunities to contribute to the evolution of digital environments.
                    Explore my linkedin and works in my portfolio for exciting possibilities ahead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
