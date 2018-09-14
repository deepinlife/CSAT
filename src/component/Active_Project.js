import React from 'react';
import { connect } from 'react-redux';

import ap from '../media/02_Active projects.png'

class ActiveProject extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.next();
        }, 5000);
    }
    render() {
        return (
            <div>
                <img src={ap} width='100%' height="50%"></img>
            </div>
        );
    }
}
function mapDispatchToPropsCsat(dispatch) {
    return ({
        next: () => {
            console.log("CLICK");
            dispatch({ type: "NEXT" })
        }
    });
}

export default connect(null, mapDispatchToPropsCsat)(ActiveProject);