import { listApi } from '../api/list';
import { useList } from './useList';
import { useEffect, useState } from 'react';
import perfil from '../assets/perfil.jpg'

export interface ListContacts {
    id: number
    category: string
    perfilImage: string
    name: string
    number: string
}

interface letterContact {
    [x: string]: ListContacts[]
}

export function useApi() {
      const { api, setApi } = listApi()
  
      const [list, setList] = useState<letterContact>({})
    
      const [search, setSearch] = useState('')
      const [add, setAdd] = useState(false)
      const {orderByName, groups} = useList()
    
      const filteredList = api.filter(data => data.name.toLowerCase().includes(search.toLowerCase()))
    
      useEffect(() => {
          setList(groups(orderByName(api)))
      }, [api])   
      
      function handleOpenSide() {
          setAdd(!add)
      }
    
      function addNewContact(nameState: string, numberState: string) {
          if (nameState.length === 0 || numberState.length === 0) {
              alert('Adicione valores')
          } else {
              const addContact: ListContacts = {
                  id: Math.floor(Math.random() * 100),
                  name: nameState,
                  number: numberState,
                  category: nameState.slice(0, 1).toUpperCase(),
                  perfilImage: perfil
              }
    
              setApi(state => [addContact, ...state]) 
          }
      }
    
      function handleOpenEdit() {
          if ( api.length === 0 ) {
              alert("Adicione um contato antes de editar!")
          } else {
              const editContacts = {
                  name: prompt('Procure pelo nome'),
              } as ListContacts
              const foundContact = api.findIndex(item => item.name.toUpperCase() === editContacts.name.toUpperCase())
      
              if (foundContact !== -1) {
                  api[foundContact].name = prompt('O nome é: ', api[foundContact].name) as string
                  api[foundContact].number = prompt('O número é: ', api[foundContact].number) as string
                  api[foundContact].perfilImage = api[foundContact].perfilImage
                  api[foundContact].category = api[foundContact].name[0].toUpperCase()
                  setList(groups(orderByName(api)))
              }
          }
      
      }
    
      function handleDelete() {
          if ( api.length === 0 ) {
              alert("Adicione um contato antes de deletar!")
          } else {
              const deleteContacts = {
                  name: prompt('Procure pelo nome'),
              } as ListContacts
      
              const filterContacts = api.filter(item => item.name.toUpperCase() !== deleteContacts.name.toUpperCase())
      
              setApi(filterContacts)
          }
      }

      return {add, list, filteredList, search, setSearch, handleOpenSide, handleOpenEdit, handleDelete, addNewContact}
}

