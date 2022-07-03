import React, { ChangeEvent, useState } from 'react'


export const UseForm = <T extends Object>( object: T ) => {
  
    const [state, setState] = useState(object)

    const OnChange = (event: ChangeEvent<HTMLInputElement>) => {
        
        setState({...state,
            [event.target.name]: event.target.value
        })

    }

    return {
        ...state,
        OnChange
    }

}