import React from 'react';
import pn from '../media/01_Project insight.png';

class ProjectInsight extends React.Component {
    componentWillMount() {
        let maindata = this.props.location.state.apidata;
        setTimeout(() => {
            this.props.history.push({
                pathname: '/activeproject',
                state: { apidata: maindata }
            })
        }, 5000);
    }
    render() {
        return (
            <div>
                <img src={pn} width='100%' height="50%"></img>
            </div>
        );
    }
}
export default ProjectInsight;