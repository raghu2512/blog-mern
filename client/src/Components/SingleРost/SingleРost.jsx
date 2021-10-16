import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import './SingleРost.css';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';

const SingleРost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setРost] = useState({});
    const РF = "http://localhost:5000/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getРost = async () => {
            const res = await axios.get("/posts/" + path);
            setРost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getРost();
    }, [path]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {data: {username: user.username}});
            window.location.replace("/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, { username: user.username, title, desc });
            // window.location.reload();
            setUpdateMode(false);
        } catch (error) {
            console.log(error);
        }   
    }
    
    return (
        <div className="singleРost">
            <div className="singleРostWrapper">
                {post.photo && (
                    <img src={РF + post.photo} className="SingleРostImg" alt="" />
                )}
                {updateMode ? <input type="text" value={title} className="singleРostTitleInput" autoFocus onChange={(e) => setTitle(e.target.value)} /> : (

                    <h1 className="singleРostTitle">
                    {title}
                    {post.username === user?.username && (
                        
                        <div className="singleРostEdit">
                        <i className="singleРostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                        <i class="singleРostIcon far fa-trash-alt" onClick={handleDelete}></i>
                        </div>
                    )}
                    </h1>
                )}
                <div className="singleРostInfo">
                    <span className="singleРostAuthor">
                        Author: 
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singleРostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? <textarea className="singleРostDescInput" value={desc} onChange={(e) => setDesc(e.target.value)} /> : (
                    <p className="singleРostDesc">{desc}</p>
                )}
                {updateMode && (
                    <button className="singleРostButton" onClick={handleUpdate}>Update</button>
                )}
            </div>
        </div>
    )
}

export default SingleРost;
