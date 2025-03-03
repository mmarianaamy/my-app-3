'use client'

import { useEffect, useState } from "react";

import { useFetchData } from "./hooks/getInfo";

interface dataProps {
  data: datadata,
  loading: boolean,
  error: errordata
}

interface errordata {
  code: number
  message: string
}

interface datadata {
  location: locationdata
  current: currentdata
}

interface locationdata {
  name: string
  country: string
}

interface currentdata {
  last_updated: string,
  temp_c: number,
  condition: conditiondata,
  wind_kph: number,
  feelslike_c: number
}

interface conditiondata {
  icon: string
}

export default function Home() {

  const [value, setValue] = useState("");

  const [lookup, setLookup] = useState("")

  const data : dataProps = useFetchData("https://api.weatherapi.com/v1/current.json?q=" + lookup + "&key=b5f3dbb46c5245faacf184355252602")

  useEffect(()=>{console.log(data)}, [data])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex gap-3 w-3/4 text-black">
        <input className="p-4 w-full nooutline rounded-lg" value={value} onChange={(e) => setValue(e.target.value)}></input>
        <button className="text-white p-4 border border-white rounded-lg" onClick={() => setLookup(value)}>Search</button>
      </div>
      {data.loading && 
      <div>
        <p>Loading...</p>
      </div>}
      {!data.data.location && 
      <div className="rounded-md flex flex-col items-center justify-center w-1/5 text-center p-3 bg-red-300">
        <p>Error: {data.error.message} Try Again.</p>
      </div>
      }
      {data.data.location && 
        <div className="rounded-md flex flex-col items-center justify-center w-1/5 text-center p-3 bg-indigo-900">
          <h3 className="text-5xl col-span-3">{data.data.location.name}</h3>
          <p>{data.data.location.country}</p>
          <p className="text-7xl p-5">{data.data.current.temp_c}°C</p>
          <div className="flex items-center justify-center">
            <img src={"https:" + data.data.current.condition.icon} alt="" width={100} height={100}/>
            <p>Wind: {data.data.current.wind_kph}kph</p>
            <p>Feels like: {data.data.current.feelslike_c}°C</p>
          </div>
        </div>
      }
    </div>
  );
}
