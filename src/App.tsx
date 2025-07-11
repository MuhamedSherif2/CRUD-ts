import { ChangeEvent, FormEvent, useState } from 'react'
import './App.css'

import { category, colors, formInputList, productList } from './data';
import { IProduct } from './interfaces';
import { productValidation } from './validation';
import { ProductType } from './type';

import Button from './ui/Button'
import Input from './ui/Input';
import MyModal from './ui/Model'
import ErrorMessage from './ui/ErrorMessage';
import ProductCard from './component/ProductCard';
import CircleColor from './ui/CircleColor';
import SelectMenu from './ui/SelectMenu'


function App() {

  const defaultProduct = {
    title: '',
    descrption: '',
    imageURL: '',
    price: '',
    colors: [],
    category: {
      name: '',
      imgURL: ''
    }
  }
  const [products, setProducts] = useState<IProduct[]>(productList)
  const [product, setProduct] = useState<IProduct>(defaultProduct)
  const [editProduct, setEditProduct] = useState<IProduct>(defaultProduct)
  const [editProductIdx, setEditProductEdx] = useState<number>(0)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [errorMessage, setErrorMessage] = useState({
    title: '', descrption: '', imageURL: '', price: ''
  })
  const [tempColor, setTempColor] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState(category[0])


  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const openEdit = () => setIsOpenEdit(true)
  const closeEdit = () => setIsOpenEdit(false)
  const handlerAdd = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value, })
    setErrorMessage({ ...errorMessage, [name]: '' })
  }
  const handlerEdit = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditProduct({ ...editProduct, [name]: value, })
    setErrorMessage({ ...errorMessage, [name]: '' })
  }
  const onCancel = () => {
    setProduct(defaultProduct)
    close()
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const { title, descrption, imageURL, price } = product;
    const errors = productValidation({
      title,
      descrption,
      imageURL,
      price,
    });
    const errMessage = Object.values(errors).some(value => value === '') && Object.values(errors).every(value => value === '')
    if (!errMessage) {
      setErrorMessage(errors)
      return;
    }
    setProducts(prev => [{ ...product, id: '', colors: tempColor, category: selectedCategory }, ...prev])
    setProduct(defaultProduct)
    setTempColor([])
    close()
  }

  const onSubmitEdit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const { title, descrption, imageURL, price } = editProduct
    const errors = productValidation({
      title,
      descrption,
      imageURL,
      price,
    });
    const errMessage = Object.values(errors).some(value => value === '') && Object.values(errors).every(value => value === '')

    if (!errMessage) {
      setErrorMessage(errors)
      return;
    }

    const updatedProduct = [...products]
    updatedProduct[editProductIdx] = editProduct
    setProducts(updatedProduct)

    setEditProduct(defaultProduct)
    setTempColor([])
    closeEdit()
  }

  const renderProduct = products.map((product, idx) => <ProductCard
    key={product.id}
    product={product}
    setEditProduct={setEditProduct}
    openEdit={openEdit}
    idx={idx}
    setEditProductEdx={setEditProductEdx}
  />)

  const formInput = formInputList.map((input) => (
    <div key={input.id} className='flex flex-col'>
      <label htmlFor={input.id} className='text-black'>{input.lable}</label>
      <Input id={input.id} name={input.name} value={product[input.name]} onChange={handlerAdd} />
      <ErrorMessage msg={errorMessage[input.name]} />
    </div>
  ))

  const renderColorPro = colors.map(color => <CircleColor key={color} color={color} onClick={() => {
    if (tempColor.includes(color)) {
      setTempColor(prev => prev.filter(item => item !== color))
      return;
    }
    setTempColor((prev) => [...prev, color])
  }}
  />)

  const renderEditProduct = (id: string, label: string, name: ProductType) => {
    return (
      <div className='flex flex-col'>
        <label htmlFor={id} className='text-black'>{label}</label>
        <Input id={id} name={name} value={editProduct[name]} onChange={handlerEdit} />
        <ErrorMessage msg={errorMessage[name]} />
      </div>
    )
  }

  return (
    <main className='container mx-auto'>
      <Button onClick={open}>Open</Button>

      <div className='grid grid-cols-1 md:grid-cols-2'>
        {renderProduct}
      </div>
      {/* Open new product */}
      <MyModal isOpen={isOpen} close={close} title='Add A New product'>
        <form className='space-y-3' onSubmit={onSubmit}>
          {formInput}
          <SelectMenu selected={selectedCategory} setSelected={setSelectedCategory} />
          <div className='flex items-center space-x-1'>
            {renderColorPro}
          </div>
          <div className='flex items-center flex-wrap space-x-1'>
            {tempColor.map(color => (
              <span key={color} style={{ backgroundColor: color }} className='px-1 rounded-md text-white'>{color}</span>
            ))}
          </div>
          <div className='flex flex-row gap-x-3 w-full'>
            <Button className='bg-indigo-500 text-[20px] font-semibold transition duration-300 hover:bg-indigo-800'>Submit</Button>
            <Button className='bg-white text-[20px] font-semibold' onClick={onCancel}>Cancel</Button>
          </div>
        </form>
      </MyModal>

      {/* Edit product */}
      <MyModal isOpen={isOpenEdit} close={closeEdit} title='Edit product'>
        <form className='space-y-3' onSubmit={onSubmitEdit}>
          {renderEditProduct('title', 'Product Title', 'title')}
          {renderEditProduct('descrption', 'Product Descrption', 'descrption')}
          {renderEditProduct('imageURL', 'Product Image URL', 'imageURL')}
          {renderEditProduct('price', 'Product Price', 'price')}

          {/* {formInput}
          <SelectMenu selected={selectedCategory} setSelected={setSelectedCategory} /> */}
          
          <div className='flex items-center space-x-1'>
            {renderColorPro}
          </div>
          <div className='flex items-center flex-wrap space-x-1'>
            {tempColor.map(color => (
              <span key={color} style={{ backgroundColor: color }} className='px-1 rounded-md text-white'>{color}</span>
            ))}
          </div>

          <div className='flex flex-row gap-x-3 w-full'>
            <Button className='bg-indigo-500 text-[20px] font-semibold transition duration-300 hover:bg-indigo-800'>Submit</Button>
            <Button className='bg-white text-[20px] font-semibold' onClick={onCancel}>Cancel</Button>
          </div>
        </form>
      </MyModal>
    </main>
  )
}

export default App
