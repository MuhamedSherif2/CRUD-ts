export function txtCuter(txt:string , max:number = 50){
    if(txt.length >=max){
        return `${txt.slice(0 , max)}...`
    }else{
        return txt
    }
}

export function priceUpdate(price: number | string, max: number = 3): string {
    const num = typeof price === 'string' ? parseFloat(price) : price;
    const priceStr = num.toString();
    
    if (priceStr.length > max) {
        return priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    return priceStr;
}