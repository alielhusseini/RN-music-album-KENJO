import axios from "axios";

const BASE_URL = 'http://localhost:3000/'

// no interceptors on
const API = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

// albums
interface IAlbum {
    title: string
    artistId: string
    coverUrl: string
    year: number
    genre: string
}
type AlbumType = Omit<IAlbum, '_id'>

export const getAlbums = () => API.get('albums/all')
export const getAlbum = ({ id, controller }: { id: string, controller: AbortController }) => API.get(`album/${id}`, { signal: controller.signal })
export const updateAlbum = ({ id, data }: { id: string, data: IAlbum }) => API.put(`album/${id}`, data)
export const deleteAlbum = ({ id }: { id: string }) => API.delete(`album/${id}`)
export const postAlbum = ({ data }: { data: AlbumType }) => API.post('album', data)

// artists
interface IArtist {
    name: string
    photoUrl: string
    birthdate: string
    deathDate?: string | null
}

type ArtistType = Omit<IArtist, '_id'>

export const getArtists = () => API.get('artists/all')
export const getArtist = ({ id, controller }: { id: string, controller: AbortController }) => API.get(`artist/${id}`, { signal: controller.signal })
export const updateArtist = ({ id, data }: { id: string, data: IArtist }) => API.put(`artist/${id}`, data)
export const deleteArtist = ({ id }: { id: string }) => API.delete(`artist/${id}`)
export const postArtist = ({ data }: { data: ArtistType }) => API.post('artist', data)
