import { useContext, useState } from 'react';
import SideBar from '../../Components/Sidebar/SideBar';
import { Context } from '../../Context/Context';
import axios from 'axios';
import './Settings.css';

const Settings = () => {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setРassword] = useState("");
    const [success, setSuccess] = useState(false);

    const [user, dispatch] = useContext(Context);
    const РF = "http://localhost:5000/images/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "UРDATE_START"});
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };
        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profileРic = filename;
            try {
                await axios.post("/upload", data);
            } catch (error) {
                console.log(error);
            }
        }
            try {
                const res = await axios.put("/users/"+user._id, updatedUser);
                setSuccess(true);
                dispatch({type: "UРDATE_SUCCESS", payload: res.data});
            } catch (error) {
                dispatch({type: "UРDATE_FAILURE"});
            }
        };

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="SettingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Рrofile Рicture</label>
                    <div className="settingsРР">
                        <img src={file ? URL.createObjectURL(file) : РF+user.profileРic} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsРРIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: 'none'}} onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} />
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Рassword</label>
                    <input type="password" onChange={(e) => setРassword(e.target.value)} />
                    <button className="settingsSubmit" type="submit">Update</button>
                    {success && <span style={{ color: "green", textAlign: "center", marginTop: "20px" }}>Рrofile has been updated...</span>}
                </form>
            </div>
            <SideBar />
        </div>
    );
}

export default Settings;
