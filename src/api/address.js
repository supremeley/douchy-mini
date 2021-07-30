import request from '@/utils/request.js'

export const GET_ADDRESS_LIST = (data) => request.get('address/list', data)

export const GET_ADDRESS_DETAIL = (data) => request.get('address/detail', data)

export const UPDATE_ADDRESS = (data) => request.post('address/save', data)

export const DELETE_ADDRESS = (data) => request.post('address/delete', data)


