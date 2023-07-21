import React, { useState } from 'react'
import List from './List'


export default function Formulaire() {
    const [value, setValue] = useState()
    const [myList, setMyList] = useState([])
    const [indexToChange, setIndexToChange] = useState("")
    const [isEditing, setEditing] = useState(false)

    const handleClick = (e) => {
        e.preventDefault();

        if (isEditing === true) {
            const newList = [...myList]
            newList[indexToChange] = value
            setMyList(newList)
        }
        else {
            setMyList([...myList, value])
        }
        setEditing(false)
        setValue('')
    }

    const handleChangeItem = (id) => {
        const index = myList.findIndex((item, index) => index === id);
        setValue(myList[index])
        setIndexToChange(index)
        setEditing(true)
    }

    const onDelete = (idList) => {
        const idToDeleting = myList.findIndex((item, index) => index === idList)
        if (idToDeleting !== -1) {
            const newList = myList.slice()
            newList.splice(idToDeleting, 1)
            setMyList(newList)
        }
    }

    return (
        <div className=''>

            <div className='mb-8'>
                <div className='text-center font-bold text-3xl pt-8 pb-2 '> TODO LIST </div>
                <div className='block h-2 w-16 bg-stone-200 rounded m-auto'></div>
            </div>

            <div className='w-9/12 flex justify-center m-auto flex-col md:flex-row'>
                <div className='p-2 md:p-10 bg-stone-200 w-full md:w-2/5  md:rounded-l-3xl '>
                    <form onSubmit={handleClick}>
                        <div>
                            <h6>Task:</h6>
                            <input
                                type='text'
                                className='border p-1 w-full'
                                placeholder='Enter Task To Add in Todo'
                                onChange={(e) => setValue(e.target.value)}
                                value={value}
                            />
                        </div>
                        <div className='flex justify-end'>
                            <button type='submit' className=' text-white text-xs bg-black py-1 px-3 mt-3 rounded-full w-1/2 '  >{isEditing === true ? 'update' : 'Add To ToDo'}</button>
                        </div>
                    </form>
                </div>
                <div className='p-2 md:p-10 bg-stone-900 w-full md:w-3/5 text-white'>
                    <List myList={myList} onDelete={onDelete} handleChangeItem={handleChangeItem} />
                </div>
            </div>
        </div>
    )
}
