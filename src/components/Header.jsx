import CheckboxWithIcon from "./SwitchButton";
import SwitchSound from "./SwitchSound";
import SwitchMode from "./SwitchMode";

const Header = () => {

    return (
        <div className="w-full h-[50px] bg-slate-50 shadow-lg flex items-center justify-evenly text-[15px]">
            
            <a className="items-center flex">Overlaping:<SwitchSound/></a>
            

            <CheckboxWithIcon />
            <a className="items-center flex">Edit: <SwitchMode/></a>
            


        </div>
    );
};

export default Header;
