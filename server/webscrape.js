const rp = require("request-promise")
const $ = require("cheerio")
const url = "https://www.proflowers.com/blog/types-of-flowers"

// const flowers = function (url) {
//     return rp(url)
//         .then((html) => {
//             let flowers = []
//             let data = $(".col-sm-2", html)
//             for (let i = 0; i < data.length; i++) {
//                 // console.log(data[i].children[1].attribs['data-src'])
//                 // console.log(data[i].children[4].children[0].data)
//                 flowers.push({
//                     image: data[i].children[1].attribs["data-src"],
//                     name: data[i].children[4].children[0].data,
//                 })
//             }
//             // console.log(flowers)
//             return flowers
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }

let flowers = []

rp(url)
    .then((html) => {
        let data = $(".col-sm-2", html)
        for (let i = 0; i < data.length; i++) {
            // console.log(data[i].children[1].attribs['data-src'])
            // console.log(data[i].children[4].children[0].data)
            flowers.push({
                image: data[i].children[1].attribs["data-src"],
                name: data[i].children[4].children[0].data,
            })
        }
        console.log(flowers)
        return flowers
    })
    .catch((err) => {
        console.log(err)
    })
// console.log(flowers)

module.exports = flowers
