import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchSinglePokemonData } from '../../APIS';
import { Link, useLocation } from 'react-router-dom';

export default function PokemonPage() {
    const { state } = useLocation();
    const { url } = state;
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        fetchSinglePokemonData(url, (res) => {
            if (res !== null) {
                setPokemonData(res)
            }
        });
    }, []);

    return (
        <div className='container'>
            <h4 style={{ textAlign: "start" }}>Ability</h4>
            <div className='row mx-auto'>
                {
                    pokemonData?.abilities?.map((res) => {
                        return (
                            <Link to="/pokemon" className='col-lg-2 col-md-2 col-sm-4 col-6 my-3'>
                                <div className='shadow-sm py-5'>
                                    <h5 className='text-center'>{res?.ability?.name}</h5>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>

            <h4 style={{ textAlign: "start" }}>Games Indices</h4>
            <div className='row mx-auto'>
                {
                    pokemonData?.game_indices?.map((res) => {
                        return (
                            <Link to="/pokemon" className='col-lg-2 col-md-2 col-sm-4 col-6 my-3'>
                                <div className='shadow-sm py-5'>
                                    <h5 className='text-center'>{res?.version?.name}</h5>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>

            <h4 style={{ textAlign: "start" }}>Games Indices</h4>
            <div className='row mx-auto'>
                {
                    pokemonData?.moves?.map((res) => {
                        return (
                            <Link to="/pokemon" className='col-lg-2 col-md-2 col-sm-4 col-6 my-3'>
                                <div className='shadow-sm py-5'>
                                    <h5 className='text-center'>{res?.move?.name}</h5>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    )
}
