import { useState, useEffect } from 'react'
import './App.css'
import Mood from './components/Mood'
import MoodForm from './components/MoodForm'
import axios from 'axios'


function App() {
  const [moods, setMoods] = useState([])


  // get all moods from backend on initial page load
  useEffect(() => {
    const abortController = new AbortController()

      ; (async () => {
        try {
          const result = await axios.get("/api/moods", { signal: abortController.signal })
          setMoods(result.data)
        } catch (error) {
          console.error(error)
          if (axios.isCancel(error)) {
            return
          }
        }
      })()

    return () => {
      abortController.abort()
    }
  }, [])


  const handleDeleteMood = (id) => {
    (async () => {
      try {
        await axios.delete(`/api/moods/${id}`)
        
        // fetch new list of moods from backend
        const result = await axios.get("/api/moods")
        
        // update state with new list of moods
        setMoods(result.data)
      } catch (error) {
        console.error(error)
        if (axios.isCancel(error)) {
          return
        }
      }
    })()
  }


  const handleAddMood = (notes, rating) => {
    (async () => {
      try {
        await axios.post(`/api/moods`, { notes, rating })
         const result = await axios.get("/api/moods")  // fetch new list of moods from backend
         setMoods(result.data)  // update state with new list of moods
      } catch (error) {
        console.error(error)
        if (axios.isCancel(error)) {
          return
        }
      }
    })()
  }

  const handleSortByRating = () => {
    setMoods([...moods].sort((a, b) => b.rating - a.rating))
  }

  const handleSortByTime = () => {
    setMoods([...moods].sort((a, b) => new Date(b.created) - new Date(a.created)
    ))
  }

  const handleEditMood = (id, newNotes, newRating) => {
    console.log(`id: ${id} \t  text: ${newNotes} \t rating:${newRating} \t `)

    let notes = newNotes;
    let rating = newRating;

    (async () => {
      try {
        await axios.put(`/api/moods/${id}`, { notes, rating, id })
         const result = await axios.get("/api/moods")  // fetch new list of moods from backend
         setMoods(result.data)  // update state with new list of moods
      } catch (error) {
        console.error(error)
        if (axios.isCancel(error)) {
          return
        }
      }
    })()
  }

  return (
    <>
      <MoodForm
        onNewMood={handleAddMood}
      />
      <button onClick={handleSortByRating}>Sort by rating</button>
      <button onClick={handleSortByTime}>Sort by time</button>
      {moods.map(mood => {
        return <Mood
          id={mood.id}
          created={mood.created}
          notes={mood.notes}
          rating={mood.rating}
          onDelete={handleDeleteMood}
          onEdit={handleEditMood}
        />
      })
      }
    </>
  )
}

export default App
