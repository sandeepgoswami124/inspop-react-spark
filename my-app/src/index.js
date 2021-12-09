/** @jsxImportSource theme-ui */

import { ThemeProvider, Box, Grid } from 'theme-ui'

import React from 'react';
import ReactDOM from 'react-dom'

//theme syntax 
export const theme = {
    fonts: {
        body: 'system-ui, sans-serif',
        heading: '"Avenir Next", sans-serif',
        monospace: 'Menlo, monospace',
    },
    colors: {
        text: '#000',
        background: 'green',
        primary: '#33e',
    },
}
export const App = () => (
    <ThemeProvider theme={theme}>
        <h1
            sx={{
                color: 'primary',
                backgroundColor: 'background',
                fontFamily: 'body',
            }}>
            Hello
        </h1>
        <Box p={4} color="white" bg="primary">
            Beep
        </Box>
        <hr/>
        <Grid width={[128, null, 192]}>
            <Box bg="primary">Box</Box>
            <Box bg="muted">Box</Box>
            <Box bg="primary">Box</Box>
            <Box bg="muted">Box</Box>
        </Grid>
    </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))