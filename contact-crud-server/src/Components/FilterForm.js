import React,{useContext,useRef,useEffect} from 'react'
import contactContext from '../context/contactContext'

 const FilterForm = () => {
    const context=useContext(contactContext);
    const {clearFilter,filterContact,filtered}=context;
    const text=useRef('');
    
    useEffect(()=>{
        if(filtered === null){
            text.current.value = '';
        }
    })

const onChangehandler=(e)=>{
    if(text.current.value !== ''){
    filterContact(e.target.value)
    }
    else {
       clearFilter()
    }
    

}

    return (
        <form>
        <input ref={text} type='text' placeholder='Please enter text to filter...' onChange={onChangehandler}/>
    </form>
    )
}

export default FilterForm