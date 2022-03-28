export interface IData {
    'Albums': IAlbum[]
    'Artists': IArtist[]
}

interface IMongo {
    _id: string
    _createdAt?: string
    _updatedAt?: string
}

export interface IAlbum extends IMongo {
    "title": string
    "artistId": string
    "coverUrl": string
    "year": number,
    "genre": string
}

export interface IArtist extends IMongo {
    "name": string,
    "photoUrl": string,
    "birthdate": string,
    "deathDate"?: string | null
}