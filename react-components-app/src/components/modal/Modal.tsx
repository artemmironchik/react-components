import { RiCloseLine } from 'react-icons/ri';
import { IFullCard } from '../../types/item';

interface ModalProps extends IFullCard {
  setIsModalOpen: (arg: boolean) => void;
}

const Modal = ({
  setIsModalOpen,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  created,
}: ModalProps) => {
  return (
    <>
      <div
        className="bg-black/20 w-screen h-screen z-5 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] fixed"
        onClick={() => setIsModalOpen(false)}
      />
      <div className="z-10 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] fixed w-[400px] bg-white flex justify-center rounded-2xl">
        <div className="w-[320px] text-black rounded-2xl flex flex-col items-center py-6">
          <button
            className="cursor-pointer py-2 px-2 rounded-xl border-none font-medium text-lg bg-white absolute top-[-7px] right-[-7px]"
            onClick={() => setIsModalOpen(false)}
          >
            <RiCloseLine style={{ marginBottom: '-3px', color: '#2c3e50' }} />
          </button>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <img className="w-32 h-32 rounded-full" src={image} alt={name} />
              <div className="flex flex-col gap-2">
                <div>
                  <span className="text-xl font-bold text-black">{name}</span>
                </div>
                <div>
                  <span className="text-base text-black">{status}</span>
                </div>
                <div>
                  <span className="text-base text-black">{species}</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                Тип<span className="text-xs text-[#b3b1b1] ml-2">{type ? type : '-'}</span>
              </div>
              <div>
                Гендер<span className="text-xs text-[#b3b1b1] ml-2">{gender}</span>
              </div>
              <div>
                Место рождения<span className="text-xs text-[#b3b1b1] ml-2">{origin.name}</span>
              </div>
              <div>
                Месторасположение
                <span className="text-xs text-[#b3b1b1] ml-2">{location.name}</span>
              </div>
              <div>
                Создан
                <span className="text-xs text-[#b3b1b1] ml-2">
                  {new Date(created).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
