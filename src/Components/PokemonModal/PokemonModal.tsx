import Modal from 'react-modal';
import './PokemonModalStyles.css'
import {PokemonData} from '../Pokemon/Pokemon';
Modal.setAppElement('#root');

interface ModalPokemonProps{
    isOpen:boolean;
    onRequestClose:()=>void;
    pokemonData:PokemonData;
}

export function PokemonModal({isOpen,onRequestClose,pokemonData}:ModalPokemonProps){
    function contents(){
        if(Object.keys(pokemonData).length) {
            return(
                <Modal
                    isOpen={isOpen}
                    onRequestClose={onRequestClose}
                    overlayClassName="react-modal-overlay"
                    className="react-modal-content"
                    >
                    <h2>{pokemonData.name}</h2>
                </Modal>
            )
        }

        return (<></>)
    }


    return contents();
        
}