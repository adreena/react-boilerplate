import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData} from '../actions/index';
import { Button, Grid, Row, Col ,Panel, Container} from 'react-bootstrap';

class App extends React.Component{

	componentWillMount(){
		console.log('Mounting...:');
		console.log(this.props.data);
	}

	onClick(){
		this.props.fetchData();
	}

	componentWillReceiveProps(newProps)
  {
  	console.log('Received new Props:');
  	console.log(newProps);    
  }
	render(){

		console.log(this.props.data);
		return (
					<div className='row'>
						<div className="col-lg-12" >
							<div className="panel panel-default">
								<div className='panel-heading centered-text'><h1>Generator</h1></div>
							
								<div className='panel-body'> 

									<p className="text-primary centered-text" style={{height:500, fontSize:100}}>{this.props.data}</p>
									<a className="btn btn-default btn-lg btn-block " href="#" onClick={this.onClick.bind(this)} role="button">Refresh</a>

								 </div>
							
							</div>
						</div>
					</div>
		)
			
	}
}

function mapStateToProps(state){
  return { data: state.allReducers.data};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);