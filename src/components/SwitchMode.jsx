import { useContext } from "react";
import { AppContext } from "../Context";

const SwitchMode = () => {
    const { isEditMode, setIsEditMode } = useContext(AppContext);

    const handleCheckboxChange = () => {
        setIsEditMode(!isEditMode);
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

export default SwitchMode