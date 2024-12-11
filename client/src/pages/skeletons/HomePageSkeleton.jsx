function SearchBarSkeleton() {
    return (
        <div className="flex flex-col gap-1 relative animate-pulse">
            <div className="dark:bg-dark-primary bg-light-primary rounded-small overflow-hidden">
                <input type="text" defaultValue={''} placeholder="Search for cities" className="border-none outline-none focus:ring-0 focus:border-transparent w-full bg-inherit p-[0.7rem] dark:text-dark-textActive text-light-textActive" />
            </div>
        </div>
    )
}

function WeatherCardSkeleton() {
    return (
        <div className="px-large py-medium flex justify-between items-center h-[14.5rem] animate-pulse">
            
        </div>
    )
}

function TodayForecastSkeleton() {
    return (
        <div className="dark:bg-dark-primary bg-light-primary rounded-medium p-large flex flex-col gap-medium h-[7.5rem] animate-pulse">
            
        </div>
    )
}

function AirConditionsSkeleton() {
    return (
        <div className="dark:bg-dark-primary bg-light-primary rounded-medium p-large flex flex-col gap-medium h-[15rem] animate-pulse">
            
        </div>
    )
}

function SevenDayForecastSkeleton() {
    return (
        <div className="dark:bg-dark-primary bg-light-primary rounded-medium p-large flex flex-col h-full animate-pulse">
            
        </div>
    )
}

export default function HomePageSkeleton() {
    return (
        <>
            <div className="flex flex-col gap-small w-full flex-1 sm:min-w-[60%]">
                <SearchBarSkeleton />

                <div className="flex flex-col gap-small min-w-[200px] sm:min-w-[200px]">
                    <WeatherCardSkeleton />
                    <TodayForecastSkeleton />
                    <AirConditionsSkeleton />
                </div>
            </div>

            <div className="flex-1 lg:mt-20 h-[700px] min-w-[400px] sm:min-w-[360px]">
                <SevenDayForecastSkeleton />
            </div>
        </>
    );
}