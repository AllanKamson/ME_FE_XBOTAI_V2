// import React, { useState } from 'react';
// import { ThemeProvider } from '@mui/material/styles';
// import { Box, Button, Stack } from '@mui/material';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import HistoryIcon from '@mui/icons-material/History';
// import theme from './components/Theme/Theme.js';
// import initialAiData from './aiData/sampleData.json';
// import ChatView from './components/ChatView/ChatView.jsx';
// import HistoryView from './components/HistoryView/HistoryView.jsx';
// import botImg from"./assets/newchat.png";
// import "./App.css";
// import edit from "./assets/edit.png";

// const App = () => {
//     const [currentPage, setCurrentPage] = useState('chat');

//     const [currentConversation, setCurrentConversation] = useState({
//         id: null,
//         messages: [],
//         overallRating: 0,
//         subjectiveFeedback: '',
//         status: 'new',
//     });

//     const handleNavigate = (page) => {
//         setCurrentPage(page);
//     };

//     const handleOpenConversation = (conversation) => {
//         setCurrentConversation(conversation);
//         setCurrentPage('chat');
//     };


//     return (
//         <ThemeProvider theme={theme}>
//             <Box sx={(theme) => ({
//                 display: 'flex',
//                 minHeight: '100vh',
//                 flexDirection: { xs: 'column', lg: 'row' }
//             })}>
//                 <Box
//                     sx={(theme) => ({
//                         width: { xs: '100%', lg: '250px' },
//                         bgcolor: theme.palette.background.paper,
//                         p: 2,
//                         boxShadow: 3,
//                         borderRight: { xs: 'none', lg: `1px solid ${theme.palette.divider}` },
//                         borderBottom: { xs: `1px solid ${theme.palette.divider}`, lg: 'none' },
//                         display: 'flex',
//                         flexDirection: { xs: 'row', lg: 'column' },
//                         alignItems: { xs: 'center', lg: 'flex-start' },
//                         justifyContent: { xs: 'space-between', lg: 'flex-start' },
//                     })}
//                 >
//                     <Stack
//                         direction="row"
//                         alignItems="center"
//                         spacing={1}
//                         sx={{
//                             width: '100%',
//                             justifyContent: { xs: 'flex-start', lg: 'flex-start' },
//                             mb: { xs: 0, lg: 4 },
//                             py: { xs: 1, lg: 0 },
//                             pr: { xs: 2, lg: 0 }
//                         }}
//                     >
                        
//                         <Button
//                             variant="contained"
//                             onClick={() => {
//                                 setCurrentConversation({ id: null, messages: [], overallRating: 0, subjectiveFeedback: '', status: 'new' });
//                                 handleNavigate('chat');
//                             }}
//                             sx={{
//                                 py: { xs: 1, md: 1.5 },
//                                 px: { xs: 2, md: 3 },
//                                 fontSize: { xs: '0.8rem', md: '1rem' },
//                                 whiteSpace: 'nowrap',
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 gap: 1,
//                                 width: { xs: 'auto', lg: '100%' }
//                             }}
//                         >
//                             <img
//                             src= {botImg}
//                             alt="Bot AI Icon"
//                             sx={{ borderRadius: '10%', width: 2, height: 2 }}
//                             /> New Chat
                            
//                         </Button>
//                         <img
//                             src= {edit}
//                             alt="Edit Icon"
//                             sx={{ borderRadius: '10%', width: 2, height: 2 }}
//                             />
//                     </Stack>

