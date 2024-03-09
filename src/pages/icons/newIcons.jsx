// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

import React from 'react'


//import { FaBeer } from 'react-icons/fa';
import { RiNetflixFill } from "react-icons/ri";
import { SiPrimevideo } from "react-icons/si";
import { SiHulu } from "react-icons/si";
import { SiRakuten } from "react-icons/si";
import { TbBrandDisney } from "react-icons/tb";


const IconsTV = {
RiNetflixFill,
SiPrimevideo,
SiHulu,
SiRakuten,
TbBrandDisney,
}

const tvIcons = () => {

    const renderTVIcons = () => {
        return object.key(IconsTV).map(key => {
            const TvIcontag = IconsTV[key]

            return (
                <Grid item key={key}>
                    <Tooltip arrow title={key} placement='top'>
                    <Card>
                    <CardContent sx={{ display: 'flex' }}>
                        <TvIcontag />
                    </CardContent>
                    </Card>
                </Tooltip>

                </Grid>

            )

        })
    }

}


export default tvIcons;