import Image from 'next/image'
import React from 'react'

const Clips = ({ clip, imgsrc }) => {
    return (
        <>
            <div className='relative h-28 w-32 rounded-xl overflow-hidden lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14'>
                <Image
                    src={imgsrc}
                    unoptimized={true}
                    alt='img/clips'
                    className=' inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10'
                />
            </div>
        </>
    )
}

export default Clips 