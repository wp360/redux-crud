import React from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {saveMovie} from './actions';

class MoviesForm extends React.Component{
    constructor(){
        super();
        this.state = {
        title: '',
        cover: '',
        errors: {},
        loading: false,
        done:false
        };
    }

    handleChange = (e) => {
        if(!!this.state.errors[e.target.name]){
            let errors = Object.assign({},this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]: e.target.value,
                errors
            });
        } else {
            this.setState({[e.target.name]:e.target.value});
        }
    }

    handleSumbit = (e) => {
        e.preventDefault();
        //验证
        let errors = {};
        if(this.state.title === '') errors.title = "请填入电影片名";
        if(this.state.cover === '') errors.cover = "请填入电影海报图片地址";
        this.setState({ errors });
        const isValid = Object.keys(errors).length === 0;
        //isValid true
        if(isValid){
            const {title,cover} = this.state;
            this.setState({loading:true});
            this.props.saveMovie({title,cover}).then(
                ()=>{this.setState({done:true})},
                (err)=>err.response.json().then(({errors})=>this.setState({errors,loading:false}))
            );
        }
    };
    
    render(){
        const form = (
            <form className={classnames('ui','form',{loading:this.state.loading})} onSubmit={this.handleSumbit}>
                <h1>添加新电影</h1>
                {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}
                <div className={classnames('field',{error:!!this.state.errors.title})}>
                    <label htmlFor="title">标题</label>
                    <input id="title" name="title" value={this.state.title} onChange={this.handleChange} />
                    <span>{this.state.errors.title}</span>
                </div>
                <div className={classnames('field',{error:!!this.state.errors.cover})}>
                    <label htmlFor="cover">海报图片地址</label>
                    <input id="cover" name="cover" value={this.state.cover} onChange={this.handleChange} />
                    <span>{this.state.errors.cover}</span>
                </div>
                <div className="field">
                    {this.state.cover !=='' && <img src={this.state.cover} alt="海报" className="ui small bordered image" />}
                </div>
                <div className="field">
                    <button className="ui primary button">保存</button>
                </div>
            </form>
        );
        return(
            <div>
                {this.state.done?<Redirect to="/movies" />:form}
            </div>
        );
    }
}

export default connect(null,{saveMovie})(MoviesForm);