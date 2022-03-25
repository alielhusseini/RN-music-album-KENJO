import React, { createContext, FC, PropsWithChildren, useCallback, useReducer, useState } from "react";
import { IMusic, TabType } from "./MusicProvider.types";
import { CRUD } from "./constants";
import { handleCreate, handleDelete, handleRead, handleReadAll, handleUpdate } from "./reducerHandlersFunctions";

// this is the initial state
export const musicInitState = {
    Albums: [{
        title: '',
        artistId: '',
        coverUrl: '',
        year: 0,
        genre: ''
    }],
    Artists: [{
        name: '',
        photoUrl: '',
        deathDate: '',
        birthdate: ''
    }],
}

const reducerHandlers = {
    [CRUD.CREATE]: handleCreate,
    [CRUD.READ]: handleRead,
    [CRUD.READALL]: handleReadAll,
    [CRUD.UPDATE]: handleUpdate,
    [CRUD.DELETE]: handleDelete,
}

// this is the reducer function that the useReducer will disptach
const reducer = (state: IMusic['state'] = musicInitState, { type, payload }: { type: string, payload: any }) => {
    const handler = reducerHandlers[type]
    if (handler === undefined) return state;
    return handler(state, payload)
}

// creating a music context with initial state
export const MusicContext = createContext<IMusic>({
    state: musicInitState,
    dispatch: () => musicInitState,
    activeTab: 'Albums',
    switchTab: (tab) => { },
})

// creating a music provider (the useContext of the music context is in the hooks directory where I create custom hooks there)
export const MusicContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, musicInitState);
    const [activeTab, setActiveTab] = useState<TabType>('Albums')

    const switchTab = useCallback((tab: TabType) => {
        setActiveTab(tab)
    }, [setActiveTab])

    return <MusicContext.Provider value={{ state, dispatch, switchTab, activeTab }
    }>{children}</MusicContext.Provider>
}