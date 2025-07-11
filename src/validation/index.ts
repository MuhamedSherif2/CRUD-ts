export const productValidation = (productValid: { title: string; descrption: string; imageURL: string; price: string; }) => {
    const error: { title: string; descrption: string; imageURL: string; price: string; } = {
        title: '',
        descrption: '',
        imageURL: '',
        price: '',
    }

    const validURL = /^(ftp|http|https):\/\/[^ *]+/.test(productValid.imageURL);

    if (!productValid.title.trim() || productValid.title.length < 10 || productValid.title.length > 80) {
        error.title = 'Product Name must between 10 and 80'
    }
    if (!productValid.descrption.trim() || productValid.descrption.length < 10 || productValid.descrption.length > 900) {
        error.descrption = 'Product Description must between 10 and 900'
    }
    if (!productValid.imageURL.trim() || !validURL) {
        error.imageURL = 'Valid URL has aproblem'
    }
    if (!productValid.price.trim() || isNaN(Number(productValid.price))) {
        error.price = 'This is not anumber'
    }
    return error;

}