import React from 'react'
import {
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/i3.jpg';
import imgDetail2 from '../assets/i2.jpg';
import imgDetail3 from '../assets/i51.jpg';

const GetStarted = () => {

    const CustomGridItem = styled(Grid)({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })

    const CustomTypography = styled(Typography)({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (

        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}
            sx={{
                py: 10,
                px: 2,
            }}
        >
            <CustomGridItem item xs={12} sm={8} md={6}
                component='section'
            >
                <Box component='article'
                    sx={{
                        px: 4,
                    }}
                >
                    <Title
                        text={
                            "Effective Communication between Farmers And Exporters"
                        }
                        textAlign={'start'}
                    />
                    <CustomTypography>
                        We facilitate direct communication between farmers and exporters, eliminating intermediaries for transparent and efficient interactions.
                        Cut costs and maximize profits by bypassing unnecessary intermediaries.
                    </CustomTypography>
                </Box>
            </CustomGridItem>

            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt=""
                    style={{
                        width: '100%',
                    }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail2} alt=""
                    style={{
                        width: "100%",
                    }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
                component='section'
            >
                <Box component='article'
                    sx={{
                        px: 4,
                    }}
                >
                    <Title
                        text={
                            'Advanced ML Models for Enhanced Farming'
                        }
                        textAlign={'start'}
                    />
                    <CustomTypography>
                        We leverage cutting-edge machine learning technology to empower farmers with two powerful models: Leaf Disease Detection and Crop Suggestion.
                    </CustomTypography>
                    <ul>
                        <li>The Leaf Disease Detection model is a Convolutional Neural Network (CNN) model that accurately identifies and classifies various crop diseases using state-of-the-art deep learning techniques.</li>
                        <li>The Crop Suggestion model analyzes factors like soil type and climate conditions to provide personalized crop recommendations.</li>
                    </ul>
                </Box>
            </CustomGridItem>

            

            <CustomGridItem item xs={12} sm={8} md={6}
                component='section'
            >
                <Box component='article'
                    sx={{
                        px: 4,
                    }}
                >
                    <Title
                        text={
                            "Government Schemes and News"
                        }
                        textAlign={'start'}
                    />
                    <CustomTypography>
                        Stay informed about the latest government schemes and news related to agriculture. Our platform provides up-to-date information to help farmers make informed decisions and take advantage of available opportunities.
                    </CustomTypography>
                </Box>
            </CustomGridItem>

            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail3} alt=""
                    style={{
                        width: "100%",
                    }}
                />
            </Grid>

        </Grid>
    )
}

export default GetStarted;
