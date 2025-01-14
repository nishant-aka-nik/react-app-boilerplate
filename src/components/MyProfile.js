import React, { useContext } from 'react';
import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { ProfileContext } from '../contexts/ProfileContext';
import Divider from '@mui/joy/Divider';
import Logout from './Logout';



const MyProfile = () => {
    const { profile } = useContext(ProfileContext);

    const profileName = profile?.names?.[0]?.displayName || "Name not updated";
    const profileEmail = profile?.emailAddresses?.[0]?.value || "email not found";

    return (
        <Box component="section">
            <Grid container spacing={1} padding={1}>
                <Grid item xs={12} sm={6} md={4} >
                    <Divider>
                        Profile
                    </Divider>
                    <Card orientation="vertical" size="sm">
                        <Box>
                            <Typography level="title-lg">
                                {profileName}
                            </Typography>
                            <Typography level="body-md" color="text.secondary">
                                Email: {profileEmail}
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Card orientation="vertical" size="sm">
                        <Logout />
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MyProfile;