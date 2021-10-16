import { useContext, useState } from 'react';
import './Write.css'
import axios from 'axios';
import { Context } from '../../Context/Context';

const Write = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const {user} = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newРost = {
            username: user.username,
            title,
            desc,
        };
        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("'file", file);
            newРost.photo = filename;
            try {
                await axios.post("/upload", data);
            } catch (error) {
                console.log(error);
            }
        }
            try {
                const res = await axios.post("/posts", newРost);
                window.location.replace("/post/"+res.data._id);
            } catch (error) {
                console.log(error);
            }
        }

    return (
        <div className="write">
            {file && (
                <img src={URL.createObjectURL(file)} className="writeImg" alt="" />   
            )}
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: 'none'}} onChange={e => setFile(e.target.files[0])} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText" onChange={e => setDesc(e.target.value)}></textarea>
                </div>
                <button className="writeSubmit" type="submit">Рublish</button>
            </form>
        </div>
    )
}

export default Write;
