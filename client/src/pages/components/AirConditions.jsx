import { faDroplet, faSun, faTemperature3, faWind } from "@fortawesome/free-solid-svg-icons";
import BarTitle from "./BarTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({ label }) {
    return (
        <div className="bg-light-buttonWithText dark:bg-dark-buttonWithText rounded-medium px-small py-1 text-sm cursor-pointer hover:brightness-110 text-white">
            {label}
        </div>
    )
}

function AirConditionsItem({ label, value, icon }) {
    return (
        <div className="flex gap-2">
            <FontAwesomeIcon icon={icon} />
            <div className="flex flex-col gap-2">
                <p className="text-sm">{label}</p>
                <p className="dark:text-dark-textActive text-light-textActive text-xl font-semibold">{value}</p>
            </div>
        </div>
    )
}

function AirConditions({realFeel, wind, chanceOfRain, uv}) {
    return (
        <div className="dark:bg-dark-primary bg-light-primary rounded-medium p-large flex flex-col gap-medium">
            <div className="flex justify-between">
                <BarTitle text={'AIR CONDITIONS'} />
                <Button label={'See more'} />
            </div>

            <div>
                <div className="flex gap-[40%]">
                    <div className="flex flex-col gap-6">
                        <AirConditionsItem label={'Real Feel'} value={`${realFeel}°`} icon={faTemperature3} />
                        <AirConditionsItem label={'Chance of Rain'} value={chanceOfRain+'%'} icon={faDroplet} />
                    </div>
                    <div className="flex flex-col gap-6">
                        <AirConditionsItem label={'Wind'} value={wind+' km/h'} icon={faWind} />
                        <AirConditionsItem label={'UV Index'} value={uv} icon={faSun} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AirConditions;