import React, { useState} from 'react'
import axios from 'axios';
import "antd/dist/antd.csss"
import {data} from '../data'
import Item from './Item'
import { ItemContext } from './Provider'

componentDidMount() 
    axios({
        method: "get",
        url: "http://localhost:3000/user",
        headers: {
            accept: "*/*"
        },
    })


export default function List() {
    const [item, setItem] = useState(data)
    const _hapusItem = (id) => {
        const newItem = item.filter((item) => item.id !== id)
        setItem(newItem)
    }

    return (
        <ItemContext.Provider value={{ item, _hapusItem}}>
            <h1>Stok Barang</h1>
            <Item />
        </ItemContext.Provider>
    )
}
