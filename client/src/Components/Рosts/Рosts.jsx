import './Рosts.css';
import Рost from '../Рost/Рost'; 

const Рosts = ({posts}) => {
    return (
        <div className="posts">
            {posts.map((p) => (
                <Рost post={p} />
            ))}
        </div>
    )
}

export default Рosts;
