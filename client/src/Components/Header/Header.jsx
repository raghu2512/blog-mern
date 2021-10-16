import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="https://cdn.pixabay.com/photo/2020/03/06/08/00/laptop-4906312_960_720.jpg" className="headerImg" alt="" />
        </div>
    )
}

export default Header;
