import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTheme } from '@mui/material/styles';
import ChatFilter from '../ChatFilter/ChatFilter.jsx';
import HistoryCard from '../HistoryCard/HistoryCard.jsx';

const HistoryView = ({ onNavigate, onOpenConversation }) => {
    const theme = useTheme();
    const [conversations, setConversations] = useState([]);
    const [filteredConversations, setFilteredConversations] = useState([]);
    const [filterRating, setFilterRating] = useState('All Ratings');

    useEffect(() => {
        const storedConversations = JSON.parse(localStorage.getItem('conversations') || '[]');
        const sortedConversations = storedConversations.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        setConversations(sortedConversations);
        setFilteredConversations(sortedConversations);
    }, []);

    useEffect(() => {
        if (filterRating === 'All Ratings') {
            setFilteredConversations(conversations);
        } else {
            const filtered = conversations.filter(conv => conv.overallRating === parseInt(filterRating));
            setFilteredConversations(filtered);
        }
    }, [filterRating, conversations]);

    return (
        <Box sx={(theme) => ({
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            bgcolor: theme.palette.background.default,
            p: { xs: 2, md: 4 }
        })}>
            <Stack direction="row" alignItems="center" mb={3} spacing={2}>
                <IconButton onClick={() => onNavigate('chat')} sx={{ display: { xs: 'inline-flex', md: 'none' } }}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h5" sx={{ fontWeight: 700, color: theme.palette.text.primary, flexGrow: 1 }}>
                    Conversation History
                </Typography>
            </Stack>

            <ChatFilter onFilterChange={setFilterRating} />

            <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                <Stack spacing={2}>
                    {filteredConversations.length > 0 ? (
                        filteredConversations.map(conv => (
                            <HistoryCard key={conv.id} conversation={conv} onSelectConversation={onOpenConversation} />
                        ))
                    ) : (
                        <Typography variant="body1" sx={{ color: theme.palette.text.secondary, textAlign: 'center', mt: 4 }}>
                            No conversations found.
                        </Typography>
                    )}
                </Stack>
            </Box>
        </Box>
    );
};

export default HistoryView;
