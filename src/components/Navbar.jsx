import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-8'>
        <NavbarItem title="1980s" param="fetch1980s" />
        <NavbarItem title="1990s" param="fetch1990s" />
        <NavbarItem title="2000s" param="fetch2000s" />
        <NavbarItem title="2010s" param="fetch2010s" />
        <NavbarItem title="2020s" param="fetch2020s" />
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
