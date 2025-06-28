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
                    main: '#D7C7F4', // Light purple
                    light: '#FAF7FF', // White
                    dark: '#AF9FCD', // Darker light purple
                    bglight: '#fafafa', // Light background
                    bgtheme: '#FAF7FF', // Theme background
                    bg: '#AF9FCD' // Background color
                },
                text: {
                    primary: '#9975BA',
                    secondary: 'rgba(0,0,0,0.5)', // Semi-transparent black text
                },
                background: {
                    default: '#FAF7FF', // Light mode default background
                    paper: '#fff', // Light mode paper background
                },
                divider: 'rgba(0,0,0,0.12)', // Light mode divider
            }
            : {
                primary: {
                    main: '#34303d', // Dark primary
                    light: '#3d3b41', // Lighter dark primary
                    dark: '#2a2730', // Darker dark primary
                    bglight: '#212025', // Dark background light
                    bgtheme: '#212025', // Dark theme background
                    bg: '#2a2730' // Dark background
                },
                text: {
                    primary: '#ffffff',
                    secondary: 'rgba(255,255,255,0.7)', // Semi-transparent white text
                },
                background: {
                    default: '#212025', // Dark mode default background
                    paper: '#2a2730', // Dark mode paper background
                },
                divider: 'rgba(255,255,255,0.12)', // Dark mode divider
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
            color: 'text.primary', // This will be resolved by MUI based on palette.text.primary
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
                    borderRadius: '8px', // Added from previous theme, as it's a good default
                    boxShadow: '0px 2px 4px rgba(0,0,0,0.2)', // Added subtle shadow
                },
                contained: {
                    fontFamily: 'Ubuntu, sans-serif',
                    border: '1px solid', // Add border
                    borderColor: mode === 'light' ? '#D7C7F4' : '#3d3b41', // Dynamic border color
                    background: mode === 'light' ? '#D7C7F4' : '#34303d', // Dynamic background
                    color: mode === 'light' ? '#000000' : '#ffffff', // Dynamic text color
                    '&:hover': {
                        background: mode === 'light' ? '#AF9FCD' : '#2a2730', // Dynamic hover background
                        borderColor: mode === 'light' ? '#AF9FCD' : '#2a2730', // Dynamic hover border
                        boxShadow: '0px 4px 8px rgba(0,0,0,0.3)', // Stronger shadow on hover
                    },
                },
                outlined: {
                    fontFamily: 'Ubuntu, sans-serif',
                    color: mode === 'light' ? '#000' : '#fff', // Dynamic text color
                    borderColor: mode === 'light' ? '#9785BA' : '#3d3b41', // Dynamic border color
                    '&:hover': {
                        background: mode === 'light' ? '#AF9FCD' : '#2a2730', // Dynamic hover background
                        borderColor: mode === 'light' ? '#AF9FCD' : '#2a2730', // Dynamic hover border
                    }
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        backgroundColor: mode === 'light' ? '#fafafa' : '#424242', // Dynamic background color for input fields
                        color: mode === 'light' ? '#000000' : '#e0e0e0', // Dynamic text color for input
                        '& fieldset': {
                            borderColor: mode === 'light' ? 'rgba(0,0,0,0.23)' : '#616161', // Dynamic border for input
                        },
                        '&:hover fieldset': {
                            borderColor: mode === 'light' ? 'rgba(0,0,0,0.87)' : '#9e9e9e', // Dynamic lighter border on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: mode === 'light' ? '#D7C7F4' : '#9c27b0', // Dynamic primary color on focus
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: mode === 'light' ? 'rgba(0,0,0,0.6)' : '#bdbdbd', // Dynamic label color
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
                    color: '#00BF00',
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
