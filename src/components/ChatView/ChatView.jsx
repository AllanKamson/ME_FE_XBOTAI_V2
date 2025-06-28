// import React, { useState, useEffect, useRef } from 'react';
// import { Box, Typography, Button, TextField, Stack } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import ChatMessage from '../ChatMessage/ChatMessage.jsx';
// import FeedbackModal from '../FeedbackModal/FeedbackModal.jsx';
// import aiImg from "../../assets/bot.png";

// const ChatView = ({ aiData, currentConversation, setCurrentConversation, onNavigate }) => {
//     const theme = useTheme();
//     const [input, setInput] = useState('');
//     const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
//     const messagesEndRef = useRef(null);

//     useEffect(() => {
//         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, [currentConversation.messages]);

//     const handleSendMessage = (questionText = input) => {
//         if (!questionText.trim()) return;

//         let updatedConversation = { ...currentConversation };
//         if (updatedConversation.status === 'new') {
//             updatedConversation = {
//                 id: crypto.randomUUID(),
//                 timestamp: new Date().toISOString(),
//                 messages: [],
//                 overallRating: 0,
//                 subjectiveFeedback: '',
//                 status: 'in-progress',
//             };
//         }

//         const newUserMessage = {
//             id: Date.now(),
//             type: 'user',
//             text: questionText,
//             timestamp: new Date().toISOString(),
//         };

//         updatedConversation.messages.push(newUserMessage);
//         setCurrentConversation(updatedConversation);

//         setInput('');

//         const foundItem = aiData.find(item =>
//             item.question.toLowerCase() === questionText.toLowerCase()
//         );

//         const aiResponseText = foundItem ? foundItem.response : "Sorry, Did not understand your query!";

//         const newAiMessage = {
//             id: Date.now() + 1,
//             type: 'ai',
//             text: aiResponseText,
//             timestamp: new Date().toISOString(),
//             liked: false,
//             disliked: false,
//         };

//         setTimeout(() => {
//             setCurrentConversation(prev => {
//                 const nextMessages = [...prev.messages, newAiMessage];
//                 return { ...prev, messages: nextMessages };
//             });
//         }, 500);
//     };

//     const handleAiFeedback = (messageId, feedbackType, value) => {
//         setCurrentConversation(prevConv => {
//             const updatedMessages = prevConv.messages.map(msg => {
//                 if (msg.id === messageId && msg.type === 'ai') {
//                     const newState = { ...msg, [feedbackType]: value };
//                     if (feedbackType === 'liked' && value) newState.disliked = false;
//                     if (feedbackType === 'disliked' && value) newState.liked = false;
//                     return newState;
//                 }
//                 return msg;
//             });
//             return { ...prevConv, messages: updatedMessages };
//         });
//     };

//     const handleSaveConversation = () => {
//         if (currentConversation.messages.length > 0 && currentConversation.status !== 'completed') {
//             setFeedbackModalOpen(true);
//         }
//     };

//     const handleSaveFeedback = (rating, subjectiveFeedback) => {
//         const conversations = JSON.parse(localStorage.getItem('conversations') || '[]');
//         let updatedConversations = [...conversations];
//         const conversationIndex = updatedConversations.findIndex(conv => conv.id === currentConversation.id);

//         const conversationToSave = {
//             ...currentConversation,
//             overallRating: rating,
//             subjectiveFeedback: subjectiveFeedback,
//             status: 'completed',
//         };

//         if (conversationIndex !== -1) {
//             updatedConversations[conversationIndex] = conversationToSave;
//         } else {
//             updatedConversations.push(conversationToSave);
//         }

//         localStorage.setItem('conversations', JSON.stringify(updatedConversations));
//         console.log("Conversation saved to localStorage!");

//         setCurrentConversation({ id: null, messages: [], overallRating: 0, subjectiveFeedback: '', status: 'new' });
//     };

//     const initialQuestions = ["Hi, what is the weather", "Hi, what is my location", "Hi, how are you", "Hi, what is the temperature"];
//     const initialCards = aiData.filter(item => initialQuestions.includes(item.question));

//     const showInitialPrompt = currentConversation.messages.length === 0 && currentConversation.status === 'new';

//     return (
//         <Box sx={(theme) => ({
//             flexGrow: 1,
//             display: 'flex',
//             flexDirection: 'column',
//             bgcolor: theme.palette.background.default,
//             position: 'relative'
//         })}>
//             <Box
//                 sx={(theme) => ({
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: { xs: 'center', md: 'flex-start' },
//                     bgcolor: theme.palette.background.default,
//                     p: { xs: 2, md: 3 },
//                     flexShrink: 0,
//                     gap: 1,
//                 })}
//             >
//                 <Typography variant="h4" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
//                     Bot AI
//                 </Typography>
//             </Box>

