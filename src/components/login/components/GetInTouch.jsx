import React from 'react';
import { Stack } from '@mui/material';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import Title from './Title';
import Paragraph from './Paragraph';
import a1 from '../assets/abhi.jpg';
import a2 from '../assets/jay.jpg';
import a3 from '../assets/dhruv.jpg';

const GetInTouch = () => {
    const teamMembers = [
        {
            name: 'Abhijeet Jagtap',
            phone: '+91 9765641672',
            email: 'aj2000cs@gmail.com',
            photo: a1, // Replace with the actual photo URL or import it
        },
        {
            name: 'Jay Sonawane',
            phone: '+91 7058542921',
            email: 'jaysonawane378@gmail.com',
            photo: a2, // Replace with the actual photo URL or import it
        },
        {
            name: 'Dhruv Jain',
            phone: '+91 9922761114',
            email: 'dhruvjain6467@gmail.com',
            photo: a3, // Replace with the actual photo URL or import it
        },
    ];

    return (
        <Stack
            component="section"
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
                py: 10,
                mx: 6,
            }}
        >
            <Title text={'Contact us'} textAlign={'center'} />
            <Paragraph
                text={
                    'Contact us for support and inquiries regarding our farmers portal. Explore features like farmer-exporter communication, advanced machine learning models, government scheme, and real-time news updates. Revolutionize your experience with us.'
                }
                maxWidth={'sm'}
                mx={0}
                textAlign={'center'}
            />
            <Grid container spacing={2}>
                {teamMembers.map((member, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Card sx={{ maxWidth: 500, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', bgcolor: '#e8f5e9' }}>
                            {/* <CardHeader title={member.name} /> */}
                            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '4cm', height: '4.5cm', marginRight: '1rem' }}>
                                    <img src={member.photo} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div>
                                    <Typography variant="body2" gutterBottom >
                                        Name: {member.name}
                                    </Typography>

                                    <Typography variant="body2" gutterBottom >
                                        Phone: {member.phone}
                                    </Typography>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography variant="body2" gutterBottom>
                                            Email: {member.email}
                                        </Typography>





                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};

export default GetInTouch;
