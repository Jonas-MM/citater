import React, { Component } from 'react'


class AddCitat extends Component {
    state = {
        content: '',
        navn: null,
        alder: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
    }

    deleteCitat = (id) => {
        let citater = this.state.citater.filter(citat =>{
          return citat.id !== id 
        });
        this.setState({
          citater: citater
        })
      }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCitat(this.state);

        //reset state
        // this.setState({
        //     content:''
        // })
        console.log(this.state)
    }
    render() {
        return (
             <div>
                 <form onSubmit={this.handleSubmit}>
                     <label htmlFor="content">Tilføj citat</label>
                     <input type="text" id="content" onChange={this.handleChange} value={this.state.content} />
                     
                     <label htmlFor="content">Tilføj Navn</label>
                     <input type="text" id="navn" onChange={this.handleChange} />

                     <label htmlFor="content">Tilføj årstal</label>
                     <input type="text" id="alder" onChange={this.handleChange} />

                     
                 </form>
             </div>
        );
    }
}

export default AddCitat