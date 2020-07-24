import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import Routes from './Routes';

export default function Providers(){
    return(
        <PaperProvider>
            <Routes/>
        </PaperProvider>
    );
}

// PaperProvider component provides the theme to all components in the framework