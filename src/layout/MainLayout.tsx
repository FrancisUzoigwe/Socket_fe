import { Outlet } from "react-router-dom"
import Sider from "../components/static/Sider"
const MainLayout = () => {
    return (
        <div>
            <Sider />
            <Outlet />
        </div>
    )
}

export default MainLayout