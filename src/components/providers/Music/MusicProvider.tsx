import React, { createContext, FC, PropsWithChildren, useCallback, useEffect, useReducer, useState } from "react";
import { IMusic, TabType } from "./MusicProvider.types";
import { CRUD } from "./constants";
import { handleCreate, handleDelete, handleRead, handleReadAll, handleUpdate } from "./reducerHandlersFunctions";
import { getAlbums, getArtists } from "../../../api";

// this is the initial state
export const musicInitState = {
    Albums: [],
    Artists: [],
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
    isLoading: true,
    toggleLoading: (load) => { },
    isError: {
        error: false,
        asyncHandler: null
    },
    toggleTriggerFetch: () => { }
})

// creating a music provider (the useContext of the music context is in the hooks directory where I create custom hooks there)
export const MusicContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, musicInitState)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [activeTab, setActiveTab] = useState<TabType>('Albums')
    const [isError, setIsError] = useState<{ error: boolean, asyncHandler: null | (() => Promise<void>) }>({ error: false, asyncHandler: null })
    const [triggerFetch, setTriggerFetch] = useState<boolean>(false);

    const switchTab = useCallback((tab: TabType) => {
        setActiveTab(tab)
    }, [setActiveTab])

    const toggleLoading = useCallback((load: boolean) => {
        setIsLoading(load)
    }, [setIsLoading])

    const toggleTriggerFetch = useCallback(() => {
        setTriggerFetch(prevState => !prevState);
    }, [setTriggerFetch]);

    const fetch = async () => {
        setIsError({ error: false, asyncHandler: null })
        toggleLoading(true)

        try {
            let apiData = null

            if (activeTab === "Albums") apiData = await getAlbums()
            else apiData = await getArtists()

            const { data } = apiData
            dispatch({ type: CRUD.READALL, payload: { data, activeTab } })

        } catch (err: any) {
            setIsError({
                error: true,
                asyncHandler: fetch
            })
        } finally {
            toggleLoading(false)
        }
    }

    useEffect(() => {
        fetch()
    }, [activeTab, triggerFetch]);

    return <MusicContext.Provider value={{ state, dispatch, switchTab, activeTab, isLoading, toggleLoading, isError, toggleTriggerFetch }
    }>{children}</MusicContext.Provider>
}