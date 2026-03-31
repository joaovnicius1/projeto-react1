import './formulario-de-eventos.estilos.css'
import { CampoEntrada } from "../CampoDeEntrada";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { CampoDeFormulario } from '../CampoDeFormulario';
import { Botao } from '../Botao';
import { ListaSuspensa } from '../ListaSuspensa';

export function FormularioEvento({ temas, aoSubmeter }) {
  
  function aoFormSubmetido(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log("Formulário submetido!", formData)
    const evento = {
      capa: formData.get('capaEvento'),
      tema: temas.find( function (tema) {
        return tema.id === Number(formData.get('tema'));
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento')
    };
    aoSubmeter(evento);

  }
  return (
    <form className='form-evento' onSubmit={aoFormSubmetido}>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <div className='campos'>
      <CampoDeFormulario>
        <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
        <CampoEntrada type="text" id='nomeEvento' name='nomeEvento'  placeholder='Summer dev hits'/>
      </CampoDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor="capaEvento">Qual o endereço da imagem de capa do evento?</Label>
        <CampoEntrada type="text" id='capaEvento' name = 'capaEvento'  placeholder='http://'/>
      </CampoDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor="dataEvento">
          Data do evento:
        </Label>
        <CampoEntrada
        type="date"
        id='dataEvento'
        name='dataEvento'
        />
      </CampoDeFormulario>
            <CampoDeFormulario>
        <Label htmlFor="dataEvento">
          Tema do evento:
        </Label>
        <ListaSuspensa id='tema' name='tema' itens = {temas}/>
      </CampoDeFormulario>
      
      </div>
      <div className='acoes'>
        <Botao>
          Criar Evento
          </Botao> 
      </div>
    </form>
  )
}