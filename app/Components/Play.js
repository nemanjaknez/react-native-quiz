import React from 'react';
import { StackNavigator } from 'react-navigation';

import QuizzesMenu from './Quizzes/QuizzesMenu';
import Sport from './Quizzes/Sport';
import Istorija from './Quizzes/History';
import Geografija from './Quizzes/Geography';
import Film from './Quizzes/Movie';

const Play = StackNavigator({
    QuizzesMenu: { screen: QuizzesMenu},
    Geografija: { screen: Geografija},
    Istorija: { screen: Istorija},
    Sport: { screen: Sport},
    Film: { screen: Film},
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})

export default Play;
