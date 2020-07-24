import React from 'react';
import {Stylesheet, Dimensions, Text} from 'react-native';
import {Button} from 'react-native-paper';

const {width, height} = Dimensions.get('screen');

export default function FormButton({title, modeValue, ...rest}){
    return(
        <Button
            mode={modeValue}
            {...rest}
            style={styles.button}
            contentStyle={styles.buttonContainer}
        >
            {title}
        </Button>
    );
}

const styles = Stylesheet.create({
    button:{
        marginTop: 10
    },
    buttonContainer:{
        width: width / 2,
        height: height / 15
    }
});