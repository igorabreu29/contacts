import { useEffect, useState } from 'react'
import { 
    MagnifyingGlass, 
    PencilSimple, 
    Plus, 
    Trash } from "phosphor-react";
import { 
    Category,
     ContactContent,
     ContactVariant,
     EditContainer,
     FormContainer,
     HomeContainer,
     ListContainer, 
    } from "./styles";

import perfil from '../assets/perfil.jpg'
import { AddContact } from '../components/AddContact';
import { useList } from '../hooks/useList';

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

export function Home() {
    const [api, setApi] = useState<ListContacts[]>([
      {
        name: 'Igor',
        category: 'I',
        id: Math.ceil(Math.random() * 100),
        number: '(91)999999999',
        perfilImage: perfil
      },
      {
        name: 'Igoru',
        category: 'I',
        id: Math.ceil(Math.random() * 100),
        number: '(91)4838439434',
        perfilImage: perfil
      },
      {
        name: 'Abreu',
        category: 'A',
        id: Math.ceil(Math.random() * 100),
        number: '(91)999999999',
        perfilImage: perfil
      },
    ])   
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
 
    return (
        <HomeContainer>
            <div>

                <EditContainer>
                    <div>
                        <h2>Meus Contatos</h2>
                        
                        <div>
                            <button onClick={handleOpenSide}>
                                <Plus size={24}/>
                            </button>
                            <button onClick={handleOpenEdit}>
                                <PencilSimple size={24} />
                            </button>
                            <button onClick={handleDelete}>
                                <Trash size={24} />
                            </button>
                        </div>
                    </div>

                    <FormContainer action="" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="textInput">
                            <MagnifyingGlass size={20} />
                        </label>
                        <input 
                            type="text" 
                            id="textInput"  
                            placeholder="Busque por nome ou por dados do contato" 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        /> 
                    </FormContainer>
                </EditContainer>

                <ListContainer>
                    {search.length > 0 ? (
                        <>
                        {filteredList.map(data => {
                            return (
                            <ContactVariant key={data.id}>
                                <Category>
                                    {data.category}
                                </Category>
                                <section>
                                    <ContactContent>
                                        <img src={data.perfilImage} alt="" width={48} height={48} />
                                            <div>
                                                <h3>{data.name}</h3>
                                                <span>{data.number}</span>
                                            </div>
                                        </ContactContent>
                                </section>
                            </ContactVariant>
                            )
                        })}
                        </>
                    ) : (
                        <>
                        {Object.keys(list).map((data) => {
                            return (
                                <ContactVariant key={Math.floor(Math.random() * 100)}>
                                    <Category>
                                        {data}
                                    </Category>
                                    <section>
                                        {list[data].map((datas) => {
                                            return (
                                                <ContactContent key={Math.floor(Math.random() * 100)}>
                                                    <img src={datas.perfilImage} alt="" width={48} height={48} />
                                                    <div>
                                                        <h3>{datas.name}</h3>
                                                        <span>{datas.number}</span>
                                                    </div>
                                                </ContactContent>
                                            )
                                        })}
                                    </section>
                                </ContactVariant>
                         )})}
                        </>
                    )}
                    {/* {search.length > 0 ? (
                        <>
                        {filteredList.map(data => {
                            return (
                            <ContactVariant key={data.id}>
                                <Category>
                                    {data.category}
                                </Category>
                                <section>
                                    <ContactContent>
                                        <img src={data.perfilImage} alt="" width={48} height={48} />
                                            <div>
                                                <h3>{data.name}</h3>
                                                <span>{data.number}</span>
                                            </div>
                                        </ContactContent>
                                </section>
                            </ContactVariant>
                            )
                        })}
                        </>
                    ) : (
                        <>
                        {list.map(data => {
                            return (
                            <ContactVariant key={data.id}>
                                <Category>
                                    {data.category}
                                </Category>
                                <section>
                                    <ContactContent>
                                        <img src={data.perfilImage} alt="" width={48} height={48} />
                                            <div>
                                                <h3>{data.name}</h3>
                                                <span>{data.number}</span>
                                            </div>
                                        </ContactContent>
                                </section>
                            </ContactVariant>
                            )
                        })}
                    </>
                    )} */}
                    </ListContainer>
                </div>

                {add && <AddContact addNewContact={addNewContact} />}
        </HomeContainer>
    )
}