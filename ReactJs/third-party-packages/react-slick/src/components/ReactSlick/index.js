import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const settings = {
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

const ReactSlick=()=>(
    <div className='app-container'>
        <h1 className='title'>Courses Available</h1>
        <div className='slick-container'>
        <Slider {...settings}>
            <div className='slide-item'>
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" alt="react js" className='slide-image'/>
            </div>
            <div className='slide-item'>
                <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220630132824/HTML-Full-Form.jpg" alt="html" className='slide-image'/>
            </div>
            <div className='slide-item'>
                <img src="https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg" alt="javascript" className='slide-image'/>
            </div>
            <div className='slide-item'>
                <img src="https://www.ntuclearninghub.com/documents/39367/4216797/Python-Symbol.png/369e410e-a90f-f887-c2dc-61f7ef761476/" alt="python" className='slide-image'/>
            </div>
        </Slider>
    </div>
    </div>
)

export default ReactSlick