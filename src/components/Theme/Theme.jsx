// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//     palette: {
//                 primary: {
//                     main: '#D7C7F4',
//                     light: '#fafafa',
//                     dark: '#AF9FCD',

//                 },
//                 text: {
//                     primary: '#000000',
//                     secondary: 'rgba(0,0,0,0.5)',
//                 },
//                 background: {
//                     default: '#fafafa',
//                     bgtheme: '#FAF7FF',
//                     purple: '#AF9FCD'
//                 }
//             },
//     typography: {
//         body1: {
//             fontFamily: 'Open Sans, sans-serif'
//         },
//         h1: {
//             fontFamily: 'Ubuntu, sans-serif',
//             color: '#9785BA',
//             fontSize: 12,
//             fontWeight: 500,
//         },
//         h2: {
//             fontFamily: 'Ubuntu, sans-serif',
//             color: 'text.primary',
//             fontSize: 28,
//             fontWeight: 500,
//             '@media (max-width:600px)': {
//                 fontSize: 22,
//             },
//         },
//         heading: {
//             fontFamily: 'Ubuntu, sans-serif',
//         }
//     },
//     components: {
//         MuiButton: {
//             defaultProps: {
//                 disableElevation: true,
//                 size: 'large'
//             },
//             styleOverrides: {
//                 root: {
//                     textTransform: 'none',
//                     fontFamily: 'Open Sans, sans-serif'
//                 },
//                 contained: {
//                     fontFamily: 'Ubuntu, sans-serif',
//                     border: 1,
//                 },
//                 outlined: {
//                     fontFamily: 'Ubuntu, sans-serif',
//                     color: '#000',
//                     borderColor: '#9785BA',
//                     '&:hover': {
//                         background: '#AF9FCD',
//                     }
//                 }
//             }
//         }
//     },
//     breakpoints: {
//         values: {
//             xs: 0,
//             sm: 600,
//             md: 900,
//             lg: 1200,
//             xl: 1536,
//         },
//     },
// });

// export default theme;



import { createTheme } from '@mui/material/styles';

export const theme = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: '#D7C7F4',
                    light: '#FAF7FF',
                    dark: '#AF9FCD',
                    bglight: '#fafafa',
                    bgtheme: '#FAF7FF',
                    bg: '#AF9FCD'
                },
                text: {
                    primary: '#9975BA',
                    secondary: 'rgba(0,0,0,0.5)',
                },
                background: {
                    default: '#FAF7FF',
                    paper: '#fff',
                },
                divider: 'rgba(0,0,0,0.12)',
            }
            : {
                primary: {
                    main: '#34303d',
                    light: '#3d3b41',
                    dark: '#2a2730',
                    bglight: '#212025',
                    bgtheme: '#212025',
                    bg: '#2a2730'
                },
                text: {
                    primary: '#ffffff',
                    secondary: 'rgba(255,255,255,0.7)',
                },
                background: {
                    default: '#212025',
                    paper: '#2a2730',
                },
                divider: 'rgba(255,255,255,0.12)',
            }
        )
    },
    typography: {
        body1: {
            fontFamily: 'Open Sans, sans-serif'
        },
        h1: {
            fontFamily: 'Ubuntu, sans-serif',
            color: mode === 'light' ? '#9785BA' : '#D7C7F4',
            fontSize: 28,
            fontWeight: 700,
        },
        h2: {
            fontFamily: 'Ubuntu, sans-serif',
            color: 'text.primary',
            fontSize: 28,
            fontWeight: 500,
            '@media (max-width:600px)': {
                fontSize: 22,
            },
        },
        heading: { // Custom variant
            fontFamily: 'Ubuntu, sans-serif',
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                size: 'large'
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontFamily: 'Open Sans, sans-serif',
                    borderRadius: '8px', 
                    boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
                },
                contained: {
                    fontFamily: 'Ubuntu, sans-serif',
                    border: '1px solid',
                    borderColor: mode === 'light' ? '#D7C7F4' : '#3d3b41',
                    background: mode === 'light' ? '#D7C7F4' : '#34303d',
                    color: mode === 'light' ? '#000000' : '#ffffff',
                    '&:hover': {
                        background: mode === 'light' ? '#AF9FCD' : '#2a2730',
                        borderColor: mode === 'light' ? '#AF9FCD' : '#2a2730',
                        boxShadow: '0px 4px 8px rgba(0,0,0,0.3)',
                    },
                },
                outlined: {
                    fontFamily: 'Ubuntu, sans-serif',
                    color: mode === 'light' ? '#000' : '#fff',
                    borderColor: mode === 'light' ? '#9785BA' : '#3d3b41',
                    '&:hover': {
                        background: mode === 'light' ? '#AF9FCD' : '#2a2730',
                        borderColor: mode === 'light' ? '#AF9FCD' : '#2a2730',
                    }
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        backgroundColor: mode === 'light' ? '#fafafa' : '#424242',
                        color: mode === 'light' ? '#000000' : '#e0e0e0',
                        '& fieldset': {
                            borderColor: mode === 'light' ? 'rgba(0,0,0,0.23)' : '#616161',
                        },
                        '&:hover fieldset': {
                            borderColor: mode === 'light' ? 'rgba(0,0,0,0.87)' : '#9e9e9e',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: mode === 'light' ? '#D7C7F4' : '#4c59f9',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: mode === 'light' ? 'rgba(0,0,0,0.6)' : '#bdbdbd',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                rounded: {
                    borderRadius: '12px',
                },
            },
        },
        MuiRating: {
            styleOverrides: {
                iconFilled: {
                    color: '#f5b554',
                },
                iconEmpty: {
                    color: mode === 'light' ? '#ccc' : '#757575', 
                },
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default theme;