//                     <Stack
//                         direction={{ xs: 'row', lg: 'column' }}
//                         spacing={{ xs: 1, lg: 2 }}
//                         sx={{
//                             mt: { xs: 0, lg: 0 },
//                             width: { xs: 'auto', lg: '100%' },
//                             flexGrow: { xs: 1, lg: 0 },
//                             justifyContent: { xs: 'flex-end', lg: 'flex-start' }
//                         }}
//                     >
//                         {/* <Button
//                             variant="contained"
//                             onClick={() => {
//                                 setCurrentConversation({ id: null, messages: [], overallRating: 0, subjectiveFeedback: '', status: 'new' });
//                                 handleNavigate('chat');
//                             }}
//                             sx={{
//                                 py: { xs: 1, md: 1.5 },
//                                 px: { xs: 2, md: 3 },
//                                 fontSize: { xs: '0.8rem', md: '1rem' },
//                                 whiteSpace: 'nowrap',
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 gap: 1,
//                                 width: { xs: 'auto', lg: '100%' }
//                             }}
//                         >
//                             <ChatBubbleOutlineIcon sx={{ fontSize: { xs: 18, md: 20 } }} /> New Chat
//                         </Button> */}
//                         <Button
//                             variant="outlined"
//                             onClick={() => handleNavigate('history')}
//                             sx={(theme) => ({
//                                 py: { xs: 1, md: 1.5 },
//                                 px: { xs: 2, md: 3 },
//                                 fontSize: { xs: '0.8rem', md: '1rem' },
//                                 whiteSpace: 'nowrap',
//                                 color: theme.palette.text.primary,
//                                 borderColor: theme.palette.divider,
//                                 '&:hover': {
//                                     borderColor: theme.palette.primary.main,
//                                     bgcolor: theme.palette.primary.light + '10',
//                                 },
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 gap: 1,
//                                 width: { xs: 'auto', lg: '100%' }
//                             })}
//                         >
//                             <HistoryIcon sx={{ fontSize: { xs: 18, md: 20 } }} /> Past Conversations
//                         </Button>
//                     </Stack>
//                 </Box>

//                 <Box sx={(theme) => ({
//                     flexGrow: 1,
//                     display: 'flex',
//                     flexDirection: 'column'
//                 })}>
//                     {currentPage === 'chat' && (
//                         <ChatView
//                             aiData={initialAiData}
//                             currentConversation={currentConversation}
//                             setCurrentConversation={setCurrentConversation}
//                             onNavigate={handleNavigate}
//                         />
//                     )}
//                     {currentPage === 'history' && (
//                         <HistoryView
//                             onNavigate={handleNavigate}
//                             onOpenConversation={handleOpenConversation}
//                         />
//                     )}
//                 </Box>
//             </Box>
//         </ThemeProvider>
//     );
// };

// export default App;



import React, { useState } from 'react';
import { ThemeProvider, createTheme, IconButton, useMediaQuery } from '@mui/material';
import { Box, Button, Stack, Typography, Drawer, IconButton as MuiIconButton } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import theme from './components/Theme/Theme.jsx';
import initialAiData from './aiData/sampleData.json';
import ChatView from './components/ChatView/ChatView.jsx';
import HistoryView from './components/HistoryView/HistoryView.jsx';
import botImg from "./assets/newchat.png";
import edit from "./assets/edit.png";

