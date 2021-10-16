import { useEffect, useState } from 'react';
import axios from 'axios';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data);
        }
        getCats();
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://cdn.pixabay.com/photo/2014/02/13/07/28/wordpress-265132_960_720.jpg" alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias commodi tempora voluptas laborum inventore quos, expedita sunt nihil! Ex, minus? Dolor, modi deleniti? Corrupti, dignissimos?</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((C) => (
                        <Link to={`/?cat=${C.name}`} className="link">
                            <li className="sidebarListItem">{C.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
