import { useState, useEffect } from 'react';


function useWindowTitle(windowTitle = '') {
    const [screen, setScreen] = useState(windowTitle)
    //useEffect to update window title after component mounted into dom
    useEffect(() => {
        document.title = screen;
    })
    //return object, so that caller can use this api
    return {
        screen,
        setScreen
    };
}

export { useWindowTitle };