import { FAIL, GET_CURRENT, LOADING, LOGIN, LOGOUT, REGISTER } from "../actionTypes"
import axios from 'axios'

//Register Candidat
export const register =(nuwUser, navigate)=>async(dispatch)=>{
    dispatch({type:LOADING})
try {
    const res = await axios.post('/api/authUser/register',nuwUser)
    dispatch({type:REGISTER, payload:res.data})
    navigate('/myProfilUser')
} catch (error) {
    dispatch({type:FAIL, payload:error.response.data})
}
}
//Login candidat
export const login =(user, navigate)=>async(dispatch)=>{
dispatch({type:LOADING})
try {
    const res = await axios.post('/api/authUser/login',user)
    dispatch({type:LOGIN, payload: res.data})
    navigate('/myProfilUser')
} catch (error) {
    dispatch({type:FAIL, payload:error.response.data})
}
} 
//get_current
export const getCurrent =()=>async(dispatch)=>{
const config={
    headers:{
        authorization:localStorage.getItem('token')
    }
}
try {
    const res = await axios.get('/api/current',config)
    console.log(res.data)

    dispatch({type:GET_CURRENT, payload: res.data})
} catch (error) {
    dispatch({type:FAIL})
}
} 
//logout
export const logout =()=>({type:LOGOUT});