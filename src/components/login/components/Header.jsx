import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
// import { Link } from 'react-router-dom'
//img
import { useNavigate, Link } from 'react-router-dom';
import headerImg from '../assets/i1.jpg';

const Header = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/register');
    };

    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: '#14a44d',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box)(({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));

    const NavigationLinks = styled(Box)(({ theme }) => ({
        display: 'flex',
        gap: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(3),
        right: theme.spacing(3),
        color: '#fff',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    }));

    const NavLink = styled(Link)(({ theme }) => ({
        textDecoration: 'none',
        color: '#fff',
        '&:hover': {
            textDecoration: 'underline',
            color: '#fff',
        },
    }));

    return (

        <CustomBox component='header'>

            {/*  Box text  */}
            <BoxText
                component='section'
                style={{marginTop:"180px"}}
            >
                <Typography
                    variant='h2'
                    component='h1'
                    sx={{
                        fontWeight: 700,
                        color: '#fff',
                    }}
                >
                    Farmer's Portal
                </Typography>

                <Typography
                    variant='p'
                    component='p'
                    sx={{
                        py: 3,
                        lineHeight: 1.6,
                        color: '#fff',
                    }}
                >
                    Our aim is to bridge the gap between farmers and exporters by providing a seamless platform for effective communication and collaboration. Using our portal, farmers can connect directly with exporters, streamlining the process of getting their high-quality products to global markets.
                </Typography>

                <Box>
                    <Button
                        variant='contained'
                        sx={{
                            mr: 2,
                            px: 4,
                            py: 1,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 0,
                            borderColor: '#14192d',
                            color: '#fff',
                            backgroundColor: '#14192d',
                            "&&:hover": {
                                backgroundColor: "#343a55"
                            },
                            "&&:focus": {
                                backgroundColor: "#343a55"
                            }
                        }}
                        onClick={handleGetStarted}
                    >
                        get started
                    </Button>

                </Box>

            </BoxText>
            <NavigationLinks>
                <NavLink to='/' sx={{ textDecoration: 'none' }}>
                    Home
                </NavLink>
                <NavLink to='/login' sx={{ textDecoration: 'none' }}>
                    Login
                </NavLink>
                <NavLink to='/register' sx={{ textDecoration: 'none' }}>
                    Register
                </NavLink>
            </NavigationLinks>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]: {
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]: {
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                <img
                    src={headerImg}
                    alt="headerImg"
                    style={{
                        width: "100%",
                        marginBottom: 35,
                        marginRight: 1000,
                    }}
                />
            </Box>

        </CustomBox>
    )
}

export default Header