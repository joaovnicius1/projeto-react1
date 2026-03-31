import './titulo-formulario.estilos.css'

export function TituloFormulario(props) {
  return (
    <h2 className='titulo-formulario'>
        {props.children}
    </h2>
  )
}
