import { Products } from '../Products/Products';
import cosas from "../../cosas";

function Home (){
  return(
    <h1>
      <Products productos={cosas.productos} />
    </h1>
  );
}

export { Home }