//             <Box sx={{ flexGrow: 1, overflowY: 'auto', p: { xs: 2, md: 3 }, pb: '100px' }}>
//                 {showInitialPrompt ? (
//                     <Box sx={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         minHeight: { xs: 'calc(100vh - 180px)', lg: 'calc(100vh - 120px - 70px)' },
//                         textAlign: 'center',
//                         px: { xs: 1, md: 0 }
//                     }}>
//                         <Typography variant="h4" sx={{ color: theme.palette.text.primary, mb: 3 }}>
//                             How Can I Help You Today?
//                         </Typography>
//                         <Box
//                             component="img"
//                             src={aiImg}
//                             alt="Soul AI Icon"
//                             sx={{
//                                 width: { xs: 50, md: 70 },
//                                 height: { xs: 50, md: 70 },
//                                 mb: 4,
//                                 borderRadius: '50%',
//                                 boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
//                             }}
//                         />
//                         <Box
//                             sx={{
//                                 display: 'grid',
//                                 gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
//                                 gap: 2,
//                                 width: '100%',
//                                 maxWidth: '900px',
//                             }}
//                         >
//                             {initialCards.length > 0 ? (
//                                 initialCards.map((item) => (
//                                     <Button
//                                         key={item.id}
//                                         onClick={() => handleSendMessage(item.question)}
//                                         sx={(theme) => ({
//                                             bgcolor: theme.palette.background.paper,
//                                             p: { xs: 2, md: 3 },
//                                             borderRadius: '12px',
//                                             boxShadow: 3,
//                                             display: 'flex',
//                                             flexDirection: 'column',
//                                             alignItems: 'flex-start',
//                                             textAlign: 'left',
//                                             textTransform: 'none',
//                                             transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
//                                             '&:hover': {
//                                                 transform: 'translateY(-5px)',
//                                                 boxShadow: 6,
//                                                 bgcolor: theme.palette.background.paper,
//                                             },
//                                         })}
//                                     >
//                                         <Typography variant="h6" sx={{ color: theme.palette.text.primary, mb: 1 }}>
//                                             {item.question}
//                                         </Typography>
//                                         <Typography variant="body2" sx={{ color: theme.palette.primary.light }}>
//                                             Get immediate AI generated response
//                                         </Typography>
//                                     </Button>
//                                 ))
//                             ) : (
//                                 <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
//                                     No initial questions found in AI data.
//                                 </Typography>
//                             )}
//                         </Box>
//                     </Box>
//                 ) : (
//                     <Box sx={{ pt: { xs: 1, md: 2 } }}>
//                         {currentConversation.messages.map((msg, index) => (
//                             <ChatMessage
//                                 key={index}
//                                 message={msg}
//                                 isUser={msg.type === 'user'}
//                                 onFeedback={handleAiFeedback}
//                             />
//                         ))}
//                         <div ref={messagesEndRef} />
//                     </Box>
//                 )}
//             </Box>

