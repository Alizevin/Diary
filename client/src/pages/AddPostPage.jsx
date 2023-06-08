import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../redux/features/post/postSlice'

export const AddPostPage = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [image, setImage] = useState('')
    const [author, setAuthor] = useState('')
    const [cite, setCite] = useState('')
    const [tag, setTag] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const submitHandler = () => {
        try {
            const data = new FormData()
            data.append('title', title)
            data.append('text', text)
            data.append('tag', tag)
            data.append('image', image)
            data.append('author', author)
            data.append('cite', cite)
            dispatch(createPost(data))
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    const clearFormHandler = () => {
        setText('')
        setTitle('')
    }

    return (
    <form  className="AddPage " onSubmit={(e) => e.preventDefault()}>
        <div className='container-fluid'>
        <div className=" row justify-content-center d-flex">
            <div className = "col-md-8 ">
                <label for="formFileLg" className="form-label ">
                     Обложка
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/>
  <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
</svg>

                </label>
            </div>
         </div>
        <div className=" row mb-5 justify-content-center d-flex ">
            <div className = "col-md-10 align-self-center">
                <input className="form-control form-control-lg" id="formFileLg" type="file"                     onChange={(e) => setImage(e.target.files[0])}/> 
            </div>
        </div>
        <div className=" row mb-5 justify-content-center d-flex ">
            <div className = "col-md-10 align-self-center">
            {image && (
            <img src={URL.createObjectURL(image)} alt={image.name} />
            )}
            </div>
        </div>


        <div className=" row mb-5 justify-content-center d-flex ">
            <div className = "col-md-10 align-self-center">
                <div className="input-group lg">
                    <span className="input-group-text" id="basic-addon1">Название</span>
                        <input 
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        class="form-control"  
                        aria-describedby="basic-addon1"/>
                </div>
            </div>
        </div>        

        <div className=" row mb-5 justify-content-center d-flex ">
            <div className = "col-md-10 align-self-center">
                <div className="input-group lg">
                    <span className="input-group-text" id="basic-addon1">Комментарий</span>
                        <input 
                        type="text"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        class="form-control"  
                        aria-describedby="basic-addon1"/>
                </div>
            </div> 
        </div>

        <div className=" row mb-5 justify-content-center d-flex ">
            <div className = "col-md-10 align-self-center">
                <div className="input-group lg">
                    <span className="input-group-text" id="basic-addon1">Автор</span>
                        <input 
                        type="text"
                        onChange={(e) => setAuthor(e.target.value)}
                        value={author}
                        class="form-control"  
                        aria-describedby="basic-addon1"/>
                </div>
            </div> 
        </div>

        <div className=" row mb-5 justify-content-center d-flex ">
            <div className = "col-md-10 align-self-center">
                <div className="input-group lg">
                    <span className="input-group-text" id="basic-addon1">Цитата</span>
                        <input 
                        type="text"
                        onChange={(e) => setCite(e.target.value)}
                        value={cite}
                        class="form-control"  
                        aria-describedby="basic-addon1"/>
                </div>
            </div> 
        </div>               
               

             
               

        <div className=" row mb-5 justify-content-center d-flex ">
            <div className = "col-md-10 align-self-center">
                <div class="form-check form-check-inline ">
                        <input 
                    type="radio"
                    name="tag"
                    onChange={(e) => setTag(e.target.value)}
                    value="Прочитано"
                    class="form-check-input" 
                     id="inlineRadio1" />
                        <label 
                        class="form-check-label" for="inlineRadio1">Прочитано
                    </label>
                </div>
                <div class="form-check form-check-inline  ">
                    <input 
                    type="radio"
                    name="tag"
                    onChange={(e) => setTag(e.target.value)}
                    value="Хочу прочитать"
                    class="form-check-input" 
                     id="inlineRadio1" />
                    <label 
                    class="form-check-label" for="inlineRadio1">Хочу прочитать
                    </label>
                </div>
            </div>
        </div>        
 
        <div className=" row mb-5 justify-content-center d-flex">
            <div className = "col-md-3 align-self-center d-flex">
                <button
                    type="button"
                    onClick={submitHandler}
                    className='btn btn-outline-primary btn-lg btnAddPage'
                    >
                    Записать
                </button>
            </div>    
            <div className = "col-md-5 align-self-start d-flex">
                <button
                type="button"
                onClick={clearFormHandler}
                className='btn btn-outline-primary btn-lg btnAddPage'>
                Отменить
                </button>
            </div>
        </div>
        </div>
            
        </form>
    )
}