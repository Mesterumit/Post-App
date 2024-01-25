import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { github, gmail, linkedin } from "../helper/iconData";

const FooTer = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("Istanbul");
  const { currentUser } = useSelector((state) => state.auth);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric&lang=tr`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      });
  }, [url]);

  useEffect(() => {
    if(currentUser?.city){
        setCity(currentUser?.city);
    }else{
        setCity("Istanbul");
    }
  }, [currentUser])
  

  return (
    <div className="mt-16 w-full">
      <footer className="bg-slate-500 dark:bg-slate-600 fixed bottom-0 w-full">
        <div className="px-3 w-full">
          <div className="flex w-full justify-between items-center p-2 max-sm:grid max-sm:place-content-center max-sm:text-center">
            <div className="flex items-center">
              <img
                src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
                alt={weather?.weather[0].description.toLocaleUpperCase()}
                title={weather?.weather[0].description.toLocaleUpperCase()}
                className="mb-0 cursor-pointer"
              />
              <p className="text-base text-white">
                {weather?.name} {Math.round(weather?.main.temp)}
                <sup>°C</sup>
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-white text-base">© 2023 Anthony Harold</p>
            </div>

            <div className="flex items-center max-sm:ml-6">
              <a
                rel="noopener noreferrer"
                href="https://github.com/anthonyharold67"
                target="true"
                className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4">
                {github}
              </a>
              <a
                rel="noopener noreferrer"
                href="mailto:anthonyharold@gmail.com"
                className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4">
                {gmail}
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/anthony-harold-67-fs"
                target="true"
                className="text-dark hover:bg-primary hover:border-primary flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white">
                {linkedin}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooTer;
