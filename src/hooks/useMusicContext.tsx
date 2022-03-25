import React, { useContext } from 'react'
import { MusicContext } from '../components/providers'

export function useMusicContext() {
    const { state, dispatch, switchTab, activeTab } = useContext(MusicContext)
    return { state, dispatch, switchTab, activeTab }
}