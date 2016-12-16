import React from 'react';

class App extends React.Component {

	constructor() {
      super();
		
      {/*this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Abc",
               "age":"20"
            },
				
            {
               "id":2,
               "name":"Pqr",
               "age":"30"
            },
				
            {
               "id":3,
               "name":"Mno",
               "age":"40"
            }
         ]
      }
   }*/}

   this.state={
   		header: "Header from state...",
        "content": "Content from state..."
   }
   }

   render() {
   	var i=1;
   	var mystyle={
   		fontSize :20,
   		color:'#FF0000'
   	}
      return (
         <div>
         
            <Header/>
            <Content/>
            {/*<table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>*/}
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
            <p>First Name : {this.props.fnameProps}</p>
            <p>Last Name : {this.props.lnameProps}</p>
         </div>
      );
   }
}

class Header extends React.Component
{
	render(){
		return(
			<div>
				<h1>Header</h1>
			</div>
		);
		}
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

App.defaultProps = {
   fnameProps: "Mohith",
   lnameProps:"Priyaram"
}


export default App;