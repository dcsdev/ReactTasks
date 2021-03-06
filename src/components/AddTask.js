import {useState} from 'react'

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('')
  const [day, setDate] = useState('')
  const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
      e.preventDefault()
      console.log('Form Submitted...')

      if(!text) {
        alert('Please Add Task')
        return
      }

      onAdd({text,day,reminder})

      setText('')
      setDate('')
      setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label> Task </label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value) } 
        placeholder="Add Task" />
      </div>

      <div className="form-control">
        <label> Day/Time </label>
        <input type="text" placeholder="Add Task" value={day} onChange={(e) => setDate(e.target.value) } />
      </div>

      <div className="form-control-check">
        <label> Reminder </label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked) }  />
      </div>

    <input type='submit' value='Save Task' className="btn btn-block" />
    </form>
  );
};

export default AddTask;
