export default function Form({ setFunc, value, label }){
    return(
        <form>
            <label htmlFor="email">{label}</label>
            <input type="text" name="email" id="email" value={value}
            onChange={(ev) => setFunc(ev.target.value)}/>
      </form>
    )
}