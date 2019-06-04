import React from 'react';
import ReactTable from 'react-table';
import matchSorter from 'match-sorter';
import 'react-table/react-table.css';


class Beers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            beers: [],
        }
    }
    //pulling data
    componentWillMount(){
        fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
        .then(response => response.json())
        .then(data =>{
            this.setState({beers: data})
        } );
       
    }
    
    onClick(e){
        e.preventDefault();
        if (e.target.classList.contains("red")){
            e.target.classList.remove("red");
        } else {
            e.target.classList.add("red");
        }
    }
    render(){
        const columns = [{
            Header: 'Image',
            accessor: 'image_url',
            Cell: row => 
                <img className="beer_image" src={row.value} style={{height: '100px'}} alt={row.value} onClick={this.onClick}></img>
        },{
            Header: 'Name',
            id: 'name',
            filterable: true,
            accessor: d => d.name,
            filterMethod: (filter, rows) => matchSorter(rows, filter.value, {keys: ['name']}),
            filterAll: true
        },{
            Header: 'TagLine',
            accessor: 'tagline'
        }]
        console.log(this.state.beers);
        return(
            <div className="beers">
                
                <ReactTable data={this.state.beers} columns={columns} defaultPageSize={10}/>
            </div>
        )
    }
}

export default Beers;