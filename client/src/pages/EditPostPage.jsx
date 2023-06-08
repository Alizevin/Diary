import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePost } from '../redux/features/post/postSlice';

import axios from '../utils/axios';

export const EditPostPage = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [tag, setTag] = useState('');
    const [oldImage, setOldImage] = useState('');
    const [newImage, setNewImage] = useState('');
    const [author, setAuthor] = useState('');
    const [cite, setCite] = useState('');


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const fetchPost = useCallback(async () => {
        const { data } = await axios.get(`/posts/${params.id}`)
        setTitle(data.title)
        setText(data.text)
        setTag(data.tag)
        setOldImage(data.imgUrl)
        setAuthor(data.author)
        setCite(data.cite)
    }, [params.id])

    const submitHandler = () => {
        try {
            const updatedPost = new FormData()
            updatedPost.append('title', title)
            updatedPost.append('text', text)
            updatedPost.append('id', params.id)
            updatedPost.append('image', newImage)
            dispatch(updatePost(updatedPost))
            navigate('/posts')
        } catch (error) {
            console.log(error)
        }
    }

    const clearFormHandler = () => {
        setTitle('')
        setText('')
    }

    useEffect(() => {
        fetchPost()
    }, [fetchPost])

    return (
        <form className="editPage" onSubmit={(e) => e.preventDefault()}>
        <div className='container-fluid'>
            <div className=" row mb-3 justify-content-center d-flex ">
                <div className = "col-md-8 align-self-center">
                    <label for="formFileLg" className="form-label display-5">
                        <span> Выберите новую обложку </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-box-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/>
  <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
</svg>

                    </label>
            </div>
            </div>
            <div className=" row mb-5 justify-content-center d-flex ">
            <div className = "col-md-10 align-self-center">
                <input 
                className="form-control form-control-lg" 
                id="formFileLg" 
                type="file"                     
                onChange={(e) => {
                    setNewImage(e.target.files[0])
                    setOldImage('')
                }}
                />
            </div>
        </div>

        <div className=" row mb-5 justify-content-center d-flex ">
            <div className = "col-md-10 align-self-center">
                {oldImage && (
                <img src={`http://localhost:4444/${oldImage}`}
                        alt={oldImage.name}
                    />
                )}
                {newImage && (
                    <img
                        src={URL.createObjectURL(newImage)}
                        alt={newImage.name}
                    />
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
                    <span className="input-group-text" id="basic-addon1">Автор</span>
                        <input 
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
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
                        value={cite}
                        onChange={(e) => setCite(e.target.value)}
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

                <div class="form-check form-check-inline ">
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
        <div className=" row mb-5 justify-content-center d-flex ">
            <div className = "col-md-4 align-self-center">
                <button
                    onClick={submitHandler}
                    className='btn btn-outline-primary btn-lg'
                >
                    Обновить
                </button>
            </div>
            <div className = "col-md-4 align-self-start d-flex">
            <button onClick={clearFormHandler}
            className='btn btn-outline-primary btn-lg'>
                    Отменить
                </button>
            </div>
        </div>   
        </div> 
        </form>
    )
}