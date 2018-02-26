import React from 'react';
import { StackNavigator } from 'react-navigation';

import Play from './app/Components/Play';
import Settings from './app/Components/Settings';
import About from './app/Components/About';
import Main from './app/Components/Main';

const App = StackNavigator({
    Main: { screen: Main},
    Play: { screen: Play},
    Settings: {screen: Settings},
    About: {screen: About},
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})

export default App;
