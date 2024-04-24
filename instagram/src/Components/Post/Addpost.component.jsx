import React, { useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux"
import { addPost, fetchPosts, uploadImage } from '../../redux/PostSlice/postSlice';

const Addpost = ({ setOpenModalAdd }) => {
    const [file, setFile] = useState();
    const [fileData, setFileData] = useState();
    const [text, setText] = useState("");

    const dispatch = useDispatch()

    const user = useSelector(store => store?.auth?.currentUser)

    const handleSubmit = (e) => {
        e.preventDefault()


        const formData = new FormData();
        formData.append("files", fileData);

        dispatch(uploadImage(formData))
            .then((response) => {
                dispatch(addPost({media:response?.payload?.data[0]?.id, text:text, user_profile:user?.id}))
            }).then(() => {
                dispatch(fetchPosts());
                setOpenModalAdd(false);
                setFile(null);
                setFileData(null);
                setText('')
            })
    }

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        setFileData(e.target.files[0])
    }

    return (
        <div className='add-post-modal-container'>
            <span onClick={() => setOpenModalAdd(false)}>X</span>

            <form onSubmit={handleSubmit}> <input type="file" name="media" id="media" onChange={handleChange} />
                <img src={file} />
                <input type="text" name='text' onChange={(e) => setText(e.target.value)} />
                <input type="submit" value="Add Post" /></form>
        </div>
    )
}

export default Addpost