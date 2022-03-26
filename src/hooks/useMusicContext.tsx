import React, { useContext } from 'react'
import { MusicContext } from '../components/providers'

export function useMusicContext() {
    const { state, dispatch, switchTab, activeTab, isLoading, toggleLoading, isError } = useContext(MusicContext)
    return { state, dispatch, switchTab, activeTab, isLoading, toggleLoading, isError }
}