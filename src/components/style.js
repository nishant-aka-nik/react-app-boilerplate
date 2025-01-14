export const parentBox = {
    display: 'flex',
    flexDirection: 'column', // default to vertical on small screens
    gap: '16px', // space between child boxes
    padding: '16px',
    flexWrap: 'wrap', // allows wrapping on smaller screens
    border: '1px solid #ccc', // solid border with a defined color
    width: '100%',
    '@media (min-width:600px)': {
        flexDirection: 'row', // switch to horizontal on larger screens
        justifyContent: 'space-between', // evenly distribute space on large screens
    },
};

export const childBox = {
    padding: '16px',
    backgroundColor: '#dfeef5',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    flex: '1 1 100%', // default to taking full width on small screens
    '@media (min-width:600px)': {
        flex: '1 1 30%', // take up 30% of width on large screens
    },
};