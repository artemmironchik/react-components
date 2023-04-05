import { RiCloseLine } from 'react-icons/ri';

interface ModalProps {
  setIsModalOpen: (arg: boolean) => void;
}

const Modal = ({ setIsModalOpen }: ModalProps) => {
  return (
    <>
      <div className="" onClick={() => setIsModalOpen(false)} />
      <div className="">
        <div className="">
          <button className="" onClick={() => setIsModalOpen(false)}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
