import { useEffect, useRef, useState } from "react";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { useDebouncedCallback } from 'use-debounce';
import config from "../../config";

function ResultItem({ id, label, onClick }) {
    const resultRef = useRef(null);

    useGSAP(() => {
        gsap.from(resultRef.current, {
            opacity: '0',
            duration: 0.2,
            ease: 'power1.inOut'
        })
    }, [])

    return (
        <div key={id} ref={resultRef} onClick={(e) => onClick(id)} className="p-[0.7rem] border-b dark:border-dark-logo border-light-logo last:border-none dark:hover:text-dark-textActive hover:text-light-textActive cursor-pointer">
            {label}
        </div>
    )
}

function SearchBar({ onResultItemClick }) {
    const [cities, setCities] = useState([]);
    const suggestionsRef = useRef(null);
    const searchInputRef = useRef(null);

    const debouncedSearch = useDebouncedCallback(async (value) => {
        if (value.length > 2) {
            const response = await fetch(`${config.serverURL}/search?city=${value}`, {
                method: 'get',
            })
            if (!response.ok) {
                setCities([]);
                throw new Error('Error searching')
            }
            const data = await response.json();
            setCities(data);
        }
        else {
            setCities([]);
        }
    }, 500);

    useEffect(() => {
        function handleClick(e) {
            if (suggestionsRef.current) {

                if (!suggestionsRef.current.contains(e.target)) {
                    setCities([])
                }
            }
        }
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);

    function handleResultItemClick(id) {
        setCities([]);
        searchInputRef.current.value = "";
        onResultItemClick(id);
    }

    return (
        <div className="flex flex-col gap-1 relative">
            <div className="dark:bg-dark-primary bg-light-primary rounded-small overflow-hidden">
                <input ref={searchInputRef} type="text" onChange={(e) => debouncedSearch(e.target.value)} defaultValue={''} placeholder="Search for cities" className="border-none outline-none focus:ring-0 focus:border-transparent w-full bg-inherit p-[0.7rem] dark:text-dark-textActive text-light-textActive" />
            </div>

            <div ref={suggestionsRef} className={`${cities.length > 0 ? 'flex' : 'hidden'} absolute top-12 w-3/4 flex-col dark:bg-dark-primary bg-light-primary rounded-small p-[0.7rem]`}>
                {
                    cities.map((city, index) => {
                        return (
                            <ResultItem key={city.id} id={city.id} onClick={handleResultItemClick} label={`${city.name} - ${city.region} - ${city.country}`} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default SearchBar;