import { useState } from 'react'

const bgImages = [
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1275&q=80',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
]

function App() {
  const [activeIdx, setActiveIdx] = useState(2)

  return (
    <div className='flex w-screen m-5 gap-2 transition'>
      {bgImages.map((img, idx) => {
        return (
          <div
            className={`transition-[flex] ease-in duration-300 relative cursor-pointer h-screen bg-no-repeat bg-cover ${
              activeIdx === idx ? 'flex-[5]' : 'flex-[0.5]'
            } ${idx > 3 && 'max-sm:hidden'}`}
            style={{ backgroundImage: `url(${img})` }}
            onClick={() => setActiveIdx(idx)}
          >
            <h3
              className={`text-white absolute bottom-5 left-5 ${
                activeIdx !== idx && 'hidden'
              }`}
            >
              Wow nice image
            </h3>
          </div>
        )
      })}
    </div>
  )
}

export default App
