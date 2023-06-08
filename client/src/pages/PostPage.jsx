import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {AiTwotoneEdit, AiFillDelete} from 'react-icons/ai'
import Moment from 'react-moment'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import axios from '../utils/axios'
import { removePost } from '../redux/features/post/postSlice'

export const PostPage = () => {
    const [post, setPost] = useState(null)

    const navigate = useNavigate()
    const params = useParams()
    const dispatch = useDispatch()

    const removePostHandler = () => {
        try {
            dispatch(removePost(params.id))
            toast('Пост был удален')
            navigate('/posts')
        } catch (error) {
            console.log(error)
        }
    }



    const fetchPost = useCallback(async () => {
        const { data } = await axios.get(`/posts/${params.id}`)
        setPost(data)
    }, [params.id])

    useEffect(() => {
        fetchPost()
    }, [fetchPost])


    if (!post) {
        return (
            <div >
                Загрузка...
            </div>
        )
    }
    return (
        <div className='postItem'>
            <h5 className="text-center display-3 postH"> {post.title} </h5>
                <div className='text-center'>
                    <Moment date={post.createdAt} format='D MMM YYYY' className='postText text-center  fs-3' />
                </div>
            <div className="row" >
                <div className='col md-3 offset md-1 '>
                    {post.imgUrl && (
                        <img
                            src={`http://localhost:4444/${post.imgUrl}`}
                            alt='img'
                            className="imgBook "
                        />
                    )}
                 </div>   
                    <div className='col md-7 '>
                    <p className=" postText text-start fs-4 fw-bold"> {post.author} </p>
                      <p className=" postText text-start fs-3"> {post.text} </p>
                      <figure className="text-center">
                            <blockquote className="blockquote">
                                <p className=" postText fs-2">{post.cite}</p>
                                </blockquote>
                                    </figure>
                           <p className="text-lg postText postTag fw-bold fs-3 text-end ">{post.tag}</p>
                    </div>
                </div>
                <div className = "row p-3">
                    <div className = "col -md-2">
            <button >
                <Link  to={'/'}>
                    Назад
                </Link>
            </button>
            </div>
            </div>
            <div className = "row p-3">
                    <div className = "col - md-4">
                                    <button className="btn  btn-lg PostBt" >
                                    <Link to={`/${params.id}/edit`}>
                                        <AiTwotoneEdit />
                                    </Link>
                         </button>
                                <button className="btn  btn-lg PostBt"
                                    onClick={removePostHandler}
                                >
                                    <AiFillDelete />
                                </button>
                                </div>
                                </div>
                                </div>
    )
}