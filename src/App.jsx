import { useState } from "react";
import "./App.css";
import { Banner } from "./componentes/banner";
import { CardEvento } from "./componentes/CardEvento";
import { FormularioEvento } from "./componentes/FormularioEvento";
import { Tema } from "./componentes/Tema";

//no react, componetes são funções que retornam um pedaço de interface, ou seja, um elemento JSX.

//props é um objeto que contém as propriedades passadas para um componente. Ele é usado para passar dados de um componente pai para um componente filho. As props são imutáveis, ou seja, não podem ser alteradas pelo componente filho. Elas são usadas para personalizar o comportamento e a aparência dos componentes, permitindo que eles sejam reutilizáveis e flexíveis.

function App() {
  const temas = [
    { id: 1, nome: "Front-end" },
    { id: 2, nome: "Back-end" },
    { id: 3, nome: "Devops" },
    { id: 4, nome: "Inteligência Artificial" },
    { id: 5, nome: "Cloud" },
  ];

  const [eventos, setEventos] = useState([
    {
      capa: "./src/assets/imgs/imagem.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
    },
  ]);

  function adicionarEvento(evento) {
    setEventos([...eventos, evento]);
    console.log("Eventos =>", eventos);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioEvento temas={temas} aoSubmeter={adicionarEvento} />

      {temas.map((tema) => {
        const temEvento = eventos.some((evento) => evento.tema.id === tema.id);

        if (!temEvento) return null;

        return (
          <section key={tema.id}>
            <Tema tema={tema} />
            <div className="eventos">
              {eventos
                .filter((evento) => evento.tema.id === tema.id)
                .map((evento, index) => (
                  <CardEvento key={index} evento={evento} />
                ))}
            </div>
          </section>
        );
      })}

      {/*   <section>
        <Tema tema = {temas[0]} />
      </section>
      <section>
        <Tema tema = {temas[1]} />
      </section>
      <section>
        <Tema tema = {temas[2]} />
      </section>
      <section>
        <Tema tema = {temas[3]} />
      </section>
      <section>
        <Tema tema = {temas[4]} />
      </section> */}
    </main>
  );
}

export default App;
