
import Header from './components/Header'
import Main from './components/Main'

import styles from './page.module.css'



export default function Home() {
  return (
    <div className='mx-auto flex flex-col justify-center items-center mt-20 max-w-md'>
    <Header/>
    <Main/>
    
    </div>
  )
}
