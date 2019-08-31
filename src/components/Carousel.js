import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Tea1 from '../Photos/Tea1.jpg'
import Tea2 from '../Photos/Tea2.jpg'
import Tea3 from '../Photos/Tea3.jpg'

export class Carousek extends Component {
    render() {
        return (
            <div>
                <Carousel className="Carousel">
                    <Carousel.Item bsPrefix={{marginRight:'100px'}}>
                    <div className="Block">
                        <img src={Tea1} alt="Slide 1"></img>
                    </div>
                    <Carousel.Caption>
                        <h3>Time to give yourself a break</h3>
                        <p>A genuine tea with an aroma that releases all
                            your worries.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="Block">
                        <img src={Tea2} alt="Slide 2"/>
                    </div>

                    <Carousel.Caption>
                        <h3>Earl grey tea</h3>
                        <p>A delightful tea blend flavored with the oil of bergamot.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="Block">
                        <img src={Tea3} alt="Slide 3"/>
                    </div>

                    <Carousel.Caption>
                        <h3>Order your favourite tea blend</h3>
                        <p>Personally made tea blends for every mood.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                
            </div>
        )
    }
}

export default Carousek
