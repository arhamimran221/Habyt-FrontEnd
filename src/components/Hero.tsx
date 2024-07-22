'use client'
import { useState, useEffect } from 'react'

const colors = ['#FF8080', '#E680E6', '#5C85FF', '#FFFF66', '#5CD65C']

const word = [
  'Berlin',
  'Cologne',
  'Frankfurt',
  'HongKong',
  'Hamburg',
  'Singapore',
  'Garz',
  'Lisbon',
  'Paris',
  'Munich',
  'Madrid',
  'Rotterdom',
  'Stuttgart',
  'The_Hague',
  'Turin',
  'Zurich',
]

const Hero = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(1)
  const [currentword, setCurrentWord] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const toggleList = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setCurrentColorIndex(prevIndex => (prevIndex + 1) % colors.length)
    }, 3000)

    const wordInterval = setInterval(() => {
      setCurrentWord(prevIndex => (prevIndex + 1) % word.length)
    }, 1000)

    return () => {
      clearInterval(colorInterval)
      clearInterval(wordInterval)
    }
  }, [])

  return (
    <div className='mb-[130px] mt-[120px]'>
      <div className='max-w-7xl mx-auto md:block hidden'>
        <div className='relative'>
          <div className='w-full -z-40  top-8'>
            <svg
              viewBox='0 0 1500 800'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-full'
              width='100%'
              height='100%'>
              <path
                d='M584 30.0001L240.465 30C129.197 30 39 122.451 39 236.5C39 350.549 129.197 443 240.465 443L584 443V30.0001Z'
                stroke='#707077'
                strokeLinejoin='round'></path>
              <path
                d='M584 30V442.324L735.651 651L1435 651V30L584 30Z'
                stroke='#707077'
                strokeLinejoin='round'></path>
              <path
                d='M604.296 418.465C604.222 426.845 606.783 435.037 611.617 441.884L731.674 611.936C739.098 622.452 751.13 628.752 764.002 628.864L1392.44 634.349C1403.49 634.445 1412.52 625.569 1412.62 614.524L1417.35 71.5446C1417.45 60.4993 1408.57 51.4672 1397.53 51.3708L627.559 44.6514C616.513 44.555 607.481 53.4309 607.385 64.4762L604.296 418.465Z'
                fill={colors[currentColorIndex]}></path>
              <rect
                x='580'
                y='159'
                width='7'
                height='136.25'
                fill='white'></rect>
            </svg>
          </div>
          <div className='absolute md:top-28 md:left-20 lg:left-28 xl:top-40  flex items-center '>
            <h1 className='text-3xl w-[150px] lg:w-[200px] xl:w-[300px] lg:text-[54px] xl:text-[54px] font-extrabold bricolage'>
              {word[currentword]}
            </h1>

            <button className='  px-4 py-2 relative w-[100px]' onClick={toggleList}>
              <svg
                className='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-95w34a'
                focusable='false'
                aria-hidden='true'
                viewBox='0 0 24 24'
                data-testid='ArrowDropDownIcon'>
                <path d='m7 10 5 5 5-5z'></path>
              </svg>
    
              {isOpen && (
                <div className="country ms-5 absolute  left-[50px]">
                <ul className="h-[40rem]  border-none overflow-y-scroll bg-white border border-gray-600 shadow-md rounded pr-6">
                    {word.map((name, index) => (
                        <li key={index} className="city p-3 text-black text-start bricolage">
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
              )}
            </button>
          </div>
        </div>

        <div className='absolute m-20 font-extrabold md:top-28 md:right-20 lg:right-40 lg:top-82 xl:right-52 xl:top-[13rem] lg:left-[45%]'>
          <h1 className=' text-4xl lg:text-[92px] w-[200px] xl:w-[500px] xl:text-7xl tracking-wide bricolage leading-[121%]'>
            Unlock your next move.
          </h1>
        </div>
      </div>

      {/* mobile screen */}
      <div className='relative '>
        <div className='lg:hidden block top-5  -z-40 '>
          <svg
            width='500'
            height='443'
            viewBox='0 0 506 503'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='svg-hero-mobile'>
            <path
              d='M105.229 236V412.616L194.49 502L505.104 502L505.104 236L105.229 236Z'
              stroke='#707077'
              stroke-width='0.875'
              stroke-linejoin='round'></path>
            <path
              d='M113.104 400.66C113.104 405.929 115.195 410.983 118.92 414.71L191.563 487.421C195.291 491.153 200.351 493.25 205.626 493.25L484.664 493.25C490.153 493.25 494.603 488.8 494.603 483.31L494.603 253.815C494.603 248.325 490.153 243.875 484.664 243.875L123.043 243.875C117.554 243.875 113.104 248.325 113.104 253.815L113.104 400.66Z'
              fill={colors[currentColorIndex]}></path>
            <path
              d='M400.557 1.00008L115.431 1.00005C52.2312 1.00004 1 53.5114 1 118.291C0.999997 183.07 52.2312 235.582 115.431 235.582L400.557 235.582V1.00008Z'
              stroke='#707077'
              stroke-linejoin='round'></path>
            <rect x='170' y='234' width='80' height='3' fill='white'></rect>
          </svg>
        </div>

        <div className='absolute top-[24%] flex mx-auto left-20 items-center items-center '>
          <h1 className='text-2xl w-[150px]  font-extrabold bricolage'>
            {word[currentword]}
          </h1>

          <button className=' relative' onClick={toggleList}>
            <svg
              className='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-95w34a'
              focusable='false'
              aria-hidden='true'
              viewBox='0 0 24 24'
              data-testid='ArrowDropDownIcon'
              fill='#000'
              width={30}>
              <path d='m7 10 5 5 5-5z'></path>
            </svg>
            {isOpen ? ' ' : ' '}
            {isOpen && (
              <div className='absolute  top-10'>
                <ul className='mt-2 h-96 overflow-y-scroll bg-white border border-gray-600'>
                  {word.map((name, index) => (
                    <li key={index} className='py-1'>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </button>
        </div>

        <div className='absolute font-extrabold  text-center top-[58%] left-[7rem] '>
          <h1 className=' text-4xl w-[250px]  tracking-wide bricolage'>
            Unlock your next move.
          </h1>
        </div>
      </div>

      <div className='p-[0px]'>
        <p className='font-mono font-[100] font-light  leading-[24px] lg:w-[30%] lg:mt-[-270px] text-[16px] lg:w-[320px] lg:ml-[110px] responsivemobile'>
          Choose between shared or private living in our worldwide{' '}
          locations. Bring your luggage, we’ll take care of the rest.
        </p>
      </div>
    </div>
  )
}

export default Hero
