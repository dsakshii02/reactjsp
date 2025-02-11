import UserCard from"./Components/UserCard.jsx"
import elon from './assets/elon.jpg'
import mark from './assets/mark.jpg'
import trump from './assets/trump.jpg'
function App() {
  

  return (
   <div className='container'>
   <UserCard name ='Elon' desc='Heyy I am learning' image={elon}/>
   <UserCard name='Mark' desc='hey I am alo learning'image={mark}/>
   <UserCard name='Trump' desc='I know everything' image={trump}/>
   
   </div>
  )
}

export default App
