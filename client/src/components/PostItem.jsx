import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

export const PostItem = ({ post }) => {
    if (!post) {
        return (
            <div className=' text-center  '>
                Загрузка...
            </div>
        )
    }
    return (
        <Link to={`/${post._id}`} style={{ textDecoration: 'none' }}>
         <div class="container-fluid">       
            <div className='postItem'>
                <div className='row '>
                    <h5 className=" p-5 text-center display-4 postH"> {post.title} </h5>
                </div>    
                <div className="row " >
                    <div className='col-md-4 '>
                    {post.imgUrl && (
                        <img
                            src={`http://localhost:4444/${post.imgUrl}`}
                            alt='img'
                            className="imgBook img-thumbnail img-fluid "
                        />
                    )}
                    </div>
                    <div className='col-md-7 '>
                        <div className='text-end'>
                            <Moment date={post.createdAt} format='D MMM YYYY' className='postText text-center  fs-4' />
                            </div>

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
                </div>

            </div>
        </Link>
    )
}
