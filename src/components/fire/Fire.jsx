import Fireworks from "fireworks-js"
import { useEffect, useRef } from "react"

const FireworksDemo = () => {
    const containRef = useRef(null)

    useEffect(() => {
      const fireworks = new Fireworks(containRef.current)
      fireworks.start()

      return () => fireworks.stop()
    },[])

    return(
        <div ref={containRef} className="w-full h-screen fixed top-0 "></div>
    )
  }

  export default FireworksDemo