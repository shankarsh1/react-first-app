export const getProduct = async (num, count) => {
    const product = await fetch('https://fakestoreapi.com/products/' + count)
        .then(res => res.json())
        .then(json => json)
    console.info(product)
    return product;
}