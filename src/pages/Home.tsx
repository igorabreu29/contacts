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
    const [api, setApi] = useState<ListContacts[]>(
    [
            {
                id: Math.floor(Math.random() * 100),
                category: 'A',
                perfilImage: perfil,
                name: 'Abreu lol',
                number: '(11) 98756-1234'
            },
            {
                id: Math.floor(Math.random() * 100),
                category: 'B',
                perfilImage: perfil,
                name: 'Bacilo lola',
                number: '(11) 98756-1234',
            },
        ]
    )   
    const [list, setList] = useState<letterContact>({})

    const [search, setSearch] = useState('')
    const [add, setAdd] = useState(false)
    const {orderByName, groups} = useList()

    // const filteredList = list.filter(data => data.name.toLowerCase().includes(search.toLowerCase()))

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
                            <button>
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
                    {Object.keys(list).map((data) => {
                        return (
                            <ContactVariant key={Math.random()}>
                                <Category>
                                    {data}
                                </Category>
                                <section>
                                    {list[data].map((datas) => {
                                        return (
                                            <ContactContent>
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
                        )
                    })}
                {/* {list.map(data => {
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
                            })} */}
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