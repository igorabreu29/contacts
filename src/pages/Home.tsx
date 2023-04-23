import { useState } from 'react'
import { 
    MagnifyingGlass, 
    PencilSimple, 
    Plus, 
    Trash } from "phosphor-react";
import { 
     ContactContent,
     ContactVariant,
     EditContainer,
     FormContainer,
     HomeContainer,
     ListContainer, 
    } from "./styles";

import letterA from '../assets/letterA.jpg'
import letterB from '../assets/letterB.jpg'
import letterC from '../assets/letterC.jpg'
import letterD from '../assets/letterD.jpg'
import perfil from '../assets/perfil.jpg'
import { AddContact } from '../components/AddContact';

interface Equal {
    id: number
    perfilImage: string
    name: string
    number: string
}

export interface ListContacts {
    id: number
    letterImage: string
    perfilImage: string
    name: string
    number: string
    contactEqual?: Equal[]
}
export function Home() {

const [api, setApi] = useState<ListContacts[]>(
[
        {
            id: Math.floor(Math.random() * 100),
            letterImage: letterA,
            perfilImage: perfil,
            name: 'Abreu lol',
            number: '(11) 98756-1234'
        },
        {
            id: Math.floor(Math.random() * 100),
            letterImage: letterB,
            perfilImage: perfil,
            name: 'Bacilo lola',
            number: '(11) 98756-1234',
            contactEqual: [{
                id: Math.floor(Math.random() * 100),
                perfilImage: perfil,
                name: 'Bobs mom',
                number: '(11) 98756-1234',
            }]
        },
        {
            id: Math.floor(Math.random() * 100),
            letterImage: letterC,
            perfilImage: perfil,
            name: 'Cris brew',
            number: '(11) 98756-1234',
            contactEqual: [{
                id: Math.floor(Math.random() * 100),
                perfilImage: perfil,
                name: 'Crow Bronwl',
                number: '(11) 98756-1234',
            }]
        },
        {
            id: Math.floor(Math.random() * 100),
            letterImage: letterD,
            perfilImage: perfil,
            name: 'Dolly lala',
            number: '(11) 98756-1234'
        },
    ]
)
    const [search, setSearch] = useState('')
    const [add, setAdd] = useState(false)
    const filteredList = api.filter(data => data.name.toLowerCase().includes(search.toLowerCase()))

    function handleOpenSide() {
        setAdd(!add)
    }

    function addNewContact(nameState: string, numberState: string) {
        const letterImages = api.find(item => item.letterImage === letterA)
         
        if (letterImages) {
            const addNew: ListContacts[] = api.map(data => {
                if ( data.letterImage == letterA ) ({
                    ...data,
                    contactEqual: data.contactEqual
                })
                return data
            })
            console.log(addNew)
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
                            <button>
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
                    {search.length > 0 ? (
                        <>
                        {filteredList.map(data => {
                            return (
                            <ContactVariant key={data.id}>
                                <img src={data.letterImage} alt="" width={40} height={40}/>
                                <section>
                                    <ContactContent>
                                        <img src={data.perfilImage} alt="" width={48} height={48} />
                                            <div>
                                                <h3>{data.name}</h3>
                                                <span>{data.number}</span>
                                            </div>
                                        </ContactContent>
                                        {data.contactEqual?.map(item => {
                                            return (
                                                <ContactContent key={item.id}>
                                                    <img src={item.perfilImage} alt="" width={48} height={48} />
                                                    <div>
                                                        <h3>{item.name}</h3>
                                                        <span>{item.number}</span>
                                                    </div>
                                                </ContactContent>
                                            )
                                        })}
                                </section>
                            </ContactVariant>
                            )
                        })}
                        </>
                    ) : (
                        <>
                        {api.map(data => {
                            return (
                            <ContactVariant key={data.id}>
                                <img src={data.letterImage} alt="" width={40} height={40}/>
                                <section>
                                    <ContactContent>
                                        <img src={data.perfilImage} alt="" width={48} height={48} />
                                            <div>
                                                <h3>{data.name}</h3>
                                                <span>{data.number}</span>
                                            </div>
                                        </ContactContent>
                                        {data.contactEqual?.map(item => {
                                            return (
                                                <ContactContent key={item.id}>
                                                    <img src={item.perfilImage} alt="" width={48} height={48} />
                                                    <div>
                                                        <h3>{item.name}</h3>
                                                        <span>{item.number}</span>
                                                    </div>
                                                </ContactContent>
                                            )
                                        })}
                                </section>
                            </ContactVariant>
                            )
                        })}
                    </>
                    )}
                    </ListContainer>
                </div>

                {add && <AddContact addNewContact={addNewContact} />}
        </HomeContainer>
    )
}