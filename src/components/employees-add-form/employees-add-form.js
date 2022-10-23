import { Component } from 'react';
import './employees-add-form.css'

class EmployeesAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addNew = (e) => {
        e.preventDefault();
        if(this.state.name.length > 3 && this.state.salary > 0) {
            e.preventDefault();
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: ''
            })
        }
    }

    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Yeni işçi əlavə et</h3>
                <form onSubmit={this.addNew}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="İşçinin adı?"
                        name="name"
                        value={name} 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Maaş $?"
                        name="salary"
                        value={salary} 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                        className="btn btn-outline-light">Əlavə et</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;