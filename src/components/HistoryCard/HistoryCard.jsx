// import React from 'react';
// import { Box, Typography, Button, Stack, Rating } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

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

// const HistoryCard = ({ conversation, onSelectConversation }) => {
//     const theme = useTheme();
//     const title = conversation.messages.find(msg => msg.type === 'user')?.text || `Conversation on ${new Date(conversation.timestamp).toLocaleDateString()}`;

//     return (
//         <Button
//             onClick={() => onSelectConversation(conversation)}
//             sx={(theme) => ({
//                 bgcolor: theme.palette.background.paper,
//                 p: 2,
//                 borderRadius: '12px',
//                 boxShadow: 3,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'flex-start',
//                 textAlign: 'left',
//                 textTransform: 'none',
//                 width: '100%',
//                 '&:hover': {
//                     bgcolor: theme.palette.background.default,
//                     boxShadow: 6,
//                 },
//                 cursor: 'pointer',
//             })}
//         >
//             <Typography variant="body1" sx={{ fontWeight: 600, mb: 1, color: theme.palette.text.primary }}>
//                 {title}
//             </Typography>
//             <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
//                 {formatDateTime(conversation.timestamp)}
//             </Typography>
//             {conversation.overallRating > 0 && (
//                 <Stack direction="row" alignItems="center" spacing={0.5} mt={1}>
//                     <Rating name="read-only" value={conversation.overallRating} readOnly size="small" />
//                     <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
//                         ({conversation.overallRating} Stars)
//                     </Typography>
//                 </Stack>
//             )}
//             {conversation.subjectiveFeedback && (
//                 <Typography variant="body2" sx={{ mt: 1, color: theme.palette.text.secondary, fontStyle: 'italic' }}>
//                     "Feedback: {conversation.subjectiveFeedback}"
//                 </Typography>
//             )}
//         </Button>
//     );
// };

// export default HistoryCard;



import React from 'react';
import { Box, Typography, Button, Stack, Rating } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Utility function to format dates
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

const HistoryCard = ({ conversation, onSelectConversation }) => {
    const theme = useTheme();
    const title = conversation.messages.find(msg => msg.type === 'user')?.text || `Conversation on ${new Date(conversation.timestamp).toLocaleDateString()}`;

    return (
        <Button
            onClick={() => onSelectConversation(conversation)}
            sx={(theme) => ({
                bgcolor: theme.palette.background.paper,
                p: 2,
                borderRadius: '12px',
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left',
                textTransform: 'none',
                width: '100%',
                '&:hover': {
                    bgcolor: theme.palette.primary.bglight, // Using primary.bglight for hover background
                    boxShadow: 6,
                },
                cursor: 'pointer',
            })}
        >
            <Typography variant="body1" sx={{ fontWeight: 600, mb: 1, color: theme.palette.text.primary }}>
                {title}
            </Typography>
            <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                {formatDateTime(conversation.timestamp)}
            </Typography>
            {conversation.overallRating > 0 && (
                <Stack direction="row" alignItems="center" spacing={0.5} mt={1}>
                    <Rating name="read-only" value={conversation.overallRating} readOnly size="small" />
                    <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        ({conversation.overallRating} Stars)
                    </Typography>
                </Stack>
            )}
            {conversation.subjectiveFeedback && (
                <Typography variant="body2" sx={{ mt: 1, color: theme.palette.text.secondary, fontStyle: 'italic' }}>
                    "Feedback: {conversation.subjectiveFeedback}"
                </Typography>
            )}
        </Button>
    );
};

export default HistoryCard;
