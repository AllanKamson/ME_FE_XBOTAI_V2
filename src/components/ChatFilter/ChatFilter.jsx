import React, { useState } from 'react';
import { Box, Typography, FormControl, Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ChatFilter = ({ onFilterChange }) => {
    const theme = useTheme();
    const [filterOption, setFilterOption] = useState('All Ratings');

    const handleChange = (event) => {
        setFilterOption(event.target.value);
        onFilterChange(event.target.value);
    };

    return (
        <Box mb={3} sx={{ width: { xs: '100%', md: '200px' } }}>
            <Typography variant="body2" sx={{ mb: 1, color: theme.palette.text.secondary }}>
                Filter by rating
            </Typography>
            <FormControl fullWidth size="small">
                <Select
                    value={filterOption}
                    onChange={handleChange}
                    sx={(theme) => ({
                        borderRadius: '8px',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.divider,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.main,
                        },
                        bgcolor: theme.palette.background.paper
                    })}
                >
                    <MenuItem value="All Ratings">All Ratings</MenuItem>
                    {[1, 2, 3, 4, 5].map(rating => (
                        <MenuItem key={rating} value={rating}>{rating} Star{rating > 1 ? 's' : ''}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default ChatFilter;
