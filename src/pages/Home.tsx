import { useSelector } from "react-redux";
import Collection from "../components/Collection/Collection";


const Home = () => {
      const { pizzaItems, status } = useSelector((state:RootState) => state.pizza);

  return (<>
   <Collection />
    <section>
      <h2>Best Selling Item</h2>
   
      </section>
       </>
  )
}

export default Home;