import React from 'react';
import './App.css';



class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      caption: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const imageInfo = this.state;
    this.props.addImage(imageInfo);
    // console.log(imageInfo);
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value});
    // console.log(event.target.value);
  }

  render() {

    return (
      <form className="col" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="image">Enter image URL.</label>
          <input type="url" className="form-control" id="image" name="image" value={this.state.image} onChange={this.handleInput}/>
          <label htmlFor="caption">Enter caption.</label>
          <input type="text" className="form-control" id="caption" name="caption" value={this.state.caption} onChange={this.handleInput}/>
        </div>
        <button className="btn btn-primary">Add Student</button>
    </form>
    )
  }
}


class ImageList extends React.Component{
  render() {
    console.log('this is a test ', this.props.images);
    const images = this.props.images.map((image, index) => <li className='col-4' key={index}><img src={image.image} alt="#"/><p>{image.caption}</p></li>)
    return(
      <ul className="row no-gutters">{images}</ul>
    )
  }
};



class ImageBoard extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      images: [],
    }
    this.addImage = this.addImage.bind(this);
  }

  addImage(image) {
    console.log('image', image);
    const images = [...this.state.images];
    images.push(image);
    this.setState({images});
    console.log(this.state.images);
  }

  render() {
    return(
      <div className='container'>
        <ImageForm addImage={this.addImage}/>
        <ImageList images = {this.state.images}/>
      </div>
  )
  }
}

export default ImageBoard;
