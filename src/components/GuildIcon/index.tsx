import React from 'react';
import {Image} from 'react-native';

import { styles } from './styles';

export function GuildIcon(){
const uri = 'https://logopng.net/wp-content/uploads/2020/07/logo-discord-png-icon.png'

    return(
        <Image 
            source={{uri}}
            style={styles.image}
            resizeMode="cover"
        />
    )
}