import item from '../Models/item'
import axios from 'axios';

export async function getItems(url: string) {
    return await axios.get<item[]>(url)
}

export async function getItem(url: string, id: number) {
    return await axios.get<item>(url + `/${id}`)
}

export async function deleteItem(url: string, id: number) {
    return await axios.delete(url + `/${id}`)
}

export async function postItem(url: string, item: item) {
    return await axios.post(url, item)
}

export async function updateItem(url: string, id: number, item: item) {
    return await axios.put(url + `/${id}`, item)
}