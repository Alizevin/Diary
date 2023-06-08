import { Layout } from './components/Layout.jsx'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { PostPage } from './pages/PostPage'
import { AddPostPage } from './pages/AddPostPage'
import { EditPostPage } from './pages/EditPostPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
    }, [dispatch])

    return (
        <Layout>

            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/:id' element={<PostPage />} />
                <Route path=':id/edit' element={<EditPostPage />} />
                <Route path='new' element={<AddPostPage />} />
                
                

 


            </Routes>
            <ToastContainer position='bottom-right' />

        </Layout>
    )
}

export default App
