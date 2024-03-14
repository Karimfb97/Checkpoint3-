import { useEffect,useState } from 'react'
import './App.css'
import BookTable from './components/BookTable'

export default function App(){
  const [books,setBooks] = useState ([])
  async function getBooks(){
    const response = await fetch('http://localhost:3000/books')
    const data = await response.json()
    setBooks(data)
  }
  useEffect(()=>{
    getBooks()
  },[])
return(
  <>
  <BookTable books={books}></BookTable>
  </>
)
}


 

