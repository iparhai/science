import React from 'react';
// const [hint, setHint] = React.useState({});
const GlobalState = React.createContext([{}, () => {}]);

export default GlobalState;