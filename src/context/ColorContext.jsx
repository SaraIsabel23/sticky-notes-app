import { createContext, useState } from 'react';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
    const [color, setColor] = useState("#ffff88");

    return (
        <ColorContext.Provider value={{ color, setColor}}>
            {children}
        </ColorContext.Provider>
    );
};

