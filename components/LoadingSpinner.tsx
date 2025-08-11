import Image from 'next/image';
import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-[10vh]">
            <div className="w-24 h-24 animate-spin-slow">
                <Image
                    src="/head-loading.png"
                    alt="Loading..."
                    width={96}
                    height={96}
                    className="object-contain"
                />
            </div>
        </div>
    );
}

export default LoadingSpinner
