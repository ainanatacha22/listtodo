import React from 'react'

export default function List({myList, onDelete, handleChangeItem}) {

    return (
        <div className=''>
            <h2 className='mb-2'>Your Lists</h2>
            <table className='myTable w-full border-neutral-700 text-center'>
                <thead>
                    <tr className='header'>
                        <th className=''>Numéro</th>
                        <th>Tasks</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myList.map((item, index) => {
                            return(
                                <tr className='myTable '>
                                    <td>{index+1}</td>
                                    <td>{item}</td>
                                    <td className='flex space-x-2 justify-center '>
                                        <button type='button' className='bg-green-300 px-3 text-black mt-2 text-xs rounded-md' onClick={() => handleChangeItem(index)}>Edit</button>
                                        <button type='button' className='bg-red-400 px-3  text-black selection:px-2 mt-2 text-xs rounded-md' onClick={() => onDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
