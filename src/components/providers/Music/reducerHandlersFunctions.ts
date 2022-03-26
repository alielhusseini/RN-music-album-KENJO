import { IMusic, TabType } from "./MusicProvider.types"
import produce from "immer"
import { IAlbum, IArtist } from "../../../data/data.types"

export const handleReadAll = (state: IMusic['state'], payload: any) => {

    const { activeTab, data } = payload
    const activeTabAsKey = activeTab as TabType

    const newState = produce(state, draft => {

        const mappedData = data.map((item: (IAlbum | IArtist) & { __v: number, createdAt: string, _updatedAt: string }) => {
            const { __v, _createdAt, _updatedAt, ...rest } = item
            return rest
        })

        draft[activeTabAsKey] = mappedData
    });

    return newState
}

export const handleCreate = (state: IMusic['state'], payload: any) => { return state }

export const handleRead = (state: IMusic['state'], payload: any) => { return state }

export const handleUpdate = (state: IMusic['state'], payload: any) => { return state }

export const handleDelete = (state: IMusic['state'], payload: any) => { return state }