const App = () => {
    const [currentPage, setCurrentPage] = useState('chat');
    const [mode, setMode] = useState('dark');
    const appTheme = createTheme(theme(mode));
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMediaQuery(appTheme.breakpoints.down('lg'));

    const [currentConversation, setCurrentConversation] = useState({
        id: null,
        messages: [],
        overallRating: 0,
        subjectiveFeedback: '',
        status: 'new',
    });

    const handleNavigate = (page) => {
        setCurrentPage(page);
        if (isMobile) {
            setMobileOpen(false);
        }
    };

    const handleOpenConversation = (conversation) => {
        setCurrentConversation(conversation);
        setCurrentPage('chat');
        if (isMobile) {
            setMobileOpen(false);
        }
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleNewChat = () => {
        setCurrentConversation({ id: null, messages: [], overallRating: 0, subjectiveFeedback: '', status: 'new' });
        handleNavigate('chat');
    };

    const sidebarContent = (
        <Box
            sx={(theme) => ({
                width: { xs: '100%', lg: '250px' },
                height: '100%',
                bgcolor: theme.palette.primary.light,
                p: 2,
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                flexShrink: 0,
            })}
        >
            {isMobile && (
                <MuiIconButton
                    onClick={handleDrawerToggle}
                    sx={{
                        alignSelf: 'flex-end',
                        color: appTheme.palette.text.primary,
                        mb: 2,
                    }}
                >
                    <CloseIcon />
                </MuiIconButton>
            )}

            <Button
                variant="contained"
                onClick={handleNewChat} 
                sx={(theme) => ({
                    py: { xs: 1, md: 1.5 },
                    px: { xs: 2, md: 3 },
                    fontSize: { xs: '0.8rem', md: '1rem' },
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    width: '100%',
                    mb: 2,
                    justifyContent: 'flex-start',
                    color: theme.palette.text.primary,
                    bgcolor: theme.palette.primary.main,
                    borderColor: theme.palette.primary.light,
                    '&:hover': {
                        bgcolor: theme.palette.primary.dark,
                        borderColor: theme.palette.primary.dark,
                    },
                })}
            >
                <Box
                    component="img"
                    src={botImg}
                    alt="New Chat Icon"
                    sx={{ height: 24, width: 24, borderRadius: '20%', flexShrink: 0 }} 
                />
                <Typography variant="button" sx={{ color: 'inherit', ml: 1, flexGrow: 1, textAlign: 'left' }}>
                    New Chat
                </Typography>
                <Box
                    component="img"
                    src={edit}
                    alt="Edit Icon"
                    sx={{ height: 24, width: 24, borderColor: '#9785BA', borderRadius: '10%', flexShrink: 0 }} 
                />
            </Button>

            <Button
                variant="outlined"
                onClick={() => handleNavigate('history')}
                sx={(theme) => ({
                    py: { xs: 1, md: 1.5 },
                    px: { xs: 2, md: 3 },
                    fontSize: { xs: '0.8rem', md: '1rem' },
                    whiteSpace: 'nowrap',
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.text.primary,
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    width: '100%',
                    justifyContent: 'flex-start',
                })}
            >
                <HistoryIcon sx={{ fontSize: { xs: 18, md: 20 } }} />
                <Typography variant="button" sx={{ color: 'inherit', ml: 1 }}>
                    Past Conversations
                </Typography>
            </Button>
        </Box>
    );

    return (
        <ThemeProvider theme={appTheme}>
            <Box sx={(theme) => ({
                display: 'flex',
                minHeight: '100vh',
                flexDirection: { xs: 'column', lg: 'row' },
                bgcolor: theme.palette.primary.light,
            })}>
                {/* Mobile Drawer (Sidebar) */}
                {isMobile ? (
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 }, 
                        }}
                    >
                        {sidebarContent}
                    </Drawer>
                ) : (
                    // Permanent Sidebar for larger screens
                    <Box sx={(theme) => ({
                        width: '250px',
                        flexShrink: 0,
                        bgcolor: theme.palette.primary.main,
                        boxShadow: 3,
                    })}>
                        {sidebarContent}
                    </Box>
                )}

                {/* Main Content Area */}
                <Box sx={(theme) => ({
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: theme.palette.background.default, 
                })}>
                    {/* Header for Chat View (Bot AI Title and Mobile Menu Icon) */}
                    <Box
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            bgcolor: theme.palette.primary.light,
                            p: { xs: 2, md: 3 },
                            boxShadow: '0px 2px 5px rgba(0,0,0,0.05)',
                            flexShrink: 0,
                            gap: 1,
                        })}
                    >
                        {isMobile && (
                            <MuiIconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={(theme) => ({ mr: 2, display: { lg: 'none' }, color: theme.palette.text.primary })}
                            >
                                <MenuIcon />
                            </MuiIconButton>
                        )}
                        <Stack direction="row" alignItems="left" spacing={1}>
                            <Typography variant="h1" sx={(theme) => ({ fontWeight: 500, color: theme.palette.text.primary })}>
                                Bot AI
                            </Typography>
                        </Stack>
                        <Stack
                          direction={'row'}
                          spacing={0.2}
                          alignItems={'center'}
                        >
                        <Typography
                            textTransform={'capitalize'}
                            fontSize={14}
                            sx={(theme) => ({ color: theme.palette.text.primary })}
                        >
                            {mode}
                        </Typography>
                        <IconButton onClick={() =>
                            setMode(prev => {
                                if (prev == 'light') {
                                    return 'dark'
                                }
                                else {
                                    return 'light'
                                }
                            })
                        }>
                            {mode == "light"
                                ? (
                                    <Brightness4Icon />
                                )
                                : (
                                    <Brightness7Icon />
                                )
                            }
                        </IconButton>
                    </Stack>
                    </Box>

                    {currentPage === 'chat' && (
                        <ChatView
                            aiData={initialAiData}
                            currentConversation={currentConversation}
                            setCurrentConversation={setCurrentConversation}
                            onNavigate={handleNavigate}
                            themeMode={mode}
                        />
                    )}
                    {currentPage === 'history' && (
                        <HistoryView
                            onNavigate={handleNavigate}
                            onOpenConversation={handleOpenConversation}
                            themeMode={mode}
                        />
                    )}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default App;
