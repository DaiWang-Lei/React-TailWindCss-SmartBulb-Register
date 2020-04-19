import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';





export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <div  className='border-2 '>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className='w-full'
            >
                <BottomNavigationAction label="首页" icon={<HomeIcon />} />
                <BottomNavigationAction label="我的" icon={<AccountCircleSharpIcon />} />
            </BottomNavigation>
        </div>
    );
}
