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
            if(e.name.toLowerCase().startsWith(searchedName.toLowerCase()))
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
                    <div className="col-4 col-sm-4"></div>
                    <div className="col-4 col-sm-4">

                    <form>
                            <div className="form-group-row">
                                <div className="col-xs-4">
                                  <input className="form-control" type="text" onChange={this.change}  value={this.state.value} placeholder="Search employee name" ></input>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-4 col-sm-4"></div>
                </div>
                <div className="row mt-3">
                <div className="col-4 col-sm-4"></div>
                    <div className="col-4 col-sm-4">
                    <div className="card card-body scrollClass" >
                   
                        <ul className="list-group list-group-flush ">
                        <div className="row list-head ">
                                                <div className="col-4 col-sm-4 pl-4 pt-2"><b>Name</b></div>
                                                <div className="col-4 col-sm-4"></div>
                                                <div className="col-4 col-sm-4 pt-2"><b>Locations</b></div>
                                            </div>
                            {
                                  this.state.filteredItem.map((e)=>{
                                    return (
                                     

                                        <li className="list-group-item card-body">
                                            
                                            <div className="row">
                                                <div className="col-4 col-sm-4">{e.name}</div>
                                                <div className="col-4 col-sm-4"></div>
                                                <div className="col-4 col-sm-4">{e.location}</div>
                                            </div>
                                        </li>
                                       
                                        )
                                })
                            }
                         </ul>
                     </div>
                    </div>
                    <div className="col-4 col-sm-4"></div>
                </div>
            </div>
			 /*  <div className="container-fluid">
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
              </div> */
		)
	}
}
export default Search;