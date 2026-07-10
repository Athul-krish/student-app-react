
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css'
import AddStudents from './components/AddStudents'
import DeleteStudents from './components/DeleteStudents'
import SearchStudents from './components/SearchStudents'
import ViewStudents from './components/ViewStudents'

function App() {

  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddStudents/>}/>
      <Route path='/delete' element={<DeleteStudents/>}/>
      <Route path='/search' element={<SearchStudents/>}/>
      <Route path='/view' element={<ViewStudents/>}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
