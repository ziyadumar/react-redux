import { useEffect, useState } from 'react'

const useSize = () => {
    const [isScreenSmall, setisScreenSmall] = useState(false);
    let checkScreenSize = () => {
        setisScreenSmall(window.innerWidth < 600);
    }

    useEffect(() => {
        // component did mount
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        // lifecycle ends here - componentUnmounting
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []) // no dependencies

    return isScreenSmall;
}

export default useSize

