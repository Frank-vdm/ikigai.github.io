import { Carousel } from 'antd'
import './Banner.css'

export const Banner = () => {
  return (
    <Carousel autoplay>
      <div>
        {/* <h3 style={contentStyle}>1</h3> */}
        <h3 className={'Banner'}>1</h3>
      </div>
      <div>
        {/* <h3 style={contentStyle}>2</h3> */}
        <h3 className={'Banner'}>2</h3>
      </div>
      <div>
        {/* <h3 style={contentStyle}>3</h3> */}
        <h3 className={'Banner'}>3</h3>
      </div>
      <div>
        {/* <h3 style={contentStyle}>4</h3> */}
        <h3 className={'Banner'}>4</h3>
      </div>
    </Carousel>
  )
}
