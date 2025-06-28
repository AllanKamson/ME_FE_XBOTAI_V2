// import React, { useState } from 'react';
// import { Box, Typography, Stack, IconButton } from '@mui/material';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';
// import { useTheme } from '@mui/material/styles';
// import chatImg from "../../assets/newchat.png";
// import person from "../../assets/person.png";

// const formatDateTime = (timestamp) => {
//     const date = new Date(timestamp);
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     const yesterday = new Date(today);
//     yesterday.setDate(today.getDate() - 1);

//     const isToday = date.toDateString() === today.toDateString();
//     const isYesterday = date.toDateString() === yesterday.toDateString();

//     if (isToday) {
//         return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     } else if (isYesterday) {
//         return `Yesterday, ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
//     } else {
//         return date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
//     }
// };

// const ChatMessage = ({ message, isUser, onFeedback }) => {
//     const theme = useTheme();
//     const [hovered, setHovered] = useState(false);

//     const feedbackButtonsStyle = {
//         position: 'absolute',
//         right: -40,
//         top: '50%',
//         transform: 'translateY(-50%)',
//         opacity: hovered || message.liked || message.disliked ? 1 : 0,
//         transition: 'opacity 0.2s ease-in-out',
//         backgroundColor: 'rgba(255,255,255,0.9)',
//         borderRadius: '8px',
//         boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
//         padding: '2px',
//         display: 'flex',
//         alignItems: 'center',
//         zIndex: 1,
//     };

//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 justifyContent: 'flex-start',
//                 mb: 2,
//             }}
//         >
//             <Stack direction="row" spacing={1} alignItems="flex-start" sx={{ maxWidth: '70%' }}>
//                 <Box
//                     component="img"
//                     src={isUser ? {person} : {chatImg}}
//                     alt={isUser ? "User Avatar" : "Soul AI Avatar"}
//                     sx={{ borderRadius: '50%', width: 40, height: 40, flexShrink: 0, mt: 0.5 }}
//                 />

//                 <Box
//                     sx={{
//                         p: 2,
//                         borderRadius: '12px',
//                         borderBottomLeftRadius: isUser ? '12px' : '4px',
//                         borderBottomRightRadius: isUser ? '4px' : '12px',
//                         bgcolor: isUser ? theme.palette.primary.main : theme.palette.background.paper,
//                         color: isUser ? '#fff' : theme.palette.text.primary,
//                         boxShadow: 3,
//                         position: 'relative',
//                         wordBreak: 'break-word',
//                         minWidth: '80px',
//                     }}
//                     onMouseEnter={() => setHovered(true)}
//                     onMouseLeave={() => setHovered(false)}
//                 >
//                     <Typography variant="caption" sx={{
//                         fontWeight: 'bold',
//                         color: isUser ? 'rgba(255,255,255,0.9)' : theme.palette.primary.dark,
//                         mb: 0.5,
//                         display: 'block'
//                     }}>
//                         {isUser ? "You" : <span>Soul AI</span>}
//                     </Typography>
//                     <Typography variant="body1" component="p" sx={{ fontSize: { xs: 14, md: 16 } }}>
//                         {message.text}
//                     </Typography>
//                     <Typography
//                         variant="caption"
//                         display="block"
//                         sx={{
//                             mt: 1,
//                             color: isUser ? 'rgba(255,255,255,0.7)' : theme.palette.text.secondary,
//                             fontSize: { xs: 10, md: 12 },
//                             textAlign: 'right'
//                         }}
//                     >
//                         {formatDateTime(message.timestamp)}
//                     </Typography>

