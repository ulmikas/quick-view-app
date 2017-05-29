import { h, Component } from 'preact';
import style from './style.scss';

export default class GalleryImages extends Component {
  componentWillReceiveProps(nextProps) {
    this.setState({
      mainImage: nextProps.mainImage,
    });
  }

  changeImage = (e) => {
    this.setState({
      loading: true,
      mainImage: e.target.href,
    });
  }

  revertImage = (props) => {
    this.setState({
      loading: true,
      mainImage: props.mainImage,
    });
  }

  loadImage = () => {
    this.setState({
      loading: false,
    });
  }

  render(props, { mainImage }) {
    const images = props.images || [];
    const mainImg = mainImage || props.mainImage;
    return (
      <div class={(this.state.loading) ? `${style.gallery} loading` : style.gallery}>
        {(images.length) ?
          <div class={style.gallery__thumbnails} onMouseLeave={this.revertImage}>
            {images.map(img => <a href={img.url} onMouseEnter={this.changeImage}><img src={img.thumbnail} alt="" /></a>)}
          </div>
        : ''
        }
        <div class={style.gallery__main}>
          <img onLoad={this.loadImage} src={mainImg} alt="" />
        </div>
      </div>
    );
  }
}
