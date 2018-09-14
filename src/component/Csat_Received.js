import React from 'react';
import cr from '../media/03_Csat received.png'

class CsatReceived extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.props.history.push({
                pathname: '/projectdetails',
                state: { apidata: this.props.location.state.apidata }
            })
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
export default CsatReceived;