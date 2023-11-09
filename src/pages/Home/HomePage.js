import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchPokemonData } from '../../APIS';
import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        fetchPokemonData((res) => {
            if (res !== null) {
                setPokemonData(res?.results)
            }
        });
    }, []);

    const handleClick = (url) => {
        navigate('/pokemons', { state: { url: url, } });
    }

    return (
        <div className='container mt-4'>
            <div className='row mx-auto'>
                {
                    pokemonData?.map((res) => {
                        return (
                            <a href="/pokemons" className='col-lg-2 col-md-2 col-sm-4 col-6 my-3' onClick={() => { handleClick(res?.url) }}>
                                <div className='shadow-sm py-5'>
                                    <h5 className='text-center text-dark'>{res?.name}</h5>
                                </div>
                            </a>
                        );
                    })
                }
            </div>
        </div>
    )
}
