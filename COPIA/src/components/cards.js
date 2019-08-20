import React from 'react';
import Modal from 'react-responsive-modal';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            elemento: [],
            lista: []
        }
    }

    renderList() {
        let listita = this.state.lista.map((item, index) => <li key={index}>{item}</li>)
        return listita;
    }

    handler() {
        const tarea = this.state.elemento
        let lista = this.state.lista
        lista.push(tarea)
        this.setState({ lista })
    }

    renderCard() {
        const listaTarea = this.state.lista
        const renderAcard = listaTarea.map((card, index) => {
            return (
                <li key={index}>{card}</li>
            )
        })
        return renderAcard
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };
    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const estilo = { //estilo_pipeline
            width: '20%',
            float: 'left'
        }
        const { open } = this.state;
        return (
            <div className='container'>
                <div className="card-body border" style={estilo}>
                    <button className='btn btn-danger float-right' onClick={
                        () => { this.props.deletePipeline(this.props.title) }
                    }>X</button>
                    <h3>{this.props.title}</h3>
                    <Modal open={open} onClose={this.onCloseModal} litle>
                        <h6 className='mt-5'>To do list</h6>
                        <form>
                            <input type='text' onChange={(event) => this.setState({
                                elemento: event.target.value
                            })} />
                        </form>
                        <button className='btn btn-warning float-right mt-5' onClick={() => this.handler()}>add</button>
                        {this.renderCard()}
                    </Modal>
                    {this.renderList()}
                    <button className='mt-3' onClick={this.onOpenModal}>Add to do</button>
                </div>
            </div>
        )
    }
}
export default Cards;