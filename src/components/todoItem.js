import React, {useState} from 'react'
import './todoItem.css'
import Checkbox from '@material-ui/core/Checkbox';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';
import { useDispatch } from 'react-redux';

import { setCheck, deleteItem, changeInput } from '../redux/todoSlice'

const TodoItem = ({ name, id, done }) => {

  const dispatch = useDispatch()
  const [newValue, setNewValue] = useState(name)
  const [focus, setFocus] = useState(false)
  
  const handleChange = () => {
    dispatch(setCheck(id))
  }

  const deleteHandler = () => {
    dispatch(deleteItem(id))
  }
  const changeItem = () =>{
    dispatch(changeInput({_id: id, value: newValue}))
    setNewValue(newValue)
    setFocus(false)
    
  }

  return (
    <div className='todoItem' >
      <Checkbox
        checked={done}
        onChange={handleChange}
        color="primary"
        
      />
      <input className={done ? 'todoItem--done' : ''} onFocus={()=>setFocus(true)} onChange={e=>setNewValue(e.target.value)} value={newValue}/>
      {
        focus===true 
          ?<button className='delete__button'  onClick={changeItem}>
              <CheckIcon 
                style={{ fontSize: 28, color: 'green' }}

                
              />
            </button>
          :<button className='delete__button' onClick={deleteHandler}>
            <ClearIcon
            color="secondary"
            />
          </button>
      }
      
    </div>
  )
}

export default TodoItem
