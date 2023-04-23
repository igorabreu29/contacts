import { FormAdd } from "./styles";
import { useState, FormEvent } from 'react'

interface AddProps {
    addNewContact: (nameState: string, numberState: string) => void
}

export function AddContact({addNewContact}: AddProps) {
    const [nameState, setNameState] = useState('')
    const [numberState, setNumbersState] = useState('')
 
    function handleAddNewComment(e: FormEvent) {
        e.preventDefault()

        addNewContact(nameState, numberState)
    }

    return (
        <FormAdd action="" onSubmit={handleAddNewComment}>
            <div>
                <label htmlFor="textInput">Name:</label>
                <input 
                    type="text" 
                    id="textInput" 
                    value={nameState}
                    onChange={(e) => setNameState(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="numbers">Number:</label>
                <input 
                    type="text" 
                    id="numbers" 
                    value={numberState}
                    onChange={(e) => setNumbersState(e.target.value)}
                />
            </div>
            <button>Add</button>
        </FormAdd>
    )
}