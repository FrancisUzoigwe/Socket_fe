import { useDispatch } from "react-redux"
import { logOut } from "../../global/globalState"

const Sider = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <div onClick={() => {
                dispatch(logOut())
            }}>Sider</div>
        </div>
    )
}

export default Sider