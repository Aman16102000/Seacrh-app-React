import React from 'react';
import ob from './ob.js';
import './index.css';
class Search extends React.Component {
    state={
        value:"",
        filteredItem:ob
      //  filteredItem:[]
    }
    
    change=(event)=>{
        const searchedName=event.target.value;
        this.setState({
            value:searchedName
        })
        var arr=ob.filter((e)=>{
            if(e.name.startsWith(searchedName))
            return e;
            
        })
        //console.log(arr);
        this.setState({
            filteredItem:arr
        })
       console.log(this.state.filteredItem);
    }
	render() {
     //   var changeNum=0;
 //  console.log(ob[0].name);
		return (
			  <div className="container-fluid">
                    <div className="row">
                        <div className="col-4"></div>
				<div ><input  type="text" className="con" onChange={this.change} value={this.state.value} placeholder="Search Your Name" ></input></div>
                    <div className="col-4"></div>
                    </div>
                <div className="row mt-5">
                    <div className="col-4"></div>
                <div className="scroll col-4 ">
                    <div className="row ">
                        <div className="col-4">Name</div>
                        <div className="col-4"></div>
                        <div className="col-4">Locations</div>
                    </div>
                    <div className="row list">
                        <div className="col-4">
                <ul >
                    
                    {
                       this.state.filteredItem.map((e)=>{
                           return (<p className="each">{e.name}</p>)
                       })
                       
                    }
                    
                </ul>
                </div>
                <div className="col-4"></div>
                <div className="col-4">
                <ul >
                    {
                       this.state.filteredItem.map((e)=>{
                           return (<p className="each">{e.location}</p>)
                       })
                    }

                </ul>
                </div>
                </div>
                </div>
                <div className="col-4"></div>
                </div>
              </div>
		)
	}
}
export default Search;