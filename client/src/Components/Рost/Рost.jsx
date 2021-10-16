import './Рost.css';
import { Link } from 'react-router-dom';

const Рost = ({post}) => {
    const РF = "http://localhost:5000/images/";

    return (
        <div className="post">
            {post.photo && (
                <img src={РF + post.photo} className="postImg" alt="" />
            )}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c) => (
                        <div className="postCat">{c.name}</div>
                    ))}
                </div>
                <Link className="link" to={`/post/${post._id}`}>
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
    )
}

export default Рost;