//                     {!isUser && (
//                         <Stack direction="row" spacing={0.5} sx={feedbackButtonsStyle}>
//                             <IconButton
//                                 size="small"
//                                 sx={{ color: message.liked ? theme.palette.primary.main : theme.palette.text.secondary }}
//                                 onClick={() => onFeedback(message.id, 'liked', !message.liked)}
//                             >
//                                 <ThumbUpIcon fontSize="small" />
//                             </IconButton>
//                             <IconButton
//                                 size="small"
//                                 sx={{ color: message.disliked ? theme.palette.secondary.main : theme.palette.text.secondary }}
//                                 onClick={() => onFeedback(message.id, 'disliked', !message.disliked)}
//                             >
//                                 <ThumbDownIcon fontSize="small" />
//                             </IconButton>
//                         </Stack>
//                     )}
//                 </Box>
//             </Stack>
//         </Box>
//     );
// };

// export default ChatMessage;



import React, { useState } from 'react';
import { Box, Typography, Stack, IconButton } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useTheme } from '@mui/material/styles';
import chatImg from "../../assets/newchat.png";
import person from "../../assets/person.png";

const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const isToday = date.toDateString() === today.toDateString();
    const isYesterday = date.toDateString() === yesterday.toDateString();

    if (isToday) {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (isYesterday) {
        return `Yesterday, ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else {
        return date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
    }
};

const ChatMessage = ({ message, isUser, onFeedback }) => {
    const theme = useTheme();
    const [hovered, setHovered] = useState(false);

    const feedbackButtonsStyle = {
        position: 'absolute',
        left: { xs: 70, sm: 70, md: 80, lg: 85 }, 
        bottom: 10,
        transform: 'translateY(0%)',
        opacity: hovered || message.liked || message.disliked ? 1 : 0,
        transition: 'opacity 0.2s ease-in-out',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
        padding: '2px',
        display: 'flex',
        alignItems: 'center',
        zIndex: 1,
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                mb: 2,
            }}
        >
            <Stack direction="row" spacing={1} alignItems="flex-start" sx={{ maxWidth: '70%' }}>
                <Box
                    component="img"
                    src={isUser ? {person} : {chatImg}}
                    alt={isUser ? "User Avatar" : "Soul AI Avatar"}
                    sx={{ borderRadius: '50%', width: 40, height: 40, flexShrink: 0, mt: 0.5 }}
                />

                <Box
                    sx={{
                        p: 2,
                        borderRadius: '12px',
                        borderBottomLeftRadius: isUser ? '12px' : '4px',
                        borderBottomRightRadius: isUser ? '4px' : '12px',
                        bgcolor: isUser ? theme.palette.background.paper : theme.palette.background.paper,
                        color: theme.palette.text.primary,
                        boxShadow: 3,
                        position: 'relative',
                        wordBreak: 'break-word',
                        minWidth: '80px',
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <Typography variant="caption" sx={{
                        fontSize: '15px',
                        fontWeight: 'bold',
                        color: theme.palette.text.secondary,
                        mb: 0.5,
                        display: 'block'
                    }}>
                        {isUser ? "You" : <span>Soul AI</span>}
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ fontSize: { xs: 14, md: 16 } }}>
                        {message.text}
                    </Typography>
                    <Typography
                        variant="caption"
                        display="block"
                        sx={{
                            mt: 1,
                            color: theme.palette.text.secondary,
                            fontSize: { xs: 10, md: 12 },
                            textAlign: 'left'
                        }}
                    >
                        {formatDateTime(message.timestamp)}
                    {!isUser && (
                        <Stack direction="row" spacing={0.5} sx={feedbackButtonsStyle}>
                            <IconButton
                                size="small"
                                sx={{ color: message.liked ? '#f5b554' : theme.palette.text.secondary }}
                                onClick={() => onFeedback(message.id, 'liked', !message.liked)}
                            >
                                <ThumbUpIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                                size="small"
                                sx={{ color: message.disliked ? '#f7c7c8' : theme.palette.text.secondary }}
                                onClick={() => onFeedback(message.id, 'disliked', !message.disliked)}
                            >
                                <ThumbDownIcon fontSize="small" />
                            </IconButton>
                        </Stack>
                    )}
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
};

export default ChatMessage;
