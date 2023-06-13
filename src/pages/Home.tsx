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

import { AddContact } from '../components/AddContact';
import { useApi } from '../hooks/useApi';

export function Home() {

    const {
        add,
        addNewContact, 
        filteredList, 
        handleDelete, 
        handleOpenEdit, 
        handleOpenSide, 
        list, 
        search, 
        setSearch 
    } = useApi()

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
                    </ListContainer>
                </div>

                {add && <AddContact addNewContact={addNewContact} />}
        </HomeContainer>
    )
}