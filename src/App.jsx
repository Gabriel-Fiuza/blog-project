import dayjs from 'dayjs';
import { useState } from "react"
import MapedArray from './components/ArrayMaped';
import Form from './components/Form';

export default function App(){
  const[comment, setComment] = useState('')
  const[email, setEmail] = useState('')
  const[comments, setComments] = useState([])

  function addComment(comment, email){
    const agora = dayjs();
    const dataFormatada = agora.format('DD/MM/YYYY, HH:mm');
    const id = Math.floor(Math.random() * 1000000)
    const newComment = ({ id, comment, email, dataFormatada})
    setComments((state) => {
      const newState = [...state, newComment]
      return newState
  })
    comments.sort((a, b) => b.dataFormatada - a.dataFormatada)
    setComment('')
    setEmail('')
  }

  return(
    <div id='app'>
      <h2>Seção de comentários</h2>
      <Form setFunc={setEmail}
       value={email}
       label='Email: '/>
       <Form setFunc={setComment}
        value={comment}
        label='Comentário'/>
       <button onClick={() => addComment(comment, email)}>Enviar comentário</button>
      <section className='all-comments'>
        { !(comments.length===0) ?
        <MapedArray comments={comments}/>
        : <h3>Seja o primeiro a comentar!</h3> }
      </section>
    </div>
  )
}