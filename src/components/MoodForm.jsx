import { useState } from 'react'
import './MoodForm.css'


export default function MoodForm({ onNewMood }){
    const [text, setText] = useState("")
    const [rating, setRating] = useState(0)

	const handleSubmit = (e) => {
		e.preventDefault()
		onNewMood(text, rating)
		setText("")
    }
    
    return (
    <>
        <h3>Add a mood</h3>
        <form onSubmit={handleSubmit} value={text}>
			<input type="text" placeholder="Describe the mood" onChange={e => setText(e.target.value)}/> 
            <input type="number" placeholder="Rating out of 10" onChange={e => setRating(e.target.value) }/>
            <br />
			<button type="submit" id="submitAddMood">Submit</button>
		</form>
        <br />
    </>
    )
}