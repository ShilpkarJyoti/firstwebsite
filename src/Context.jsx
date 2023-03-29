import React, { useContext, useEffect, useReducer } from "react";
import  reducer  from "./reducer";

const  AppContext = React.createContext();

const initialState={
    name: "",
    image: "",
    services: "",
};




const AppProvider =({ children}) =>{
const API  = "https://github.com/ShilpkarJyoti/reactfirstwebsite.git"

    const [state,dispatch] = useReducer(reducer, initialState);

    const updateHomePage =() =>{
        return dispatch ({
                type: "HOME_UPDATE",
                payload: {
                    name:"RE + SITE",
                    image:"./images/hero.svg",
                }
            })
    }
    const updateAboutPage =() =>{
        return dispatch ({
                type: "ABOUT_UPDATE",
                payload: {
                    name:"RESITE",
                    image:"./images/about.svg",
                }
            })
    }
    //to get the api data
    const getServices= async(url)=> {
        try{
             const res= await fetch(url);
             const data= await res.json();
             dispatch({type:"GET_SERVICES", payload: data});
        }catch(error){
            console.log(error);
        }

    };

    // to call api
    useEffect(()=>{
        //getServices(API);
    },[]);   
    return(
        <AppContext.Provider value= {{...state ,updateHomePage ,updateAboutPage}}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext =() => {
    return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};