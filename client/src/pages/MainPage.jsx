import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostItem } from '../components/PostItem'
import { getAllPosts } from '../redux/features/post/postSlice'

export const MainPage = () => {
    const dispatch = useDispatch()
    const { posts } = useSelector((state) => state.post)


    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    if (!posts.length) {
        return (
            <div>
                Постов не существует.
            </div>
        )
    }

    return (
        <div >
            <div >
                <div >
                    {posts?.map((post, idx) => (
                        <PostItem key={idx} post={post} />
                    ))}
                </div>
                

                    
                </div>
            </div>
    )
}