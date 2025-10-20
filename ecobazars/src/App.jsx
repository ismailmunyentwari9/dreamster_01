
import './App.css'
import Nav from './components/nav'
import Home from './pages/home'

function App() {
const categories =[
  {
    title:'Fresh Fruit',
    image:'./assets/image 1.png'
  },
  {
    title:'Fresh Vegetables',
    image:'./assets/image 2.png'
  },
  {
    title:'Meat & Fish',
    image:'./assets/image 3.png'
  },
  {
    title:'Snacks',
    image:'./assets/image 4.png'
  },
  {
    title:'Beverages',
    image:'./assets/image 5.png'
  },
  {
    title:'Beauty & Health',
    image:'./assets/image 6.png'
  },
  {
    title:'Bread & Bakery',
    image:'./assets/image 7.png'
  },
  {
    title:'Cooking',
    image:'./assets/image 8.png'
  },
  {
    title:'Diabetic Food',
    image:'./assets/image 9.png'
  },
  {
    title:'Dish Detergents',
    image:'./assets/image 10.png'
  }
  
]

  return (
    <>
     <Nav/>
     <Home categoryArray={categories}/>
    </>
  )
}

export default App
