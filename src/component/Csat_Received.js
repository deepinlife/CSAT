import React from 'react';
import { connect } from 'react-redux';

import cr from '../media/03_Csat received.png'

class CsatReceived extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.next();
        }, 5000);
    }
    render() {
        return (
            <div>
                <img src={cr} width='100%' height="50%"></img>
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
export default connect(null, mapDispatchToPropsCsat)(CsatReceived);