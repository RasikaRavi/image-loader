import React, { Component } from 'react';


class ImageLoader extends Component{
    constructor(){
        super()
        this.state={
            url1:'',
            url2:'',
            url3:'',
            buttonClick:false
        }
        // this.DispImage=this.DispImage.bind(this)
    }
    handleUrl1=event =>{
        this.setState({
           url1:event.target.value
        })
    }
    handleUrl2=event =>{
            this.setState({
               url2:event.target.value
            })
        }

    handleUrl3=event =>{
                this.setState({
                   url3:event.target.value
                })
        }
    
    handleSubmit=(event)=>
    {
        event.preventDefault()
        this.setState({
            buttonClick:true
        })
        
    }
        
    render(){
        return(
            <React.Fragment>
            <form onSubmit={this.handleSubmit}>
            <h1> Image Loader </h1>
                <div className='form-div'>
                <div>
                    <label> Image URL 1</label><br/>
                    <input size='50' type='text' value={this.state.url1} onChange={this.handleUrl1}/>
                </div>
                <div>
                    <lable> Image URL 2</lable><br/>
                    <input size='50' type='text' value={this.state.url2} onChange={this.handleUrl2}/>
                </div>
                <div>
                    <lable> Image URL 3</lable><br/>
                    <input size='50' type='text' value={this.state.url3} onChange={this.handleUrl3}/>
                </div>
               <br/> <button type="submit" className='btn-width'> Create </button>
               </div>
            </form>
            {this.state.buttonClick ? ( <div className='container' align="justify">
                <h1> Image List</h1>
           <div className='st-box'> <img src={this.state.url1} alt="new"/></div>
           <div className='nd-box'> <img src={this.state.url2} alt="new"/></div>
           <div className='rd-box'> <img src={this.state.url3} alt="new"/></div>
           </div>): null}
            </React.Fragment>
        )
    }
}

export default ImageLoader;