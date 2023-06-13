import { useState } from "react";
import { ListContacts } from "../hooks/useApi";
import perfil from '../assets/perfil.jpg'

export function listApi() {
    const [api, setApi] = useState<ListContacts[]>([
        {
          name: 'Igor',
          category: 'I',
          id: Math.ceil(Math.random() * 100),
          number: '(91)999999999',
          perfilImage: perfil
        },
      ])   

      return {api, setApi}
}
