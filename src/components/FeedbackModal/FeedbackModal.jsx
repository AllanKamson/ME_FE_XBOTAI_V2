// import React, { useState, useEffect } from 'react';
// import { Modal, Box, Typography, Rating, TextField, Button, Stack, IconButton } from '@mui/material';
// import StarIcon from '@mui/icons-material/Star';
// import CloseIcon from '@mui/icons-material/Close';
// import { useTheme } from '@mui/material/styles';

// const FeedbackModal = ({ open, onClose, onSaveFeedback, conversationRating, conversationFeedback }) => {
//     const theme = useTheme();
//     const [rating, setRating] = useState(conversationRating || 0);
//     const [subjectiveFeedback, setSubjectiveFeedback] = useState(conversationFeedback || '');

//     useEffect(() => {
//         if (open) {
//             setRating(conversationRating || 0);
//             setSubjectiveFeedback(conversationFeedback || '');
//         }
//     }, [open, conversationRating, conversationFeedback]);


//     const handleSubmit = () => {
//         onSaveFeedback(rating, subjectiveFeedback);
//         onClose();
//     };

//     return (
//         <Modal open={open} onClose={onClose}>
//             <Box
//                 sx={{
//                     position: 'absolute',
//                     top: '50%',
//                     left: '50%',
//                     transform: 'translate(-50%, -50%)',
//                     width: { xs: '90%', sm: 450, md: 500 },
//                     bgcolor: theme.palette.background.paper,
//                     borderRadius: '12px',
//                     boxShadow: 24,
//                     p: { xs: 3, md: 4 },
//                 }}
//             >
//                 <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
//                     <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
//                         Provide Additional Feedback
//                     </Typography>
//                     <IconButton onClick={onClose} size="small">
//                         <CloseIcon />
//                     </IconButton>
//                 </Stack>
//                 <Typography variant="subtitle1" mb={1}>
//                     Rate this conversation:
//                 </Typography>
//                 <Rating
//                     name="conversation-rating"
//                     value={rating}
//                     onChange={(event, newValue) => {
//                         setRating(newValue);
//                     }}
//                     emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
//                     sx={{ mb: 2 }}
//                     size="large"
//                 />
//                 <TextField
//                     label="Subjective Feedback"
//                     multiline
//                     rows={4}
//                     fullWidth
//                     value={subjectiveFeedback}
//                     onChange={(e) => setSubjectiveFeedback(e.target.value)}
//                     placeholder="Tell us what you think..."
//                     sx={{ mb: 3 }}
//                 />
//                 <Button variant="contained" fullWidth onClick={handleSubmit} disabled={rating === 0}>
//                     Submit Feedback
//                 </Button>
//             </Box>
//         </Modal>
//     );
// };

// export default FeedbackModal;



import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, Rating, TextField, Button, Stack, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';

const FeedbackModal = ({ open, onClose, onSaveFeedback, conversationRating, conversationFeedback }) => {
    const theme = useTheme();
    const [rating, setRating] = useState(conversationRating || 0);
    const [subjectiveFeedback, setSubjectiveFeedback] = useState(conversationFeedback || '');

    useEffect(() => {
        if (open) {
            setRating(conversationRating || 0);
            setSubjectiveFeedback(conversationFeedback || '');
        }
    }, [open, conversationRating, conversationFeedback]);


    const handleSubmit = () => {
        onSaveFeedback(rating, subjectiveFeedback);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '90%', sm: 450, md: 500 },
                    bgcolor: theme.palette.background.paper,
                    borderRadius: '12px',
                    boxShadow: 24,
                    p: { xs: 3, md: 4 },
                }}
            >
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
                        Provide Additional Feedback
                    </Typography>
                    <IconButton onClick={onClose} size="small" sx={{ color: theme.palette.text.secondary }}>
                        <CloseIcon />
                    </IconButton>
                </Stack>
                <Typography variant="subtitle1" mb={1} sx={{ color: theme.palette.text.secondary }}>
                    Rate this conversation:
                </Typography>
                <Rating
                    name="conversation-rating"
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    sx={{ mb: 2 }}
                    size="large"
                />
                <TextField
                    label="Subjective Feedback"
                    multiline
                    rows={4}
                    fullWidth
                    value={subjectiveFeedback}
                    onChange={(e) => setSubjectiveFeedback(e.target.value)}
                    placeholder="Tell us what you think..."
                    sx={{ mb: 3 }}
                />
                <Button variant="contained" fullWidth onClick={handleSubmit} disabled={rating === 0}>
                    Submit Feedback
                </Button>
            </Box>
        </Modal>
    );
};

export default FeedbackModal;
