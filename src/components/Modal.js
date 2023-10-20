
function Modal({visible, message, onClose}) {
    if (!visible) return null;
    return (
    <>
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className='m-5 bg-white p-2 rounded-md'>
                <h1 className='justify-center flex font-bold text-3xl'>Ошибка</h1>
                <hr className='mt-3'/>
                <p className='m-5 text-xl text-center justify-center flex'>{message}</p>
                <div className='justify-center flex'>
                    <button onClick={onClose} className='border bg-blue-400 py-2 px-4 rounded-lg font-normal'>Закрыть</button>
                </div>
            </div>
        </div>
    </> 
        
    )
    }

    export default Modal