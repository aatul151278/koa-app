import { createApi } from 'unsplash-js'
import fetch from 'node-fetch';
let unsplashServerApi = null;

export const initService = async () => {
    unsplashServerApi = createApi({
        accessKey: process.env.UNSPLASH_ACCESSKEY,
        fetch: fetch
    });
}

export const getSliderImages = async () => {
    //from list fixed 3 photos
    const resListPhoto = await unsplashServerApi.photos.list({ page: 1, perPage: 3 }).catch((err) => { return { status: 500 } })
    if (resListPhoto.status === 200) {
        return resListPhoto.response.results
    }

    //IF any error from api then send this fixed image
    return [
        {
            urls: { full: "https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80" },
            description: 'Stripy Zig Zag Jigsaw Pillow and Duvet Set'
        },
        {
            urls: { full: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80" },
            description: 'Real Bamboo Wall Clock'
        },
        {
            urls: { full: "https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80" },
            description: 'Brown and blue hardbound book'
        }
    ];
};



export const getProductsWithImages = async () => {
    //from list fixed 8 photos
    const resListProducts = await unsplashServerApi.search.getPhotos({ query: 'toy products', page: 1, perPage: 8,orientation:'squarish' }).catch((err) => { return { status: 500 } })
    if (resListProducts.status === 200) {
        resListProducts.response.results.forEach(element => {
            element["price"] = (Math.random() * 99).toFixed(2);
        });
        return resListProducts.response.results
    }

    //IF any error from api then send this fixed image
    return [
        {
            urls: { full: "https://images.unsplash.com/photo-1501686637-b7aa9c48a882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTIwMzh8MHwxfHNlYXJjaHw4fHx0b3klMjBwcm9kdWN0c3xlbnwwfHx8fDE2NzY3MjIxODY&ixlib=rb-4.0.3&q=80&w=400" },
            description: 'Baby building stack of blocks',
            price:58
        },
        {
            urls: { full: "https://images.unsplash.com/photo-1485460535564-844461f37f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTIwMzh8MHwxfHNlYXJjaHw3fHx0b3klMjBwcm9kdWN0c3xlbnwwfHx8fDE2NzY3MjIxODY&ixlib=rb-4.0.3&q=80&w=400" },
            description: 'Toddler with wire bead toy',
            price:18
        },
        {
            urls: { full: "https://images.unsplash.com/photo-1505692069463-edfaea445fcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTIwMzh8MHwxfHNlYXJjaHw2fHx0b3klMjBwcm9kdWN0c3xlbnwwfHx8fDE2NzY3MjIxODY&ixlib=rb-4.0.3&q=80&w=400" },
            description: 'child plating on carpet',
            price:28
        },
        {
            urls: { full: "https://images.unsplash.com/photo-1504484656217-38f8ffc617f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTIwMzh8MHwxfHNlYXJjaHw1fHx0b3klMjBwcm9kdWN0c3xlbnwwfHx8fDE2NzY3MjIxODY&ixlib=rb-4.0.3&q=80&w=400" },
            description: 'Birthday Present',
            price:84
        },
        {
            urls: { full: "https://images.unsplash.com/photo-1509512693283-8178ed23e04c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTIwMzh8MHwxfHNlYXJjaHw0fHx0b3klMjBwcm9kdWN0c3xlbnwwfHx8fDE2NzY3MjIxODY&ixlib=rb-4.0.3&q=80&w=400" },
            description: 'The Muppets Kermit plush toy on gray sofa',
            price:38
        },
        {
            urls: { full: "https://images.unsplash.com/photo-1556229174-5e42a09e45af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTIwMzh8MHwxfHNlYXJjaHwzfHx0b3klMjBwcm9kdWN0c3xlbnwwfHx8fDE2NzY3MjIxODY&ixlib=rb-4.0.3&q=80&w=400" },
            description: 'long-coated brown puppy',
            price:99
        },
        {
            urls: { full: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTIwMzh8MHwxfHNlYXJjaHwyfHx0b3klMjBwcm9kdWN0c3xlbnwwfHx8fDE2NzY3MjIxODY&ixlib=rb-4.0.3&q=80&w=400" },
            description: 'charming girl',
            price:52
        },
        {
            urls: { full: "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTIwMzh8MHwxfHNlYXJjaHwxfHx0b3klMjBwcm9kdWN0c3xlbnwwfHx8fDE2NzY3MjIxODY&ixlib=rb-4.0.3&q=80&w=400" },
            description: 'Young boy stacks funny animal comic cardboard boxes. Early childhood motor skills.',
            price:72
        }
    ];
};

