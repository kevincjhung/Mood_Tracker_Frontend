import {useState}  from 'react'
import './Mood.css'
export default function Mood({ id, created, notes, rating, onDelete, onEdit }){
    // string formatting for rating
    let star = "";
    for(let i = 0; i < rating; i++){
        star = star + "⭐";
    }
    star = `${rating}/10 ` + star

    
    const [newText, setNewText] = useState('')
    const [newRating, setNewRating] = useState(0)
    const [formDisplay, setFormDisplay] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        onEdit(id, newText, newRating)
    }

    // toggles the formDisplay state, which dictates whether the form for editing the mood is displayed
    const handleSetFormDisplay = () => { 
        setFormDisplay(!formDisplay);
    }

    return (
        <div className='moodCard'>
            <h2>Mood notes: {notes}</h2>
            <h3>rating: {star}</h3>
            <h4>created: {created}</h4>
            <button onClick={() => onDelete(id)}>remove ❌</button>
            <button onClick={() => handleSetFormDisplay(id)}>edit ✏️</button>

            <div className={ formDisplay ? "editMoodForm formDisplay" : "editMoodForm" }>
                <form onSubmit={handleSubmit} value={newText}>
                    <h3>Edit Mood</h3>
                    <input type="text" placeholder="Enter New Mood" onChange={e => setNewText(e.target.value)}/>
                    <input type="number" placeholder="Enter New Rating" onChange={e => setNewRating(e.target.value)} /> <br/>
                    <button type="submit">Change This Mood</button>
                </form>
            </div>
        </div>
    )
}