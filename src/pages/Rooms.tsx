import { useEffect, useState } from 'react'
import { DatePicker, ConfigProvider, Input, Button, Checkbox } from 'antd'
import { Dayjs } from 'dayjs'

import { theme } from '../antd/theme.mjs'
import moment from 'moment'
import { IoFilterSharp } from 'react-icons/io5'
import Card from '../components/Card'
// import Cards from '../components/Cards'
import { countriesData } from '../constants/roomsData'
import { useParams, useNavigate } from 'react-router-dom'
import { RxCross1 } from 'react-icons/rx'
import { Slider } from '@mui/material'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import CustomAccordion from '../components/Accordion'
import googleMap from '../assets/images/rooms/map.avif'
import DropCheck from '../components/DropCheck'
import DateMUI from '../components/DateMUI'
import { url } from 'inspector'
import CallToActionBG from '../assets/call-to-action-bg.jpeg'
import "./Rooms.css";

const minDistance = 10

const Rooms = () => {
  const navigate = useNavigate()
  const params = useParams()
  const country = params.country?.replace(' ', '') ?? 'germany'

  const [filteredRooms, setFilteredRooms] = useState([])
  const [pagedRooms, setPagedRooms] = useState([])
  const [selectAllDistricts, setSelectAllDistricts] = useState(false)

  const roomsData: any = countriesData

  var day
  const dday = new Date().getDate()
  if (dday < 10) {
    day = `0${dday}`
  } else {
    day = dday
  }
  var month
  const mmonth = new Date().getMonth() + 1
  if (mmonth < 10) {
    month = `0${mmonth}`
  }
  const today = `${new Date().getFullYear()}-${month}-${day}`
  const [date, setDate] = useState<any>(today)
  const [stay, setStay] = useState(['ALL_TYPES_OF_STAY'])
  const [price, setPrice] = useState<string | null>(null)
  const [showFIlters, setShowFilters] = useState(false)
  const [selectedStay, setSelectedStay] = useState<string[]>([])
  const [selectedRoom, setSelectedRoom] = useState('Any')
  const [isImageShow, setIsImageShow] = useState(false)

  const changeDate = async (newDate: string) => {
    setDate(newDate)
  }

  const [range, setRange] = useState([0, 3000])

  const handleChangeSlider = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return
    }
    if (activeThumb === 0) {
      setRange([Math.min(newValue[0], range[1] - minDistance), range[1]])
    } else {
      setRange([range[0], Math.max(newValue[1], range[0] + minDistance)])
    }
  }

  function valuetext(value: number) {
    return `€ ${value}`
  }

  const changeStayOption = (opt: string) => {
    if (selectedStay.includes(opt)) {
      setSelectedStay(prevSelected =>
        prevSelected.length === 0
          ? ['ALL_TYPES_OF_STAY']
          : prevSelected.filter(item => item !== opt)
      )
    } else {
      setSelectedStay(prevSelected => [...prevSelected, opt])
    }
    setStay(prevSelected => [
      prevSelected.includes(opt) ? 'ALL_TYPES_OF_STAY' : opt,
    ])
  }

  const changeRoomOption = (room: string) => {
    setSelectedRoom(prevSelected => (prevSelected === room ? '' : room))
  }

  const roomsNumber = ['Any', 0, 1, 2, 3, 4, 5]

  const [roomSize, setRoomSize] = useState([0, 20])

  const handleChangeSizeSlider = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return
    }
    if (activeThumb === 0) {
      setRoomSize([
        Math.min(newValue[0], roomSize[1] - minDistance),
        roomSize[1],
      ])
    } else {
      setRoomSize([
        roomSize[0],
        Math.max(newValue[1], roomSize[0] + minDistance),
      ])
    }
  }

  function valuetextRoomSize(value: number) {
    return `${value} sqm`
  }

  const locations = [
    'BAD CANNSTATT',
    'FEUERBACH',
    'HESLACH',
    'HEUSTEIGVIERTEL',
    'HÖLDERLINPLATZ',
    'KERNERVIERTEL',
    'MITTE',
    'NEUE VORSTADT',
    'NORD',
    'OST',
    'UNTERTÜRKHEIM',
    'WEST',
  ]

  const handleDistrictCheckboxChange = (value: string) => {}

  const clearFilters = () => {
    setDate('')
    setStay(['ALL_TYPES_OF_STAY'])
    setPrice(null)
    setSelectedRoom('Any')
    setRoomSize([0, 20])
    setSelectAllDistricts(false)
    setRange([0, 3000])
  }

  const isArrayofObjects = (data: any[]) => {
    if (!Array.isArray(data)) {
    }
    return data.every(
      item => typeof item === 'object' && item !== null && !Array.isArray(item)
    )
  }

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 1

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage
    const slicedRooms = filteredRooms.slice(0, indexOfLastItem)
    setPagedRooms(slicedRooms)
  }, [filteredRooms, currentPage])

  const handlePageChange = () => {
    setCurrentPage(currentPage + 1)
  }

  useEffect(() => {
    var finalDate: string
    var finalPrice
    var finalStay
    var finalRooms
    var finalSize

    if (date.length === 10) {
      finalDate = `${date}`
    } else {
      const dateObj = JSON.parse(date)
      if (dateObj.$M < 10) {
        dateObj.$M = `0${Number(dateObj.$M) + 1}`
      }
      if (dateObj.$D < 10) {
        dateObj.$D = `0${Number(dateObj.$D)}`
      }
      finalDate = `${dateObj.$y}-${dateObj.$M}-${dateObj.$D}`
    }

    const unknownProperties = Object.keys(
      roomsData[country?.replace('-', '') ?? '']
    )

    const filteredData = unknownProperties
      .filter(property => {
        if (stay.includes('ALL_TYPES_OF_STAY')) {
          finalStay = null
          return (
            roomsData[country?.replace('-', '') ?? ''][property][
              'availableDate'
            ] === finalDate ||
            roomsData[country?.replace('-', '') ?? ''][property][
              'availableFrom'
            ] === finalDate ||
            moment(
              roomsData[country?.replace('-', '') ?? ''][property][
                'availableUntil'
              ]
            ) < moment(finalDate)
          )
        } else {
          finalStay = stay
          return (
            (roomsData[country?.replace('-', '') ?? ''][property][
              'availableDate'
            ] === finalDate ||
              roomsData[country?.replace('-', '') ?? ''][property][
                'availableFrom'
              ] === finalDate ||
              moment(
                roomsData[country?.replace('-', '') ?? ''][property][
                  'availableUntil'
                ]
              ) < moment(finalDate)) &&
            stay.includes(
              roomsData[country?.replace('-', '') ?? ''][property]['shareType']
            )
          )
        }
      })
      .map(property => roomsData[country?.replace('-', '') ?? ''][property])

    if (price) {
      var filteredResults = filteredData.filter(data => {
        const dataAmount = data.rent.amount
        if (Array.isArray(price)) {
          finalPrice = price[1]
          return dataAmount <= +price[1]
        } else {
          finalPrice = price
          return dataAmount <= +price
        }
      })
    } else {
      var filteredResults = filteredData
    }

    if (selectedRoom === 'Any') {
      var roomResults = filteredResults
      finalRooms = null
    } else {
      var roomResults = filteredResults.filter(data => {
        const dataRooms = data.apartment.bedroomCount
        finalRooms = +selectedRoom
        return dataRooms >= +selectedRoom - 1
      })
    }

    if (roomSize[0] === 0) {
      finalSize = null
      var sizeResults: any = roomResults
    } else {
      finalSize = roomSize[0]
      var sizeResults: any = roomResults.filter(data => {
        const dataSize = data.area.value
        return roomSize[0] >= +dataSize - 2
      })
    }

    if (isArrayofObjects(sizeResults)) {
      setFilteredRooms(sizeResults)
      setPagedRooms(sizeResults.slice(0, 16))
    } else if (isArrayofObjects(filteredRooms)) {
      setFilteredRooms(filteredRooms)
      setPagedRooms(filteredRooms.slice(0, 16))
    } else {
      setFilteredRooms([])
      setPagedRooms([])
    }
    navigate(
      `?moveInDate=${finalDate}${finalPrice ? `&maxPrice=${finalPrice}` : ''}${
        finalStay ? `&shareType=${finalStay}` : ''
      }${finalSize ? `&minSize=${finalSize}` : ''}${
        finalRooms ? `&numberOfRooms=${finalRooms}` : ''
      }`
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country, date, stay, price, selectedRoom, roomSize, selectAllDistricts])

  const countriesNames = Object.keys(roomsData)
  const [showCountries, setShowCountries] = useState(false)
  const [showMapOnMobile, setShowMapOnMobile] = useState('both')

  useEffect(() => {
    if (window.innerWidth < 500) {
      setShowMapOnMobile('map')
    } else {
      setShowMapOnMobile('both')
    }

    const handleResize = () => {
      if (window.innerWidth < 500) {
        setShowMapOnMobile('map')
      } else {
        setShowMapOnMobile('both')
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='habyt-container'> 
      <div className='max-w-[1440px] m-auto'>
        <ConfigProvider theme={theme}>
          <>
            <div className='homecont flex flex-col md:flex-row border-b border-zinc-900 pt-[100px] md:pt-[150px]'>
              <div className='w-full p-0'>
                <div className='homeFilters font flex flex-row justify-between md:justify-center items-start sm:items-center p-2 w-full md:w-fit h-[2rem] mt-4 mb-2 md:mb-0'>
                  <h1
                    className='dropDown flex items-center md:hidden text-2xl font-bold cursor-pointer gap-2 mb-2 ml-2 md:ml-4'
                    onClick={() => setShowCountries(!showCountries)}>
                    <span className='capitalize'>{country}</span>
                    {showCountries ? (
                      <FaChevronUp className='text-[0.7rem]' />
                    ) : (
                      <FaChevronDown className='text-[0.7rem]' />
                    )}
                  </h1>
                  <div className="hidden sm:block"> <DateMUI date={date} setDate={setDate} /> </div>
                  <div className="hidden sm:block"> <DropCheck stay={stay} setStay={setStay} /> </div>
                  <div className="hidden sm:block"> 
                    <Input
                      type='number'
                      prefix={
                        country === 'hong-kong'
                          ? 'HK$'
                          : country === 'singapore'
                          ? 'S$'
                          : '€'
                      }
                      placeholder='Price'
                      className='w-[10em] hidden md:flex border-2 border-zinc-900 h-[2rem]'
                      onChange={e => setPrice(e.target.value)}
                      style={{ borderLeft: 0 }}
                    />
                  </div>
                  <Button
                    onClick={() => setShowFilters(true)}
                    className='bg-white sm:w-[8em] h-[2rem] flex justify-center items-center gap-2 border-2 border-zinc-900 ml-0 md:ml-8 mr-2 md:mr-0'>
                    <IoFilterSharp /> Filters
                  </Button>
                </div>
                {(showMapOnMobile === 'both' || showMapOnMobile === 'list') && (
                  <div
                    className={`rooms w-full ${
                      pagedRooms.length < 1 ? 'h-fit' : 'h-[100vh]'
                    } flex flex-wrap gap-4 overflow-y-auto ${
                      isImageShow ? 'p-0' : 'p-4'
                    }`}>
                    {pagedRooms.length < 1 || !filteredRooms ? (
                      <div className='text-center align-middle bg-zinc-900 px-4 py-8 text-white mt-8 w-full h-fit rounded-lg'>
                        Unfortunately there are no free rooms in this location.
                        Try a different city or an earlier move-in date.
                      </div>
                    ) : filteredRooms ? (
                      // <Cards />
                      pagedRooms?.map((room: any, index) => {
                        return (
                          <Card
                            key={index}
                            images={room?.apartment?.images}
                            country={country || ''}
                            shareType={room?.shareType}
                            size={room?.area?.value}
                            measurement={room?.area?.unit}
                            rooms={room?.apartment?.bedroomCount}
                            floor={room?.apartment?.floor}
                            currency={room?.currencyIsoCode}
                            oldPrice={room?.rent?.amount}
                            currentPrice={room?.rent?.amount}
                            availableFrom={room?.availableFrom}
                            id={room?.id}
                            data={room}
                            allRooms={filteredRooms}
                            code={room?.apartment?.code}
                            setIsImageShow={setIsImageShow}
                            isImageShow={isImageShow}
                            address={
                              room?.apartment?.property?.address?.addressLine1
                            }
                          />
                        )
                      })
                    ) : null}
                    {filteredRooms.length > 0 &&
                      filteredRooms.length != pagedRooms.length && (
                        <div className='w-full'>
                          <button
                            onClick={() => handlePageChange()}
                            className='p-2 w-fit h-fit text-lg border-2 border-zinc-900'>
                            More Rooms
                          </button>
                        </div>
                      )}
                  </div>
                )}
              </div>
              {(showMapOnMobile === 'both' || showMapOnMobile === 'map') && (
                <div className='map w-full md:w-[40rem] h-full p-4 flex justify-center items-center gap-2 flex-wrap'>
                  <img
                    src={googleMap}
                    alt='map'
                    className='object-cover h-[100vh]'
                  />
                </div>
              )}
            </div>
            {showMapOnMobile === 'both' || showMapOnMobile === 'list' ? (
              <>
                <div className='flex flex-col lg:flex-row h-[fit] p-4 lg:p-8 gap-8 border-b border-zinc-900 w-[]'>
                  <div className='aboutCountry w-full lg:w-[45%] p-6 lg:p-12 flex flex-col gap-4 lg:gap-8 h-full rounded-xl bg-pink-300 text-zinc-900'>
                    <p className='font-mono text-[14px] md:text-[16px] font-normal uppercase w-full'>About The City</p>
                    <h1 className='text-[1rem] lg:text-[2rem] font-bold w-full text-left'>
                      {roomsData[country?.replace('-', '') ?? '']['title']}
                    </h1>
                    <p className='w-full text-left'>
                      {roomsData[country?.replace('-', '') ?? '']['text']}
                    </p>
                  </div>
                  <div className='h-[inherit] border border-zinc-900'></div>
                  <div className='w-full lg:w-[55%] h-[250px] lg:h-[inherit] w-full rounded-xl'>
                    <img
                      className='w-full h-full object-cover rounded-xl'
                      src='https://res.cloudinary.com/do6sd9nyx/image/upload/v1706876167/f954162d8ac82f6173c761994dd210d158a1e13f-2000x1333_k0ekqe.webp'
                      alt='country'
                    />
                  </div>
                </div>
                {/* <div className='w-full max-w-[1200px] mx-auto'>
                  <div className='flex flex-col p-8 pt-16 gap-8'>
                  {roomsData[country?.replace('-', ' ')]
                    ? roomsData[country.replace('-', '') ?? 'amsterdam'][
                        'content'
                      ].map(
                        (
                          data: { title: string; text: string },
                          index: number
                        ) => (
                          <div key={index} className='flex flex-col gap-4'>
                            <h1 className='w-full text-left font-bold text-[2.5rem]'>
                              {data.title}
                            </h1>
                            <p className='w-full text-left'>{data.text}</p>
                          </div>
                        )
                      )
                    : null}
                  </div>
                </div> */}

                <div className='w-full max-w-[1200px] mx-auto'>
                  <div className='flex flex-col px-4 md:px-10 py-16 gap-8'>
                      <div className='flex flex-col gap-4'>
                        <h1 className='w-full text-left font-bold text-[2rem] md:text-[2.5rem]'>
                          Why move to Hong Kong?
                        </h1>
                        <p className='w-full text-left'>
                          Hong Kong is a vibrant and dynamic city that serves as a major financial and cultural hub in Asia. As a global financial center and international business hub, the city offers a wide range of job opportunities in finance, trade, technology, and other industries. Hong Kong is also known for its safety and convenience, with many shops, restaurants, and services operating 24/7.
                        </p>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h1 className='w-full text-left font-bold text-[2rem] md:text-[2.5rem]'>
                          Where to start?
                        </h1>
                        <p className='w-full text-left'>
                          Get familiar with the neighborhoods, cost of living and amenities in Hong Kong. Depending on your nationality, check the visa and residency requirements for moving. Ensure you have the necessary documentation to live and work in Hong Kong legally. Reach out to local communities, attend events, and join clubs or groups to start building connections.
                        </p>
                      </div>
                  </div>
                </div>

                <div className='w-full h-full bg-stone-200 p-4 md:p-8 pt-16 flex flex-col gap-2'>
                  <div className='w-full max-w-[1120px] mx-auto'>
                    <h1 className='w-full text-left font-bold text-[2rem] mt-0 mb-8 md:my-8'>
                      F.A.Q
                    </h1>
                    <CustomAccordion
                      title='Can I visit / view the apartment?'
                      text={`
                We receive so many applications, that it is not possible for us to accommodate everyone who is possibly interested, hence, we are unable to organize individual viewings.
                However, we always work on setting expectations right when offering someone a room, as we want you to get everything you are expecting.
                For this, our team is ready to reply to all of your questions, and offer you every possible detail about the room so you are sure this is the right fit for you!
                `}
                    />
                    <CustomAccordion
                      title='How are your rooms and flats furnished?'
                      text={`
                All you need to do is pack your clothes and move into your new Habyt home!
                Your apartment is fully furnished for you to live comfortably in it from day 1.
                Additional common-use items such as iron, vacuum cleaner, clothes rack, and washing machine* are included.
                The kitchen is fully equipped with cooking utensils, a fridge, a dishwasher, and a stove. Cook your heart’s desires!
                Your room also awaits, fully furnished and clean! You will find a bed + bed linens, a bedside table, and a wardrobe in your room. If you book a room larger than 10m2, you also get a desk and a chair.
                Enjoy!
                *Some buildings offer a shared laundry room and others a washing machine inside the flat.
                `}
                    />
                    <CustomAccordion
                      title='Is it possible to do a registration of the address?'
                      text={`
                Of course, it is!
                Whether it is the Anmeldung in Germany, the Basisregistratie Personen in the Netherlands, the Registrazione Contratto all’Agenzia delle Entrate in Italy, or El Padron in Spain, our support team will provide you with all the necessary documents when needed and share some extra tips on how you can carry on with this bureaucratic errand.
                We got your back!
                `}
                    />
                    <CustomAccordion
                      title='What’s included in my monthly rent payment?'
                      text={`
                All you need is Habyt!
                The monthly rent payment includes all bills, internet costs, a fully furnished flat, maintenance, access to your digital Habyt Accounts (Habyt app and Habyt Member portal) to manage all your payments and requests, our great support team, and many more!
                In some properties, your cost also covers biweekly cleaning services.
                We prepared a section for you to learn more on this topic!
                `}
                    />
                    <div className='w-full flex flex-col items-center mt-4 gap-4'>
                      <div className='flex justify-center gap-8 mt-8'>
                        <p>Do you have any question?</p>
                        <a href='/#'>Get in touch!</a>
                      </div>
                      <p className='w-fit px-4 py-2 border border-zinc-900 hover:border-[2px] hover:bg-[#fff] box-border cursor-pointer rounded-[2px]'>
                        Help Center
                      </p>
                    </div>
                  </div>
                </div>
              <div className='hidden md:block'>
                <div className='w-full py-[105px] px-[100px] h-full flex items-center bg-cover bg-no-repeat bg-center' 
                  style={{backgroundImage: `url(${CallToActionBG})`}}>
                    <div className='w-[50%] mx-auto'>
                      <h1 className='text-[2rem] font-bold w-[36%] pb-[50px] mx-auto'>
                        Haven't found the room of your dreams?
                      </h1>
                    </div>
                    <div className='w-[50%] mx-auto flex flex-col gap-10 pl-10'>
                      <p className='text-[18px] leading-[28px] max-w-[450px]'>
                        With Habyt you can find it as quickly as you imagine! Don’t
                        hesitate in contact us and we’ll help you find a home.
                      </p>
                      <button className='bg-zinc-900 p-2 text-white w-fit mb-16'>
                        Get in Touch
                      </button>
                    </div>
                </div>
              </div>
              <div className='block md:hidden lg:hidden'>
                <div className='bg-[#DF84EF] w-full p-4 sm:p-8 h-full flex flex-col items-center'>
                  <h1 className='text-[1.2rem] sm:text-[2.5rem] font-bold mt-8 text-left'>
                    Haven't found the room of your dreams?
                  </h1>
                  <div className='border border-zinc-900 w-full mt-2 sm:mt-16'></div>
                  <p className='text-[16px] leading-[24px] max-w-[450px] mt-2 mb-4 pl-2'>
                    With Habyt you can find it as quickly as you imagine! Don’t
                    hesitate in contact us and we’ll help you find a home.
                  </p>
                  <button className='bg-zinc-900 p-2 text-white w-fit mb-16'>
                    Get in Touch
                  </button>
                </div>
              </div>
              </>
            ) : null}
          </>
          <>
            {showFIlters ? (
              <div className='z-[9999] max-w-[1024px] mx-auto fixed hide-scrollbar top-[1rem] left-0 right-0 bg-white z-50 h-[100%] w-[100%] flex justify-center overflow-y-auto'>
                <div className='filtersCont hide-scrollbar bg-white w-full flex flex-col gap-4 pt-[5rem]'>
                  <div className='w-full hide-scrolbar flex justify-between sticky top-0 bg-white z-40 p-8'>
                    <p className='font-bold'>Filters</p>
                    <RxCross1
                      className='text-[1.5em] cursor-pointer'
                      onClick={() => setShowFilters(false)}
                    />
                  </div>
                  <div className='flex flex-col gap-8 p-8 pt-0'>
                    <p
                      className='text-right font-bold cursor-pointer overflow-y-auto'
                      onClick={clearFilters}>
                      Clear All
                    </p>
                    <p className='font-bold'>Move In Date</p>

                    <DatePicker
                      onChange={changeDate}
                      placeholder='Move-In'
                      disabledDate={(current: Dayjs) => false}
                    />
                    <div className='border-b'></div>
                    <p className='font-bold'>Type Of Stay</p>
                    <div className='optContCard flex flex-col sm:flex-row justify-center items-center gap-2'>
                      <div
                        className={`text-center optCard w-full sm:w-[30%] text-[0.7rem] cursor-pointer flex justify-center items-center border-[1px] p-4 rounded-[10px] ${
                          selectedStay.includes('PRIVATE_ROOM')
                            ? 'border-purple-500'
                            : 'border-zinc-900'
                        }`}
                        onClick={() => changeStayOption('PRIVATE_ROOM')}>
                        Private Room
                      </div>
                      <div
                        className={`text-center optCard w-full sm:w-[30%] text-[0.7rem] cursor-pointer flex justify-center items-center border-[1px] p-4 rounded-[10px] ${
                          selectedStay.includes('SHARED_ROOM')
                            ? 'border-purple-500'
                            : 'border-zinc-900'
                        }`}
                        onClick={() => changeStayOption('SHARED_ROOM')}>
                        Shared Room
                      </div>
                      <div
                        className={`text-center optCard w-full sm:w-[30%] text-[0.7rem] cursor-pointer flex justify-center items-center border-[1px] p-4 rounded-[10px] ${
                          selectedStay.includes('PRIVATE_APARTMENT')
                            ? 'border-purple-500'
                            : 'border-zinc-900'
                        }`}
                        onClick={() => changeStayOption('PRIVATE_APARTMENT')}>
                        Private Apartment
                      </div>
                    </div>
                    <div className='border-b'></div>
                    <p className='font-bold'>Price Range</p>
                    <>
                      <Slider
                        getAriaLabel={() => 'Range Selection'}
                        value={range}
                        onChange={handleChangeSlider}
                        valueLabelDisplay='auto'
                        getAriaValueText={valuetext}
                        disableSwap
                        color='secondary'
                        min={0}
                        max={3000}
                      />
                      <div className='w-[100%] flex justify-between items-center'>
                        <p>
                          {country === 'hong-kong'
                            ? 'HK$'
                            : country === 'singapore'
                            ? 'S$'
                            : '€'}{' '}
                          0
                        </p>
                        <p>
                          {country === 'hong-kong'
                            ? 'HK$'
                            : country === 'singapore'
                            ? 'S$'
                            : '€'}{' '}
                          3000
                        </p>
                      </div>
                    </>
                    <div className='border-b'></div>
                    <p className='font-bold'>Number of rooms in the apartment</p>
                    <div className='flex flex-wrap items-center gap-2'>
                      {roomsNumber.map((room, index) => (
                        <div
                          key={index}
                          className={`p-[5px] text-[0.8rem] flex justify-center items-center cursor-pointer rounded-full w-[3rem] border-[1px] ${
                            selectedRoom === room
                              ? 'border-purple-500 border-[2px]'
                              : 'border-zinc-500'
                          } `}
                          onClick={() => changeRoomOption(String(room))}>
                          {room}
                        </div>
                      ))}
                    </div>
                    <div className='border-b'></div>
                    <p className='font-bold'>Size</p>
                    <>
                      <Slider
                        getAriaLabel={() => 'Range Selection'}
                        value={roomSize}
                        onChange={handleChangeSizeSlider}
                        valueLabelDisplay='auto'
                        getAriaValueText={valuetextRoomSize}
                        disableSwap
                        color='secondary'
                        min={0}
                        max={20}
                      />
                      <div className='w-[100%] flex justify-between items-center'>
                        <p>0 sqm</p>
                        <p>100 sqm</p>
                      </div>
                    </>
                    <div className='border-b'></div>
                    <>
                      <p className='font-bold'>District</p>
                      <div className='flex flex-col gap-2'>
                        <Checkbox
                          className='my-2'
                          checked={false}
                          onChange={e =>
                            handleDistrictCheckboxChange('Select All')
                          }>
                          Select All
                        </Checkbox>
                        {locations.map((location, index) => (
                          <Checkbox
                            className='my-2'
                            key={index}
                            checked={false}
                            onChange={e =>
                              handleDistrictCheckboxChange(location)
                            }>
                            {location}
                          </Checkbox>
                        ))}
                      </div>
                    </>
                  </div>
                </div>
              </div>
            ) : null}
          </>
          {/* countries */}
          {showCountries && (
            <div className='w-full fixed bottom-0 bg-white flex flex-col gap-4 rounded-xl border-4 border-b-0 shadow-2xl z-50'>
              <div className='w-full flex justify-between items-center p-8 border-b border-zinc-900'>
                <span className='text-left font-bold'>Find A Home</span>
                <RxCross1
                  onClick={() => setShowCountries(false)}
                  className='cursor-pointer'
                />
              </div>
              <p className='text-xl font-bold capitalize p-4'>{country}</p>
              <div className='flex gap-4 flex-wrap p-4 pb-16'>
                {countriesNames.map((country, index) => (
                  <p
                    key={index}
                    className='capitalize font-bold hover:border-b active:text-purple-500 hover:border-zinc-900 cursor-pointer'
                    onClick={() => {
                      navigate(`/ ${country} `)
                      setShowCountries(false)
                    }}>
                    {country}
                  </p>
                ))}
              </div>
            </div>
          )}
          {showMapOnMobile !== 'both' && (
            <div className='fixed bottom-[2rem] w-full flex md:none justify-center'>
              <div className='flex justify-center items-center w-[8rem] h-[2rem] cursor-pointer'>
                <p
                  className={`flex-1 ${
                    showMapOnMobile === 'map'
                      ? 'bg-black text-white'
                      : 'bg-white text-black'
                  } border-2 border-black p-2 text-center`}
                  onClick={() => setShowMapOnMobile('map')}>
                  Map
                </p>
                <p
                  className={`flex-1 ${
                    showMapOnMobile === 'list'
                      ? 'bg-black text-white'
                      : 'bg-white text-black'
                  } border-2 border-black p-2 text-center`}
                  onClick={() => setShowMapOnMobile('list')}>
                  List
                </p>
              </div>
            </div>
          )}
        </ConfigProvider>
      </div>
    </div>
  )
}

export default Rooms
