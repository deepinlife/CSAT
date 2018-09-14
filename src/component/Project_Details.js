import React from 'react';
import pd from '../media/06_Project Details.png';

class ProjectInsight extends React.Component {
    componentWillMount() {
        let maindata = this.props.location.state.apidata;
        console.log(maindata.developers)
        setTimeout(() => {
            this.props.history.push({
                pathname: '/projectinsight',
                state: { apidata: maindata }
            })
        }, 5000);
    }
    render() {
        return (
            <div>
                <img src={pd} width='100%' height="50%"></img>
            </div>
        );
    }
}
export default ProjectInsight;