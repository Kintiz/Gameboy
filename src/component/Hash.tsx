import { useEffect, useState } from 'react'
import './Hash.scss'

const Hash = () => {
    const [xKey, setXKey] = useState<string[]>([])
    const [oKey, setOKey] = useState<string[]>([])
    const [changeKey, setChangeKey] = useState(false)
    const [win, setWin] = useState(false)
    
    const checkWin = () => {
        // X RESULTS
        // diagonais
        xKey[0] && xKey[4] && xKey[8] ? setWin(true) : console.log();xKey[2] && xKey[4] && xKey[6] ? setWin(true) : console.log();
        //colunas
        xKey[0] && xKey[3] && xKey[6] ? setWin(true) : console.log();xKey[1] && xKey[4] && xKey[7] ? setWin(true) : console.log();xKey[2] && xKey[5] && xKey[8] ? setWin(true) : console.log();
        //linhas
        xKey[0] && xKey[1] && xKey[2] ? setWin(true) : console.log();xKey[3] && xKey[4] && xKey[5] ? setWin(true) : console.log();xKey[6] && xKey[7] && xKey[8] ? setWin(true) : console.log();
        
        //O RESULTS
        // diagonais
        oKey[0] && oKey[4] && oKey[8] ? setWin(true) : console.log();oKey[2] && oKey[4] && oKey[6] ? setWin(true) : console.log();
        //colunas
        oKey[0] && oKey[3] && oKey[6] ? setWin(true) : console.log();oKey[1] && oKey[4] && oKey[7] ? setWin(true) : console.log();oKey[2] && oKey[5] && oKey[8] ? setWin(true) : console.log();
        //linhas
        oKey[0] && oKey[1] && oKey[2] ? setWin(true) : console.log();oKey[3] && oKey[4] && oKey[5] ? setWin(true) : console.log();oKey[6] && oKey[7] && oKey[8] ? setWin(true) : console.log();
        
    }
    useEffect(() => {
        checkWin();
    }, [xKey, oKey, changeKey]);


    const setKey = (key: number) => {

        // Cria uma cópia da matriz existente    
        const updatedOKey = [...oKey]
        const updatedXKey = [...xKey]

        if(changeKey === true){
            updatedOKey[key] = "O" // Atualiza apenas o elemento correspondente ao índice fornecido
            setOKey(updatedOKey) // Atualiza o estado com a nova matriz

            setChangeKey(!changeKey)
            checkWin()
        }else if(changeKey === false){
            updatedXKey[key] = "X"
            setXKey(updatedXKey)

            setChangeKey(!changeKey)
            checkWin()
        }
    
        
    }
    
  return (
    <div className=" z-10 absolute top-64">
        <h1>{win && (
            <p className='text-4xl text-center absolute bottom-64 right-20'>WIN!</p>
        )}</h1>
        <div className=''>
            <div className="a flex border-b-4 border-black m-1 ">
                <div onClick={() => setKey(0)} className="a1 border-r-4 border-black cursor-pointer m-1 w-16 h-16 hover">
                    <p className='text-4xl text-center p-3'>{xKey[0] || oKey[0]}</p>

                </div>
                <div onClick={() => setKey(1)} className="a2 border-r-4 border-l-4 border-black cursor-pointer m-1 w-16 h-16">
                    <p className='text-4xl text-center p-3'>{xKey[1] || oKey[1]}</p>

                </div>
                <div onClick={() => setKey(2)} className="a3 border-l-4 border-black cursor-pointer m-1 w-16 h-16">
                    <p className='text-4xl text-center p-3'>{xKey[2] || oKey[2]}</p>

                </div>
            </div>
            <div className="b flex border-t-4 border-b-4 m-1 border-black">
                <div onClick={() => setKey(3)} className="b1 border-r-4 border-black cursor-pointer m-1 w-16 h-16">
                    <p className='text-4xl text-center p-3'>{xKey[3] || oKey[3]}</p>

                </div>
                <div onClick={() => setKey(4)} className="b2 border-r-4 border-l-4 border-black cursor-pointer m-1 w-16 h-16">
                    <p className='text-4xl text-center p-3'>{xKey[4] || oKey[4]}</p>

                </div>
                <div onClick={() => setKey(5)} className="b3 border-l-4 border-black cursor-pointer m-1 w-16 h-16">
                    <p className='text-4xl text-center p-3'>{xKey[5] || oKey[5]}</p>

                </div>
            </div>
            <div className="c flex border-t-4 border-black m-1">
                <div onClick={() => setKey(6)} className="c1 border-r-4 border-black cursor-pointer m-1 w-16 h-16">
                    <p className='text-4xl text-center p-3'>{xKey[6] || oKey[6]}</p>

                </div>
                <div onClick={() => setKey(7)} className="c2 border-r-4 border-l-4 border-black cursor-pointer m-1 w-16 h-16">
                    <p className='text-4xl text-center p-3'>{xKey[7] || oKey[7]}</p>

                </div>
                <div onClick={() => setKey(8)} className="c3 border-l-4 border-black cursor-pointer m-1 w-16 h-16">
                    <p className='text-4xl text-center p-3'>{xKey[8] || oKey[8]}</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hash