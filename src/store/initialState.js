const defaultState = {
    apparels: [
        {
            image:
                'http://cdn.aboutstatic.com/file/56755a972fefe61b91380e94df8481e8?quality=90&progressive=1&bg=ffffff&width=600&height=600',
            desc: "Shirt 'The Perfect Tee Large Batwing'",
            brand: "LEVI'S",
            gender: 'F',
            price: '15.00',
            rating: '4.5',
            id: 0,
            isOnWishList: true,
            isNew: true,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/1acf75d87950ff7616fb57f04ca030e0?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            desc: "T-Shirt 'GRAPHIC JV'",
            brand: "LEVI'S",
            gender: 'F',
            price: '12.00',
            rating: '1.5',
            id: 1,
        },
        {
            image:
                'http://cdn.aboutstatic.com/file/b17549cb41781fb3f6edce17c4178aa8?quality=90&progressive=1&bg=ffffff&width=600&height=600',
            desc: "Sweatshirt 'JORART BRIGHT LOGO SWEAT HOOD'",
            brand: 'JACK & JONES',
            gender: 'M',
            price: '31.59',
            rating: '3.5',
            id: 2,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/a96a60d9fc45bd4cb2c0048ccd93afb8?quality=90&progressive=1&bg=ffffff&width=600&height=600',
            desc: "Tracksuit 'TRACK SUIT FLEECE GX JDI'",
            brand: 'Nike Sportswear',
            gender: 'M',
            price: '59.99',
            rating: '5',
            id: 3,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/7cd62a1b5b1873f83e7aad07c7d2c014?&bg=ffffff&width=600&height=600',
            desc: 'Transition jacket with stand-up collar',
            brand: 'Naketano',
            gender: 'M',
            price: '49.59',
            rating: '3',
            id: 4,
            isNew: true,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/5264afdfc2c629bf975485e50d1fb5cb?quality=90&progressive=1&bg=ffffff&width=600&height=600',
            desc: "T-Shirt 'Trouserpuper'",
            brand: 'Naketano',
            gender: 'M',
            price: '12.99',
            rating: '2.3',
            id: 5,
            isOnWishList: true,
            isNew: true,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/5ae3864235345e59577d9f8743b22008?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            desc: "Coat 'onlSOHO LINK'",
            brand: 'ONLY',
            gender: 'F',
            price: '29.99',
            rating: '3.4',
            id: 6,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/0f7eceee7fa33c1de4418cc8b4fc3a36?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            desc: 'T-Shirt',
            brand: 'ONLY',
            gender: 'F',
            price: '16.99',
            rating: '2.3',
            id: 7,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/cc91cf483670eaa2ddf31a03f0e42692?quality=90&progressive=1&bg=ffffff&width=600&height=600',
            desc: "Cocktail dress 'Nordi'",
            brand: 'TNFC',
            gender: 'F',
            price: '69.90',
            rating: '4',
            id: 8,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/157c623291e88603b6bbdf6092dbc07f?quality=90&progressive=1&bg=ffffff&width=600&height=600',
            desc: 'coverall',
            brand: 'Rick Cardona by heine',
            gender: 'F',
            price: '49.99',
            rating: '5',
            id: 9,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/d8a34de416ad1d0422523675928cc651?quality=90&progressive=1&bg=ffffff&width=600&height=600',
            desc: "T-Shirt 'AILA'",
            brand: 'TOMMY HILFIGER',
            gender: 'F',
            price: '29.90',
            rating: '2.2',
            id: 10,
            isNew: true,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/a2656ec005f640b6fef6783d6fe9babb?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            desc: 'Print dress with sequins',
            brand: 'Linea Tesini by heine',
            gender: 'F',
            price: '39.99',
            rating: '5',
            id: 11,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/0936d34433e67694d68c87db5eec4959?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            desc: "Dress 'Vanessa'",
            brand: 'VERO MODA',
            gender: 'F',
            price: '89.99',
            rating: '2',
            id: 12,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/35ed1127e5cbe2585fa5e5f842279665?quality=90&progressive=1&brightness=0.95&bg=f2f2f2&width=600&height=600',
            desc: 'In the mood for nude',
            brand: 'Natural styles with bareMinerals®',
            gender: 'F',
            price: '74.90',
            rating: '3.5',
            id: 13,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/f52e559caee31dc1cb105b96bce97d78?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            desc: "Shirt 'JJVSHERidAN SHIRT L / S WESTERN NOOS'",
            brand: 'JACK & JONES',
            gender: 'M',
            price: '29.90',
            rating: '1',
            id: 14,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/bcb28c0f7ab18c2362ff4da8ebed4c23?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            desc: "Shirt 'SPORTSWEAR LOGOGRAPH IC84SPORTSWEARL'",
            brand: "LEVI'S",
            gender: 'M',
            price: '29.90',
            rating: '1.5',
            id: 15,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/f52cbebf36a9056de476935cb0e7b90f?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            desc: "Shirt 'DESTROY SHIRT'",
            brand: 'Review',
            gender: 'M',
            price: '25.90',
            rating: '1.2',
            id: 16,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/54df2510391e4e701977c8d42efd9ef0?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            desc: "Denim shirt 'WESTERN LIGHT INDIGO'",
            brand: 'GAP',
            gender: 'M',
            price: '39.90',
            rating: '2.7',
            id: 17,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/12bade479b7eb32636ca884d14f444a9?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            desc: "T-Shirt 'TIMBALL 2 REGULAR VN TEA SS'",
            brand: 'Calvin Klein jeans',
            gender: 'M',
            price: '29.90',
            rating: '4.2',
            id: 18,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/a70d4ac8289072500596491601412860?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            brand: "LEVI'S",
            desc: "Denim shirt 'Barstow Western'",
            price: '69.9',
            gender: 'M',
            rating: '3',
            id: 19,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/89e25435d5be6ed80b3a0bc03246bcb1?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            brand: "LEVI'S",
            desc: "Denim shirt 'Barstow Western'",
            price: '70.0',
            gender: 'M',
            rating: '3',
            id: 20,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/05fb95e85fa7564ef35da986876b0f8e?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            brand: 'ESPRIT',
            desc: "Shirt 'light wght dnm'",
            price: '23.9',
            gender: 'M',
            rating: '3.4',
            id: 21,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/08f1086fa999e787a5ccfb7e8b84f82c?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            brand: 'Nike Sportswear',
            desc: "T-Shirt 'M NSW GFX LOGO TRI TEE 90'S'",
            price: '16.9',
            gender: 'M',
            rating: '5',
            id: 22,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/56b6303e21a90ad7e962c2fd3884984a?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            brand: 'THE NORTH FACE',
            desc: "Printshirt 'Easy'",
            price: '29.9',
            gender: 'M',
            rating: '1',
            id: 23,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/e34479869e1352ea8bb30201e2fe040d?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            brand: 'Patrizia Dini by heine',
            desc: 'Jersey dress',
            price: '20.0',
            gender: 'F',
            rating: '2',
            id: 24,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/9b3d7f729b55d6f10c51f890731e6552?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            brand: 'Boohoo',
            desc: 'Sheath',
            price: '21.17',
            gender: 'F',
            rating: '2.9',
            id: 25,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/29ad6e574b40b0574d493da16652abe2?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            brand: 'ONLY',
            desc: "Dress 'CAROLINE'",
            price: '29.67',
            gender: 'F',
            rating: '4.2',
            id: 26,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/e7ef54f67c6d9c4c9f863ed30a921da7?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            brand: 'ONLY',
            desc: "Dress 'Onlmariana'",
            price: '26.9',
            gender: 'F',
            rating: '4',
            id: 27,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/c95bf34a2c0fb4d4ad04728f4a297652?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            brand: 'Ragwear',
            desc: 'dress',
            price: '47.9',
            gender: 'F',
            rating: '4.8',
            id: 28,
            isNew: true,
        },
        {
            image:
                'https://cdn.aboutstatic.com/file/805443100a7a9a51329b046a47e90db0?quality=90&progressive=1&bg=f2f2f2&width=600&height=600',
            brand: 'ONLY',
            desc: "Dress 'DAPHNE'",
            price: '21.51',
            gender: 'F',
            rating: '5',
            id: 29,
        },
    ],
};

export const getInitialState = () => {
    const prevState = sessionStorage.getItem('ay-data');
    if (prevState) {
        return { apparels: JSON.parse(prevState) };
    }
    return defaultState;
};
