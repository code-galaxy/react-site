import './Home.css';
import my_foto from "./images/my_foto.jpg";

export default function Home() {
   return (
      <div className="Home-site">
         <div className="home-congratulation">I am glad to welcome everyone to my page.</div>
         <div className='home-container'>
        
         <div className='home-my-foto' >
            {/* <img className='my-foto' src={my_foto} alt="Yaroslav Karpash" title='Yaroslav' /> */}
         </div>
         <div className='home-me-info'>
            <p> I want to introduce myself.</p>
               <p>My name is Yaroslav Karpash. </p>
               <p>I am software React developer.</p>
               <p>I am sociable and goal-oriented.</p>
               <p>I am not afraid to take responsibility. </p>
               <p>I am not afraid to make mistakes and I know how to solve complex problems.</p>
               <p>My credo - "Whatever you do, do it properly."</p>
         </div>
         </div>
         <div><p>«Challenges are what make life interesting and overcoming them is what makes life meaningful»</p></div>
      </div>
   )
}