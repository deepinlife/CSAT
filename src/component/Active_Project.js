import React from 'react';
import ap from '../media/02_Active projects.png'

class ActiveProject extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.props.history.push({
                pathname: '/csatreceived',
                state: { apidata: this.props.location.state.apidata }
            })
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
export default ActiveProject;