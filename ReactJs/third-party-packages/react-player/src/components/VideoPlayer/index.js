import ReactPlayer from 'react-player'
import './index.css'

const VideoPlayer=()=>(
    <div className='video-player-app'>
        <h1 className='title'>Gani Video Player</h1>
        <div className='responsive-container'>
            <ReactPlayer url="https://www.youtube.com/watch?v=-CwzaTKniH4"/>
        </div>
    </div>
)

export default VideoPlayer