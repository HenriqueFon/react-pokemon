import Modal from 'react-modal';
import './PokemonModalStyles.css'

Modal.setAppElement('#root');
interface ModalPokemonProps{
    isOpen:boolean;
    onRequestClose:()=>void;
}

interface ModalPokemonDataProps{
    id:number;
    name:string;
    order:string;
    sprites:any;
}

export function PokemonModal({isOpen,onRequestClose}:ModalPokemonProps){
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <h2>Pokemon</h2>
        </Modal>
    )
}