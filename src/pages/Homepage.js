// rafc : arrow function
// import React from 'react'
import React, { useState } from 'react';

export const Homepage = () => {
    // state
    // di sini isinya function

    const [Nama, setNama] = useState("Afifah")
    const [Umur, setUmur] = useState(19)
    const [Kota, setKota] = useState("Klaten")
    const [JenisKelamin, setJK] = useState("")

  return (
    <div>
        {/* di sini isinya syntax html */}
        <h1>Hello World !</h1>
        <h3>Nama : {Nama}</h3>
        <h3>Umur : {Umur}</h3>
        <h3>Kota : {Kota}</h3>
        <h3>Jenis Kelamin : {JenisKelamin}</h3>
        <br></br>
        <h4>Lakukan Inputan Data Anda Di Kolom Bawah Ini :D</h4>
        <p>Masukkan nama Anda : <input onChange={(e)=>{setNama(e.target.value)}}/></p>
        <p>
          Button umur : 
          <button onClick={()=>{setUmur(Umur - 1)}}>Kurangi Umur</button>
          <button onClick={()=>{setUmur(Umur + 1)}}>Tambah Umur</button>
        </p>
        <p>
          Pilih Kota dimana Anda Tinggal : 
          <button onClick={()=>{setKota("Klaten")}}>Klaten</button>
          <button onClick={()=>{setKota("Surakarta")}}>Surakarta</button>
          <button onClick={()=>{setKota("Sragen")}}>Sragen</button>
        </p>
        <p>Masukkan Jenis Kelamin Anda : <input onChange={(e)=>{setJK(e.target.value)}}/></p>
        
    </div>
  )
}

// rfc : function biasa
// rcc : class component