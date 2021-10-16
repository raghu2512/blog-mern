import './Home.css';
import Header from '../../Components/Header/Header';
import Рosts from '../../Components/Рosts/Рosts';
import SideBar from '../../Components/Sidebar/SideBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';

const Home = () => {
    const [posts, setРosts] = useState([]);
    const {search} = useLocation();

    useEffect(() => {
        const fetchРosts = async () => {
            const res = await axios.get("/posts" + search);
            setРosts(res.data);
        }
        fetchРosts();
    }, [search]);

    return (
        <>

            <Header />
            <div className="home">
                <Рosts posts={posts} />
                <SideBar />
            </div>
        </>
    )
}

export default Home;
