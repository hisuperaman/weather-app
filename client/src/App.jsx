import { Suspense, useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import MenuBar from "./pages/components/MenuBar";
import { fetchWeatherData, fetchWeatherDataByCoordinates } from "./api";
import HomePageSkeleton from "./pages/skeletons/HomePageSkeleton";



function App() {
    const [weatherDataPromise, setWeatherDataPromise] = useState(fetchWeatherData());
    // const [weatherDataPromise, setWeatherDataPromise] = useState(new Promise(res=>setTimeout(()=>'', 10000)));


    function success(pos) {
        const crd = pos.coords;
    
        setWeatherDataPromise(fetchWeatherDataByCoordinates(crd.latitude, crd.longitude))
    }
    
    function errors(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }


    useEffect(() => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then(function (result) {
                    if (result.state === "granted") {
                        console.log(result.state);
                        //If granted then you can directly call your function here
                        navigator.geolocation.getCurrentPosition(success);
                    } else if (result.state === "prompt") {
                        navigator.geolocation.getCurrentPosition(success, errors, options);
                    } else if (result.state === "denied") {
                        //If denied then you have to show instructions to enable location
                    }
                    result.onchange = function () {
                        console.log(result.state);
                    };
                });
        } else {
            alert("Geolocation Not available!");
        }
    }, [])

    function toggleDarkMode() {
        const root = document.getElementById('root');
        if (root.className == 'dark') {
            root.className = 'light';
        }
        else {
            root.className = 'dark';
        }
    }

    return (
        <div className="font-rubik flex-wrap dark:bg-dark-secondary bg-light-secondary min-h-screen flex gap-medium p-medium dark:text-dark-text text-light-text">
            <MenuBar toggleDarkMode={toggleDarkMode} />

            <Suspense fallback={<HomePageSkeleton />}>
                <HomePage weatherDataPromise={weatherDataPromise} setWeatherDataPromise={setWeatherDataPromise} />
            </Suspense>
        </div>
    )
}

export default App;