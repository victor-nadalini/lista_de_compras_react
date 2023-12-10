import { useRef, useState } from 'react'
import {v4} from 'uuid'
import { AddButton, Conteiner, Produt, trashButton } from './styles'; 

// react hooks
// useraf
// useState / estado -> é uma variavel que toda vez que troca de valor a tela ira recarregar os valores 

function Home() {
  const [produtos, setProdutos] = useState([])
  const inputRef = useRef()

  function cliqueinobotao(){
    setProdutos ([
      {
        id: v4(),
        nome:inputRef.current.value

      }, ...produtos
    ])
    inputRef.current.value = ""
  }

  function DeletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !== id))
  }
  
  return (
   <Conteiner>
    <h1>Lista de compras</h1>
    <input placeholder="Produto..." ref={inputRef}/>
    <AddButton onClick={cliqueinobotao}>Adicionar</AddButton>


    {
      produtos.map( produto => (
        <Produt key={produto.id}>
          <p>{produto.nome}</p>
          <trashButton onClick={() => DeletarProduto(produto.id)}>🗑️</trashButton>
        </Produt>
      ))
    }
   </Conteiner>
  )
}

export default Home
