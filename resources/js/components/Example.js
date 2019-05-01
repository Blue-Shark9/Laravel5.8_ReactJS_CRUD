import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


export default class Example extends Component {
    constructor(){
        super();
        this.state = {
            news:[],
            title: '',
            body: '',
            flag: ''
        };
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleChangeBody(e){
        this.setState({
            body : e.target.value
        });
    }
    handleChangeTitle(e){
        this.setState({
            title : e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        axios.post('/addNews',{
            title:this.state.title,
            body: this.state.body
        })
        .then(res=>{
            console.log(res.data);
            this.setState({
                news:res.data,
                title: '',
                body: ''
            });
        });
    }
    handleDelete(id){
        axios.get('/delNews/'+id).then(response=>{
            this.setState({news:response.data});
        });
    }
    handleEdit(id){

    }
    componentDidMount(){
        axios.get('/news').then(response=>{
            this.setState({news:response.data});

        }).catch(error=>{
            console.log(error);
        });
    }
    render() {
        return (
            <div class="container">
                <form onSubmit={this.handleSubmit}>
                    <p>Title:<input type='text' onChange={this.handleChangeTitle} value={this.state.title}/></p>
                    Body:<textarea onChange={this.handleChangeBody} value={this.state.body}></textarea>
                    <button type="submit" class="btn btn-xs btn-primary">Add News</button>
                </form>  
                <table class="table table-bordered">
                    <thead>
                        <th>#</th>
                        <th class="col-span-2">Title</th>
                        <th  class="col-span-7">Content</th>
                        <th  class="col-span-2">Actions</th>

                    </thead>
                    <tbody>
                    {
                        this.state.news.map(
                            (data,index) => 
                            <tr>
                                <td>{index+1}</td>
                                <td>{data.title}</td>
                                <td>{data.body}</td>
                                <td>
                                    <button class="btn btn-xs btn-info" onClick={()=>this.handleEdit(data.id)}>Edit</button>
                                    <button class="btn btn-xs btn-danger" onClick={()=>this.handleDelete(data.id)}> Delete </button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
