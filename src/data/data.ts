import { IData } from './data.types'

// minimum: 1909 - 01 - 01T00: 00: 00.000Z
// maximum: 2030 - 12 - 31T00: 00: 00.000Z

// data sample
export const data: IData = {
    Albums: [{
        '_id': '6240820d1b48f5001a19ff78',
        "title": "Awaken",
        "artistId": "6240820d1b48f5001a19ff78",
        "coverUrl": "https://zephyrcreates.com/wp-content/uploads/2019/06/music-covers-WEB-zephyr-02.jpg",
        "year": 1996,
        "genre": "Rock",
    },],
    Artists: [{
        "_id": "6240820d1b48f5001a19ff78",
        "name": "Adele",
        "photoUrl": "https://static.stereogum.com/uploads/2021/11/adele-spotify-1637505279.jpeg",
        "birthdate": "1999-01-10T00:00:00.000Z",
        "deathDate": null,
    },
    {
        "_id": "623f50df5a5d8e001b3e0cbd",
        "name": "Eminem",
        "photoUrl": "https://www.biography.com/.image/t_share/MTQ3NjM5MTEzMTc5MjEwODI2/eminem_photo_by_dave_j_hogan_getty_images_entertainment_getty_187596325.jpg",
        "birthdate": "1972-10-17T00:00:00.000Z",
        "deathDate": null,
    },]
}