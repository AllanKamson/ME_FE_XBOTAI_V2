// import { Outlet } from 'react-router-dom'
// import { ThemeContext } from './theme/ThemeContext';
// import { useState, useEffect } from 'react';
// import Sidebar from './components/Sidebar/Sidebar';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import { getThemePallete } from './theme/ThemePallete';
// import { Grid } from '@mui/material'

// function App() {

//   const [mode, setMode] = useState(localStorage.getItem('theme') || 'light')
//   const [chat, setChat] = useState([])
//   const [menuOpen, setMenuOpen] = useState(false)

//   //create theme
//   const theme = React.useMemo(() => createTheme(getThemePallete(mode)), [mode]);

//   //save theme mode in localstorage
//   useEffect(() => {

//     localStorage.setItem('theme', mode)

//   }, [mode])

//   return (
//     <ThemeContext.Provider value={{ mode: mode, setMode: setMode }}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />

//         <Grid container sx={{ width: '100%', background: 'linear-gradient(rgba(215, 199, 244, 0.2), rgba(151, 133, 186, 0.2))' }} >
//           <Grid
//             item xs={12}
//             md={3}
//             lg={2}
//             sx={{
//               bgcolor: 'primary.light',
//               '@media (max-width:900px)': {
//                 // width: '70%',
//                 // transform: menuOpen ? 'translateX(0)' : 'translateX(0)',
//                 transition: 'transform 400ms ease',
//               },
//             }}
//             // position={{ xs: 'fixed', md: 'relative' }}
//             height={'100vh'}
//             // zIndex={{ xs: 9999, md: 1 }}
//             boxShadow={{ xs: menuOpen ? 10 : 0, md: 0 }}
//           >
//             <Sidebar setChat={setChat} closeMenu={() => setMenuOpen(false)} />
//           </Grid>
//           <Grid item xs={12} md={9} lg={8}>
//             <Outlet context={{ chat: chat, setChat: setChat, handleMobileMenu: setMenuOpen }} />
//           </Grid>
//         </Grid>

//       </ThemeProvider>
//     </ThemeContext.Provider>
//   );
// }

// export default App;


import { Outlet } from 'react-router-dom'
import { ThemeContext } from './theme/ThemeContext';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { getThemePallete } from './theme/ThemePallete';
import { Grid, Box } from '@mui/material';

function App() {

  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light')
  const [chat, setChat] = useState([])
  const [menuOpen, setMenuOpen] = useState(false) 

  const theme = React.useMemo(() => createTheme(getThemePallete(mode)), [mode]);

  useEffect(() => {
    localStorage.setItem('theme', mode)
  }, [mode])

  return (
    <ThemeContext.Provider value={{ mode: mode, setMode: setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Grid
          container
          sx={{
            height: '100vh',
            background: 'linear-gradient(rgba(215, 199, 244, 0.2), rgba(151, 133, 186, 0.2))',
            display: 'flex', 
            flexDirection: 'row',
            flexWrap: 'nowrap',
          }}
        >
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              bgcolor: 'primary.light',
              height: '100vh',
              width: '30%',
              overflowY: 'auto',
              '@media (max-width:900px)': {
                position: 'fixed',
                width: '70%',
                transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 400ms ease',
                zIndex: 9999,
                boxShadow: menuOpen ? 10 : 0,
              },
            }}
          >
            <Sidebar setChat={setChat} closeMenu={() => setMenuOpen(false)} />
          </Grid>

          <Grid
            item
            xs={12}
            md={9}
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
            }}
          >
            <Outlet context={{ chat: chat, setChat: setChat, handleMobileMenu: setMenuOpen }} />
          </Grid>
        </Grid>

      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;