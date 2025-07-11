import Button from "../ui/Button";
import Image from "./Image";
import IMG from '../assets/web.webp'
import { IProduct } from "../interfaces";
import { txtCuter } from "../utils/Function";
import CircleColor from "../ui/CircleColor";

interface IProps {
    product: IProduct
    setEditProduct: (product: IProduct) => void
    openEdit:() => void
    idx:number
    setEditProductEdx:(value: number) => void
}

function ProductCard({ product, setEditProduct, openEdit, idx, setEditProductEdx }: IProps) {

    const { title, descrption,price, colors } = product

    const renderColorPro = colors.map(color => <CircleColor key={color} color={color} />)
    const onEdit = () => {
        setEditProduct(product)
        openEdit()
        setEditProductEdx(idx)
    }

    return (
        <div className="">
            <Image imageURL={IMG} alt={'Product name'} className="w-[200px] h-[150px]" />
            <h3>{title}</h3>
            <p>{txtCuter(descrption)}</p>
            <div className='flex items-center space-x-1'>
                {renderColorPro}
            </div>
            <div>
                <span>{price}</span>
                <Image imageURL={IMG} alt={'Product name'} className="w-2 h-2 rounded-full" />
            </div>
            <div className="flex gap-2">
                <Button className="bg-green-500" onClick={onEdit}>EDIT</Button>
                <Button className="bg-red-600">DELETE</Button>
            </div>
        </div>
    )
}
export default ProductCard;