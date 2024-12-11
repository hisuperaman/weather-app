import { faCloud, faCloudSunRain, faList, faMap, faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Logo({onClick}) {
    return (
        <div onClick={onClick} className="cursor-pointer hover:brightness-110 w-full aspect-square dark:text-dark-text text-light-text bg-light-logo dark:bg-dark-logo rounded-small p-small flex justify-center items-center">
            <FontAwesomeIcon icon={faCloud} size='xl' />
        </div>
    )
}

function MenuItem({label, icon, isActive}) {
    return (
        <div className={`flex flex-col gap-1 items-center cursor-pointer ${isActive ? 'dark:text-dark-textActive text-light-textActive' : 'dark:hover:text-dark-textActive hover:text-light-textActive'}`}>
            <FontAwesomeIcon icon={icon} size='lg' />
            <div>
                {label}
            </div>
        </div>
    )
}

function MenuBar({toggleDarkMode}) {
    return (
        <div className="hidden select-none sm:flex dark:bg-dark-primary bg-light-primary min-h-full gap-12 w-22 rounded-medium p-small flex flex-col">
            <Logo onClick={toggleDarkMode} />
            
            <div className="flex flex-col gap-8">
                <MenuItem label={'Weather'} icon={faCloudSunRain} isActive={true} />
                <MenuItem label={'Cities'} icon={faList} />
                <MenuItem label={'Map'} icon={faMap} />
                <MenuItem label={'Settings'} icon={faSliders} />
            </div>
        </div>
    )
}

export default MenuBar;