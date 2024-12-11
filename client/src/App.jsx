import { Suspense, useState } from "react";
import HomePage from "./pages/HomePage";
import MenuBar from "./pages/components/MenuBar";
import { fetchWeatherData } from "./api";
import HomePageSkeleton from "./pages/skeletons/HomePageSkeleton";

function App() {
    const [weatherDataPromise, setWeatherDataPromise] = useState(fetchWeatherData());
    // const [weatherDataPromise, setWeatherDataPromise] = useState(new Promise(res=>setTimeout(()=>'', 10000)));

    function toggleDarkMode() {
        const root = document.getElementById('root');
        if(root.className == 'dark') {
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