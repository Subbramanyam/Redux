
import React,{ Component } from 'react';
import AddPerson from '../../Componest/AddPerson/AddPerson';
import Person from '../../Componest/Person/Person';
import { connect } from 'react-redux';


class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson 
                personAdedHanler={this.props.onAddedperson} />
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onRemovePerson(person.id)}/>
                ))}
            </div>
        );
    }
}
const mapStateToProp = state => {
    console.log(state.persons)
    return {
        
        prs: state.persons
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAddedperson: () => dispatch({ type: 'ADD_PERSON' }),
        onRemovePerson: (id) => dispatch({ type: 'REMOVE_PERSON', personId: id })
    }
};

export default connect(mapStateToProp, mapDispatchToProps)(Persons);