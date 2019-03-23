import React, { Component } from 'react';
import dataKos from './data/dataKos'
import Kosan from './kosan/kosan'
import Kos from './kosan/kos'
import datzKos from './data/datzKos'

class Homepage extends Component {
    constructor() {
        super()
        this.state = {
            data: dataKos,
            datz: datzKos
        }
    }

    render() {
        let listKos = this.state.data.map(items => <Kosan nama={items.nama} harga={items.harga} img={items.img} desc={items.desc} fasilitas={items.fasilitas} />)
        let koz = this.state.datz.map(items => <Kos nama={items.nama} jumlah={items.jumlah}/>)
        return (
            <div>
                <div className="jumbotron">
                    <h1>Professional realtor works for you</h1>
                    <div className="input-search">
                        <input type="text" name="" id="" placeholder="search kos" />
                        <button>search</button>
                    </div>
                </div>
                <div className="content">
                    {koz}
                </div>
                <div className="kosan">
                    <h1>Daftar Kos</h1>
                    <hr />
                    <div className="card">
                        {listKos}
                        <button className="view">view all kos</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
