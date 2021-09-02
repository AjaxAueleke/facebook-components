import "./App.css";
import PostImage from "./Components/PostImage";
import PostText from "./Components/PostText";
import ReactionBar from "./Components/ReactionBar";
import User from "./Components/User";

function App() {
  return (
    <div>
      <User
        name="Ahmed"
        img="https://images.unsplash.com/photo-1630446558530-b204617fd4ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        date={new Date()}
      />
      <PostText text="“Acha initially when Rohit was bursting onto the scene. Rohit Sharma ka naam bohat tha. Everyone said, yeh ek player araha hai. Bari curiosity thi, yar young player toh hum bhi hain. Aisa kon hai, humari koi baat he nahi kar raha!? Phir t20 WC mai usay batting karte dekha, tou mai aisay beth gaya sofa pe.”" />
      <PostImage
        imgSrc="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
        altText="Some random image"
      />
      <ReactionBar />
    </div>
  );
}
export default App;
