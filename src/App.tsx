import './App.scss'

function App() {

  const startGame = () => {
    const  gameboy = document.querySelector('#gameboy')
    const  game = document.querySelector('#game')
    gameboy?.classList.add("hidden")
    game?.classList.add("appear")
  }

  return (
    <div className="overflow-hidden flex justify-center items-center h-screen bg-red-500">
      <div id='gameboy' className="gameBoyBase bg-orange-500 rounded-3xl border-4 border-black relative">
        <div className='lineLeft h-full w-5 absolute rounded'></div>
        <div className='lineRight'></div>
        <div className='relative'>
          <div className='flex justify-center z-1'>
            <div className=' mr-28 w-1 h-6 bg-black'></div>
            <div className=' ml-28 w-1 h-6 bg-black'></div>
          </div>
          <div className='block'>
            <div className=' w-full h-1 bg-black'></div>
          </div>
          <div className=' flex justify-center my-5'>
            <div className='grayAreaDisplay  w-48 h-44 border-4 border-black '>
              <div className='flex my-2'>
                <div className='ml-5 w-20 h-1 bg-black'></div>
                <div className='ml-10 w-10 h-1 bg-black'></div>
              </div>
              <div className='flex flex-nowrap justify-center items-center my-4'>
                <div onClick={startGame} className='displayBlock flex flex-col items-center justify-center w-36 h-32 border-4 border-black'>
                  Let's Play
                  <div className='displayPlay my-2 w-14 text-center cursor-pointer hover:scale-2'>
                    Play
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center my-7'>
            <div className='mr-2 w-20 h-1 bg-black'></div>
            <div className='flex'>
              <div className='mr-1 w-1 h-4 bg-black'></div>
              <div className='mr-1 w-1 h-4 bg-black'></div>
              <div className='mr-1 w-1 h-4 bg-black'></div>
              <div className='mr-1 w-1 h-4 bg-black'></div>
            </div>
            <div className='ml-2 w-20 h-1 bg-black'></div>
          </div>
          <div className=' flex'>
            <div className='buttonLeft w-24 h-24 ml-8'>
              <div className='flex h-full justify-center items-center relative'>
                <div className='buttonInsideRow w-16 h-5 absolute rounded-md border-2 border-black'></div>
                <div className='buttonInsideRow w-5 h-16 rounded-md absolute border-2 border-black'></div>
                <div className='buttonInsideRow w-14 h-4 absolute rounded-md '></div>
              </div>
            </div>
            <div className='buttonRight w-10 h-28 ml-14 flex justify-between flex-col items-center'>
              <div className='buttonsInsideLeft w-8 h-8 my-2 rounded-md border-2 border-black'></div>
              <div className='buttonsInsideLeft w-8 h-8 my-2 rounded-md border-2 border-black'></div>
            </div>
          </div>
          <div className='flex'>
            <div className='flex justify-center items-center w-full'>
              <div className='flex justify-center ml-14'>
                <div className='start w-2 h-8 bg-transparent mr-4 flex justify-start rounded-md border-2 border-black '></div>
                <div className='start w-2 h-8 bg-transparent flex justify-start rounded-md border-2 border-black '></div>
              </div>
            </div>
            <div className='linesRotate flex mr-3'>
              <div className='w-1.5 h-8 rounded-3xl bg-black ml-2'></div>
              <div className='w-1.5 h-8 rounded-3xl bg-black ml-2'></div>
              <div className='w-1.5 h-8 rounded-3xl bg-black ml-2'></div>
              <div className='w-1.5 h-8 rounded-3xl bg-black ml-2'></div>
              <div className='w-1.5 h-8 rounded-3xl bg-black ml-2'></div>
            </div>
          </div>
        </div>
      </div>
      <div id='game' className=''></div>
    </div>
  )
}

export default App
