const products= [
    {
        id:1,
        name: 'Gloomhaven',
        img:'https://m.media-amazon.com/images/I/81crhhZd63L._AC_SL1500_.jpg'
    },
    {
        id:2,
        name:'Imperial Assault',
        img:'https://m.media-amazon.com/images/I/71i0LkDfcRL._AC_SL1000_.jpg'
    }
]

export const getProducts = () =>{
    return new Promise (resolve => {
        setTimeout(()=>{
            resolve(products)
        },2000)
    })
}