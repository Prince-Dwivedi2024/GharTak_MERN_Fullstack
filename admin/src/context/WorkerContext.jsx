import { createContext } from "react";


const WorkerContext = createContext()

const WorkerContextProvider = (props) => {

    const value = {

    }

    return (
        <WorkerContext.Provider value={value}>
            {props.children}
        </WorkerContext.Provider>
    )
}

export default WorkerContextProvider