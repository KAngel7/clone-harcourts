import * as React from 'react';
import './style.css';

interface SlideShowProps {
  slide: Array<{
    imgUrl: string;
    title: string;
    info: string;
  }>;
  autoSlide?: boolean;
}

interface SlideShowState {
  activeIndex: number;
}

class SlideShow extends React.Component<SlideShowProps, SlideShowState> {
  mainImg: HTMLImageElement | null;
  fadeImg: HTMLImageElement | null;
  mainOpacity = 1;
  isFading = false;
  constructor(props: SlideShowProps) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  clickSlideImage = (index: number) => {
    if (index === this.state.activeIndex) {
      return;
    }
    this.setState({
      activeIndex: index
    });
    if (this.fadeImg) {
      this.fadeImg.src = this.props.slide[index].imgUrl;
    }
    this.isFading = true;
    let startTime: number;
    const fadeImage = (timestamp: number) => {
      if (!this.isFading) {
        return;
      }
      if (!startTime) {
        startTime = timestamp;
      }
      const delta = (timestamp - startTime) * 0.002;
      this.mainOpacity -= delta;
      if (this.mainImg) {
        this.mainImg.style.opacity = this.mainOpacity.toString();
        startTime = timestamp;
        if (this.mainOpacity < 0.1) {
          this.mainImg.style.opacity = '1';
          this.mainImg.src = this.props.slide[this.state.activeIndex].imgUrl;
          this.mainOpacity = 1;
          this.isFading = false;
        }
        requestAnimationFrame(fadeImage);
      }
    };
    requestAnimationFrame(fadeImage);
  }
  render() {
    return (
      <div className="slideShow">
        <div className="slideShowContainer">
          <div className="mainSlide">
            <div className="imgWrapper">
              <a href="#!">
                <img
                  src={this.props.slide[0].imgUrl}
                  ref={(img) => { this.fadeImg = img; }}
                  className="fadeImg"
                />
                <img
                  src={this.props.slide[0].imgUrl}
                  ref={(img) => { this.mainImg = img; }}
                  className="mainImg"
                />
              </a>
            </div>
            <div className="mainSlideInfo">
              <h3 className="mainSlideInfoTitle">{this.props.slide[this.state.activeIndex].title}</h3>
              <h3 className="mainSlideInfoSubInfo">{this.props.slide[this.state.activeIndex].info}</h3>
            </div>
          </div>
          <div className="subSlide">
            <ul>
              {this.props.slide.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={(e) => { this.clickSlideImage(index); }}
                    className={this.state.activeIndex === index ? 'active' : ''}
                  >
                    <a href="#!">
                      <img src={item.imgUrl} />
                      <span className="subSlideTitle">{item.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SlideShow;