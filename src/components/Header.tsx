import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (

    <div className='flex gap-7 p-6 bg-red-900'>
      <Link href="\">INTRODUCTION PAGE</Link>
      <Link href="\CONTACT">CONTACT PAGE</Link>
      <Link href="\HOME">HOME PAGE</Link>

    </div>
  )
}

export default Header
