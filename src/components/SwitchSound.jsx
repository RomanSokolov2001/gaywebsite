import { useContext } from "react";
import { AppContext } from "../Context";

const SwitchSound = () => {
    const { isSoundsOverlapping, setIsSoundsOverlapping } = useContext(AppContext);

    const handleCheckboxChange = () => {
        setIsSoundsOverlapping(!isSoundsOverlapping);
    };
    return (
        <div className="mt-4">
            <label className="switch">
                <input type="checkbox" onChange={handleCheckboxChange} />
                <span className="slider"></span>
            </label>
        </div>
    )
}

export default SwitchSound