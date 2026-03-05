"use client";

import React, { createContext, useState, ReactNode, useMemo, useContext } from "react";




interface IjssalonContextValue {
  selection: (type: string) => Item[] | null;
  setSelection: (type: string) => React.Dispatch<React.SetStateAction<Item[] | any[]>> | null;
}

interface ProviderProps {
  children: ReactNode;
}

export interface Item {
    id: string;
    title: string;
    description: string;
    img: string;
    korting: string;
}

export const IjssalonContext = createContext<IjssalonContextValue | undefined>(
    undefined
);

export const IjssalonContextProvider: React.FC<ProviderProps> = ({
    children,
}) => {
    const [ ice, setIce ] = useState<Item[]>([
    ]);

    const [ frisdranken, setFrisdranken ] = useState<Item[]>([
    ]);

    const [ hoorntjes, setHoorntjes ] = useState<Item[]>([
    ]);

    const [ strooisels, setStrooisels ] = useState<Item[] | any[]>([
        {
            id: "Strawberry",
            title:"Strawberry",
            description: "van dit strooisel raak je niet aan de schijt",
            img: "/ice_cream/ice_placeholder.jpg",
            korting: "none",
        },
        {
            id: "Chocolate",
            title:"Chocolate",
            description: "van dit strooisel raak je niet aan de schijt",
            img: "/ice_cream/ice_placeholder.jpg",
            korting: "none",
        },
        {
            id: "Banana",
            title:"Banana",
            description: "van dit strooisel raak je niet aan de schijt",
            img: "/ice_cream/ice_placeholder.jpg",
            korting: "none",
        },
        {
            id: "Vanilla",
            title:"Vanilla",
            description: "van dit strooisel raak je niet aan de schijt",
            img: "/ice_cream/ice_placeholder.jpg",
            korting: "none",
        },
    ]);

    const selection = useMemo(
        () => (type: string) => {
            switch (type) {
                case "ice":
                    return ice;
                case "frisdranken":
                    return frisdranken;
                case "hoorntjes":
                    return hoorntjes;
                case "strooisels":
                    return strooisels;
                default:
                    return null;
            }
        },
        [ice, frisdranken, hoorntjes, strooisels]
    );

    const setSelection = useMemo(
        () => (type: string) => {
            switch (type) {
                case "ice":
                    return setIce;
                case "frisdranken":
                    return setFrisdranken;
                case "hoorntjes":
                    return setHoorntjes;
                case "strooisels":
                    return setStrooisels;
                default:
                    return null;
            }
        },
        []
    );

    return (
        <IjssalonContext.Provider value={{ selection, setSelection }}>
            {children}
        </IjssalonContext.Provider>
    );
};

export const useIjssalonContext = (): IjssalonContextValue => {
    const context = useContext(IjssalonContext);
    if (!context) {
        throw new Error(
            "useIjssalonContext must be used within an IjssalonContextProvider"
        );
    }
    return context;
};