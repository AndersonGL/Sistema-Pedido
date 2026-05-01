import "./OrderCard.css"
import { FaClipboardList } from "react-icons/fa" // importando o ícone de lista de tarefas do react-icons
import { OrderList } from "./OrderList"  // importando o componente OrderList, que é responsável por exibir a lista de pedidos


export function OrderCard()  {
  return (
    <div className='order-card'>
    <h2 className='title'>
        <FaClipboardList className='icon'/>  
        Pedidos do Dia
    </h2>

    {/* Renderizar 2 Componente */}
    <OrderList/>  
    </div>
  )
}

