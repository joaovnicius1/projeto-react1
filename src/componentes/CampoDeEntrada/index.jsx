import './campo-entrada.estilos.css'

export function CampoEntrada(props){
  return <input {...props} className='campo-entrada-form'/> //o operador spread (...) é usado para passar todas as propriedades de um objeto como props para um componente. Ele é útil para evitar a necessidade de listar cada propriedade individualmente, tornando o código mais conciso e legível.
}