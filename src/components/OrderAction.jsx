import { Button } from "./Button";
 import { FaEdit }from "react-icons/fa";
 
console.log(FaEdit);

export function OrderAction({ onEdit }) {
  return (
    <>
        <Button onClick={onEdit}>
            <FaEdit /> Editar
        </Button>
      


   </>
  );
}

