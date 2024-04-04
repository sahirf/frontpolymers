import React from 'react';
import './Table1.css';

const Table1=()=>{
    return(
        <div className="table1" style={{position: 'absolute', top:'100px', left:'1px'}}>
            <h3 style={{position: 'absolute',top: '-20px'}}>Filter material by properties</h3>
            <p style={{position: 'absolute',top: '50px', left:'1px'}}>Density:</p>
            <div className="search-bar" style={{position: 'absolute', top: '70px', left: '90px'}}><input type="text"></input></div>
            <p style={{position: 'absolute',top: '90px', left:'1px'}}>malleability</p>
            <div className="search-bar" style={{position: 'absolute', top: '110px', left: '90px'}}><input type="text"></input></div>
            <p style={{position: 'absolute',top: '130px', left:'1px'}}>Lorem ipsun</p>
            <div className="search-bar" style={{position: 'absolute', top: '145px', left: '90px'}}><input type="text"></input></div>
            <p style={{position: 'absolute',top: '170px', left:'1px'}}>Lorem ipsun</p>
            <div className="search-bar" style={{position: 'absolute', top: '190px', left: '90px'}}><input type="text"></input></div>
            <p style={{position: 'absolute',top: '210px', left:'1px'}}>Lorem ipsun</p>
            <div className="search-bar" style={{position: 'absolute', top: '230px', left: '90px'}}><input type="text"></input></div>
            <div className='button2' style={{position: 'absolute', top:'300px', left:'30px'}}>
                <a href='www.xd.com' h3> Apply Filters</a>
            </div>
        </div>
    );
};
export default Table1;