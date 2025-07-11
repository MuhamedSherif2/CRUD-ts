import Button from "../ui/Button";
import Image from "./Image";
import { IProduct } from "../interfaces";
import { priceUpdate, txtCuter } from "../utils/Function";
import CircleColor from "../ui/CircleColor";

interface IProps {
    product: IProduct
    setEditProduct: (product: IProduct) => void
    openEdit: () => void
    idx: number
    setEditProductEdx: (value: number) => void
    openRemoveForm: () => void
}

function ProductCard({ product, setEditProduct, openEdit, idx, setEditProductEdx, openRemoveForm }: IProps) {

    const { title, descrption, price, colors, imageURL, category } = product

    const renderColorPro = colors.map(color => <CircleColor key={color} color={color} />)
    const onEdit = () => {
        setEditProduct(product)
        openEdit()
        setEditProductEdx(idx)
    }

    const onRemove = () => {
        openRemoveForm()
        setEditProduct(product)
    }

    return (
        <div className="border p-2 rounded-md">
            <Image imageURL={imageURL} alt={'Product name'} className="m-auto w-full h-[200px] object-cover rounded-md" />
            <h3 className="text-bold text-2xl ">{title}</h3>
            <p className="my-2 text-[18px]">{txtCuter(descrption)}</p>
            <div className='flex items-center space-x-1 my-3'>
                {renderColorPro}
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between my-2">
                <span>${priceUpdate(price)}</span>
                <div className="flex items-center gap-5">
                    <span>{category.name}</span>
                    <Image imageURL={category.imgURL} alt={'Product name'} className="w-7 h-7 rounded-full" />
                </div>
            </div>
            <div className="flex gap-2">
                <Button className="bg-[#52c41a] hover:bg-[#73d13d]" onClick={onEdit}>EDIT</Button>
                <Button className="bg-[#ff4d4f] hover:bg-[#ff7875]" onClick={onRemove}>DELETE</Button>
            </div>
        </div>
    )
}
export default ProductCard;