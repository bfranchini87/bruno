import React from 'react';
import Cards from './cards'

class Main extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            elements: [],
            newTitle:''
        };
    }
 
    handleSubmit() {
        const title = this.state.newTitle
        let list = this.state.elements
        list.push(title)
        this.setState({ elements: list })
        /* console.log(this.state.elements) */
    }

    renderPipeline() {
        const lista = this.state.elements
        const render = lista.map((pipeline, index) => {
            return (
                <Cards key={index} title={pipeline} deletePipeline={this.removePipeline.bind(this)}/>
            )
        })
        return render
    }

    removePipeline(elements) {
        const borrar = this.state.elements;
        const position = borrar.indexOf(elements);
        this.setState({
            elements: borrar.filter(
                (el, index) => index !== position
            ),
        })
    }

    render() {
        return (
            <div>
                <div className='container pt-5'>
                    <div>
                        <form>
                            <input type='text' onChange={(event) => this.setState({newTitle: event.target.value})}/>
                        </form>
                    </div>
                    <div className='my-3'>
                        <button type='button' onClick={() => this.handleSubmit()} className='btn btn-success'>New to do</button>
                    </div>
                </div>
                <div>
                    {this.renderPipeline()}
                </div>
            </div>
        )
    }
}
export default Main;