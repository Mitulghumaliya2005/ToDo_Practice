import axios from "axios";
import { createContext, useState } from "react";

export const editvaducontext = createContext()

export const EditvaducontextProvider = (props) => {

    const [toDOs, settoDOs] = useState()

    console.log("plea: ", toDOs);


    const API_URL = 'http://localhost:5000/api'

    async function deletetodo(id) {
        try {
            const response = await axios.patch(`${API_URL}/v2/deletetodo`, { id })
            console.log(response.data);
            settoDOs(response.data)
            // return response.data
        } catch (error) {
            throw new error
        }
    }


    async function edittodo(todo) {
        try {
            const response = await axios.patch(`${API_URL}/v3/edittodo`, todo)
            console.log(response.data);
            settoDOs(response.data)
            console.log("pachhi: ", toDOs);
        } catch (error) {
            throw new error
        }
    }


    return (
        <editvaducontext.Provider value={{ deletetodo, edittodo, settoDOs, toDOs }}>
            {
                props.children
            }
        </editvaducontext.Provider>
    )
}