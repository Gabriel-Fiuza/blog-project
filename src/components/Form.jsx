export default function Form({ setComment, setEmail, email, comment }){
    return(
        <form>
            <h2>Seção de comentários</h2>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" value={email}
            onChange={(ev) => setEmail(ev.target.value)}/>
            <label htmlFor="comment">Comentário:</label>
            <textarea type="text" name="comment" id="comment" value={comment} 
            onChange={(ev) => setComment(ev.target.value)}/>
      </form>
    )
}