import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { github, gmail, linkedin } from "../helper/iconData";

const FooTer = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("Boston");
  const { currentUser } = useSelector((state) => state.auth);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric&lang=tr`;
  console.log("URL", weather)
  useEffect(() => {

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.weather) {
          setWeather(data);
          console.log("DATA---", data);
        }

      });


  }, [url]);

  useEffect(() => {
    if (currentUser) {
      setCity('Boston');
    } else {
      setCity("New York");
    }
  }, [currentUser])


  return (

    <div className="w-full -z-0">
          <footer className="bg-slate-500 dark:bg-slate-600 fixed bottom-5 mb-8  w-full  -z-1">
          <div className="flex  w-full justify-between items-center p-2 max-sm:grid max-sm:place-content-center max-sm:text-center">
            <div className="flex items-center">
              <p className="text-base text-white">
                {weather?.name} {Math.round(weather?.main?.temp)}
                <sup>°C</sup>
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-white text-base">© 2023 Umit Mester</p>
            </div>

            <div className="flex items-center max-sm:ml-6">
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
            </div>
          </footer>
          </div>
     
    
  );
};

export default FooTer;