//             <Box
//                 sx={(theme) => ({
//                     height: "90px",
//                     position: 'absolute',
//                     bottom: 0,
//                     left: 0,
//                     right: 0,
//                     p: { xs: 2, md: 3, lg: 3 },
//                     bgcolor: theme.palette.background.default,
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: 2,
//                 })}
//             >
//                 <TextField
//                     fullWidth
//                     placeholder="Message Bot AI…"
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     onKeyPress={(e) => {
//                         if (e.key === 'Enter') {
//                             handleSendMessage();
//                         }
//                     }}
//                     sx={(theme) => ({
//                         '& .MuiOutlinedInput-root': {
//                             height: '50px',
//                             borderRadius: '8px',
//                             backgroundColor: theme.palette.background.default,
//                         },
//                     })}
//                     InputProps={{
//                         sx: { py: { xs: 0.5, md: 1 } }
//                     }}
//                 />
//                 <Button
//                     variant="contained"
//                     type="submit"
//                     onClick={() => handleSendMessage()}
//                     disabled={!input.trim()}
//                     sx={{
//                         px: { xs: 2, md: 3 },
//                         py: { xs: 1, md: 1.5 },
//                         fontSize: { xs: '0.8rem', md: '1rem' }
//                     }}
//                 >
//                     Ask
//                 </Button>
//                 <Button
//                     variant="outlined"
//                     type="button"
//                     onClick={handleSaveConversation}
//                     disabled={currentConversation.messages.length === 0 || currentConversation.status === 'completed'}
//                     sx={(theme) => ({
//                         px: { xs: 1, md: 2 },
//                         py: { xs: 1, md: 1.5 },
//                         fontSize: { xs: '0.8rem', md: '1rem' },
//                         color: theme.palette.text.primary,
//                         borderColor: theme.palette.divider,
//                         '&:hover': {
//                             borderColor: theme.palette.primary.main,
//                             bgcolor: theme.palette.primary.light + '10',
//                         },
//                     })}
//                 >
//                     Save
//                 </Button>
//             </Box>

//             <FeedbackModal
//                 open={feedbackModalOpen}
//                 onClose={() => setFeedbackModalOpen(false)}
//                 onSaveFeedback={handleSaveFeedback}
//                 conversationRating={currentConversation.overallRating}
//                 conversationFeedback={currentConversation.subjectiveFeedback}
//             />
//         </Box>
//     );
// };

// export default ChatView;


import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, TextField, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ChatMessage from '../ChatMessage/ChatMessage.jsx';
import FeedbackModal from '../FeedbackModal/FeedbackModal.jsx';
import aiImg from "../../assets/bot.png";

const ChatView = ({ aiData, currentConversation, setCurrentConversation, onNavigate }) => {
    const theme = useTheme();
    const [input, setInput] = useState('');
    const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [currentConversation.messages]);

    const handleSendMessage = (questionText = input) => {
        if (!questionText.trim()) return;

        let updatedConversation = { ...currentConversation };
        if (updatedConversation.status === 'new') {
            updatedConversation = {
                id: crypto.randomUUID(),
                timestamp: new Date().toISOString(),
                messages: [],
                overallRating: 0,
                subjectiveFeedback: '',
                status: 'in-progress',
            };
        }

        const newUserMessage = {
            id: Date.now(),
            type: 'user',
            text: questionText,
            timestamp: new Date().toISOString(),
        };

        updatedConversation.messages.push(newUserMessage);
        setCurrentConversation(updatedConversation);

        setInput('');

        const foundItem = aiData.find(item =>
            item.question.toLowerCase() === questionText.toLowerCase()
        );

        const aiResponseText = foundItem ? foundItem.response : "Sorry, Did not understand your query!";

        const newAiMessage = {
            id: Date.now() + 1,
            type: 'ai',
            text: aiResponseText,
            timestamp: new Date().toISOString(),
            liked: false,
            disliked: false,
        };

        setTimeout(() => {
            setCurrentConversation(prev => {
                const nextMessages = [...prev.messages, newAiMessage];
                return { ...prev, messages: nextMessages };
            });
        }, 500);
    };

    const handleAiFeedback = (messageId, feedbackType, value) => {
        setCurrentConversation(prevConv => {
            const updatedMessages = prevConv.messages.map(msg => {
                if (msg.id === messageId && msg.type === 'ai') {
                    const newState = { ...msg, [feedbackType]: value };
                    if (feedbackType === 'liked' && value) newState.disliked = false;
                    if (feedbackType === 'disliked' && value) newState.liked = false;
                    return newState;
                }
                return msg;
            });
            return { ...prevConv, messages: updatedMessages };
        });
    };

    const handleSaveConversation = () => {
        if (currentConversation.messages.length > 0 && currentConversation.status !== 'completed') {
            setFeedbackModalOpen(true);
        }
    };

    const handleSaveFeedback = (rating, subjectiveFeedback) => {
        const conversations = JSON.parse(localStorage.getItem('conversations') || '[]');
        let updatedConversations = [...conversations];
        const conversationIndex = updatedConversations.findIndex(conv => conv.id === currentConversation.id);

        const conversationToSave = {
            ...currentConversation,
            overallRating: rating,
            subjectiveFeedback: subjectiveFeedback,
            status: 'completed',
        };

        if (conversationIndex !== -1) {
            updatedConversations[conversationIndex] = conversationToSave;
        } else {
            updatedConversations.push(conversationToSave);
        }

        localStorage.setItem('conversations', JSON.stringify(updatedConversations));
        console.log("Conversation saved to localStorage!");

        setCurrentConversation({ id: null, messages: [], overallRating: 0, subjectiveFeedback: '', status: 'new' });
    };

    const initialQuestions = ["Hi, what is the weather", "Hi, what is my location", "Hi, how are you", "Hi, what is the temperature"];
    const initialCards = aiData.filter(item => initialQuestions.includes(item.question));

    const showInitialPrompt = currentConversation.messages.length === 0 && currentConversation.status === 'new';

    return (
        <Box sx={(theme) => ({
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            bgcolor: theme.palette.background.default, 
            position: 'relative'
        })}>
            <Box sx={{ flexGrow: 1, overflowY: 'auto', p: { xs: 2, md: 3 }, pb: '100px' }}>
                {showInitialPrompt ? (
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: { xs: 'calc(100vh - 180px)', lg: 'calc(100vh - 120px - 70px)' },
                        textAlign: 'center',
                        px: { xs: 1, md: 0 }
                    }}>
                        <Typography variant="h4" sx={{ color: theme.palette.text.primary, mb: 3 }}>
                            How Can I Help You Today?
                        </Typography>
                        <Box
                            component="img"
                            src={aiImg}
                            alt="Soul AI Icon"
                            sx={{
                                width: { xs: 80, md: 100 },
                                height: { xs: 80, md: 100 },
                                mb: 4,
                                borderRadius: '50%',
                                boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                                border: `3px thin ${theme.palette.primary.main}`
                            }}
                        />
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                                gap: 2,
                                width: '100%',
                                maxWidth: '900px',
                            }}
                        >
                            {initialCards.length > 0 ? (
                                initialCards.map((item) => (
                                    <Button
                                        key={item.id}
                                        onClick={() => handleSendMessage(item.question)}
                                        sx={(theme) => ({
                                            bgcolor: theme.palette.background.paper,
                                            p: { xs: 2, md: 3 },
                                            borderRadius: '12px',
                                            boxShadow: 3,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            textAlign: 'left',
                                            textTransform: 'none',
                                            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: 6,
                                                bgcolor: theme.palette.primary.bglight,
                                            },
                                        })}
                                    >
                                        <Typography variant="h6" sx={{ color: theme.palette.text.primary, mb: 1 }}>
                                            {item.question}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                            Get immediate AI generated response
                                        </Typography>
                                    </Button>
                                ))
                            ) : (
                                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                                    No initial questions found in AI data.
                                </Typography>
                            )}
                        </Box>
                    </Box>
                ) : (
                    <Box sx={{ pt: { xs: 1, md: 2 } }}>
                        {currentConversation.messages.map((msg, index) => (
                            <ChatMessage
                                key={index}
                                message={msg}
                                isUser={msg.type === 'user'}
                                onFeedback={handleAiFeedback}
                            />
                        ))}
                        <div ref={messagesEndRef} />
                    </Box>
                )}
            </Box>

            {/* Input Field and Buttons */}
            <Box
                sx={(theme) => ({
                    height: '90px',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: { xs: 2, md: 3 },
                    bgcolor: theme.palette.background.default,
                    boxShadow: '0px -2px 10px rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                })}
            >
                <TextField
                    fullWidth
                    placeholder="Message Bot AI…"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleSendMessage();
                        }
                    }}
                    sx={(theme) => ({
                        '& .MuiOutlinedInput-root': {
                            height: '50px',
                            borderRadius: '8px',
                            backgroundColor: theme.palette.background.paper,
                        },
                    })}
                    InputProps={{
                        sx: { py: { xs: 0.5, md: 1, lg: 1 } }
                    }}
                />
                <Button
                    variant="contained"
                    type="submit"
                    onClick={() => handleSendMessage()}
                    disabled={!input.trim()}
                    sx={{
                        px: { xs: 2, md: 3 },
                        py: { xs: 1, md: 1.5 },
                        fontSize: { xs: '0.8rem', md: '1rem' },
                        bgcolor: '#AF9FCD'
                    }}
                >
                    Ask
                </Button>
                <Button
                    variant="outlined"
                    type="button"
                    onClick={handleSaveConversation}
                    disabled={currentConversation.messages.length === 0 || currentConversation.status === 'completed'}
                    sx={(theme) => ({
                        px: { xs: 1, md: 2 },
                        py: { xs: 1, md: 1.5 },
                        fontSize: { xs: '0.8rem', md: '1rem' },
                        color: theme.palette.text.primary,
                        borderColor: theme.palette.divider,
                        // Removed explicit bgcolor and borderColor here as they are handled by MuiButton.outlined in theme.js
                    })}
                >
                    Save
                </Button>
            </Box>

            <FeedbackModal
                open={feedbackModalOpen}
                onClose={() => setFeedbackModalOpen(false)}
                onSaveFeedback={handleSaveFeedback}
                conversationRating={currentConversation.overallRating}
                conversationFeedback={currentConversation.subjectiveFeedback}
            />
        </Box>
    );
};

export default ChatView;
