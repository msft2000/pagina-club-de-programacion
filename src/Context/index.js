import React from 'react';
const GlobalContext = React.createContext();
function GlobalProvider (props) {
    const [showModal,setShowModal] = React.useState(false);
    return(
        <GlobalContext.Provider value={{
            showModal,
            setShowModal
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}export { GlobalContext,GlobalProvider }