import { PerspectiveCamera } from "@react-three/drei"

export default function Three() {

    // Local helper function
    const CONST_PI = 3.14159
    function angleToRadians(angle_in_degrees) {
        return CONST_PI*(angle_in_degrees/180)
    }

    return (
        <>
            {/* camera */}
            <PerspectiveCamera makeDefault position={[0, 1, 5]}/>

            {/* ball */}
            <mesh position={[0,0.5,0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="#ffaaff" />
            </mesh>

            {/* floor */}
            <mesh rotation={[angleToRadians(-90),0,0]}>
                <planeGeometry args={[7,7]}/>
                <meshStandardMaterial color="#99aaff" />
            </mesh>

            <ambientLight args={["#f0f0ff", 1]}/>
        </>
        
    )
}