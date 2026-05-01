
import { OrderListItem } from "./OrderListItem"; // importando o componente OrderListItem,
//  que é responsável por exibir os detalhes de cada pedido

const pedidos = [
    { mesa: 3, cliente: "João", pedido: "Pizza de Calabresa" },
    { mesa: 5, cliente: "Marina", pedido: "Lasanha e Suco de Laranja" },
    { mesa: 6, cliente: "Paulo", pedido: "Hamburguer e Coca-cola" },
    { mesa: 1, cliente: "adriana", pedido: "Pizza de Mussarela" },
];

export function OrderList() {
    return <div>
        <ul>
            {pedidos.map((pedidos) => (
                // Renderizar 3 - os detalhes do pedido aqui
              <OrderListItem key={pedidos.mesa} mesa={pedidos.mesa} cliente={pedidos.cliente} pedido={pedidos.pedido}/>
            ))}
        </ul>
        </div>;
}



