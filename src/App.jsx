import './App.css'

function FormularioEvento() {
  return (
    <form className='form-evento'>
      <h2>Preencha para criar um event</h2>
      <fieldset>
        <label htmlFor="nome">Qual o nome do evento?</label>
        <input type="text"  placeholder='Summer dev hits'/>
      </fieldset>
      </form>
  )
}

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioEvento />
    </main>
  )
}

export default App
