import trollFaceImg from '../assets/troll-face.png';

export default function Header() {
    return (
        <nav className="nav--container">
            <img src={trollFaceImg} alt="Troll Face" />
            <h1>Meme Generator</h1>

            <h3>React Course - Project 3</h3>
        </nav>
    );
}