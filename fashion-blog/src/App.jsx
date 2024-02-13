import { useState } from 'react'
import './App.css'
import Header from './Header';
import Blog from './Blog';
import Footer from './Footer';
import image1 from "../../images/blog-image-1.jpg";
import image2 from "../../images/blog-image-2.jpg";

const hLinks=[
  {href:"...", text: "Women's"},
  {href:"...", text: "Men's"},
  {href:"...", text: "On the Street"},
  {href:"...", text: "The Catwalk"},
  {href:"...", text: "AdWatch"},
  {href:"...", text: "About"}

]
const article1 =[
  {image: image1 ,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio dolorum eum! Nobis, debitis? Saepe error nihil placeat sint officia minus doloremque. Similique totam culpa perspiciatis id repellat quasi vero laudantium fugiat amet doloribus enim earum et sapiente necessitatibus voluptatem fugit suscipit magnam eligendi, aperiam itaque sed, quae accusamus nobis. Velit, dolorem quaerat laborum voluptatibus eaque eveniet impedit explicabo labore esse numquam commodi laudantium mollitia reiciendis odit, sapiente voluptates maiores ab aliquid minus aliquam. Deleniti tempora ea corrupti porro quis id dolore eveniet aliquid natus nostrum et, suscipit praesentium excepturi harum assumenda nihil nemo ipsa atque eum? Est temporibus dignissimos veniam enim? Cumque quibusdam qui sapiente aperiam doloremque repudiandae! Itaque, doloremque, labore accusantium quo rerum soluta sint placeat sed quibusdam in reiciendis rem, velit hic dolorem? Quisquam praesentium officiis voluptate illo doloremque ipsa reprehenderit ipsam et quam dolorum. Doloribus dolore similique numquam cupiditate soluta, accusantium esse impedit. Dolores eligendi omnis porro reprehenderit iste. Dolorem, ad est dicta quo quas nesciunt veniam earum laudantium amet, velit eius odio consequuntur? Nemo, incidunt! At nam tempora eius possimus temporibus, nisi repudiandae? Veritatis, blanditiis vel quod alias reiciendis iusto explicabo ipsa, facilis atque distinctio commodi deserunt ipsam iste tempora est aliquam unde dolorum dolorem!", date: "11/12/20", title:"On The Street in Brooklyn"}, {image:image2,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio, enim neque porro nisi quibusdam et, dolores ipsam unde maiores aspernatur. Est sunt dicta perferendis officia neque aspernatur facere rerum, blanditiis in odit? Inventore illo placeat magnam ab, esse quisquam voluptas laborum fugiat earum cupiditate! Distinctio doloribus fugiat dignissimos beatae in enim est voluptas! Corrupti officia laborum laboriosam. Omnis deserunt enim ipsa, labore adipisci praesentium consequatur veritatis dolorum architecto eligendi quasi! Harum ducimus laboriosam adipisci illo! Temporibus minus, iste tempora aliquid praesentium molestias laborum, eveniet quo nam velit saepe voluptatem non esse voluptas doloremque perferendis maiores accusamus quae laboriosam vitae?", date:"11/11/20", title:"Vintage in Vogue"}
]
 
const fLinks=[
  {href:"...", text: "Home"},
  {href:"...", text: "Women's"},
  {href:"...", text: "Men's"},
  {href:"...", text: "On the Street"},
  {href:"...", text: "The Catwalk"},
  {href:"...", text: "AdWatch"},
  {href:"...", text: "About"},
  {href:"...", text: "Tips"}

]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header links={hLinks} titles={[{main:"Satre's List", sub:"Better-Dressed People"}]} />
    < Blog articles={article1}/>
    <Footer links={fLinks} />

     
        
       
    </>
  )
}

export default App
