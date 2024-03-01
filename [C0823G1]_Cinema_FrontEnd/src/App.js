import logo from './logo.svg';
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MovieList from "./components/Admin/Movie/MovieList";
import MovieCreate from "./components/Admin/Movie/MovieCreate";
import MovieEdit from "./components/Admin/Movie/MovieEdit";
import EmployeeList from "./components/Admin/Employee/EmployeeList";
import EmployeeCreate from "./components/Admin/Employee/EmployeeCreate";
import EmployeeEdit from "./components/Admin/Employee/EmployeeEdit";
import MemberStatistic from "./components/Admin/Statistic/MemberStatistic";
import MovieStatistic from "./components/Admin/Statistic/MovieStatistic";
import BookingSeat from "./components/Booking/BookingSeat";
import TicketBookingConfirmation from "./components/Booking/TicketBookingConfirmation";
import Checkout from "./components/Checkout/Checkout";
import DetailMovie from "./components/DetailMovie/DetailMovie";
import TicketCheckout from "./components/Employee/TicketCheckout";
import TicketList from "./components/Employee/TicketList";
import Register from "./components/Register/Register";
import UserInformation from "./components/User/UserInformation";
import HistoryBooking from "./components/User/HistoryBooking";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/home"} element={<Home/>}></Route>
                <Route path={"/login"} element={<Login/>}></Route>
                <Route path={"/register"} element={<Register/>}></Route>
                <Route path={"/movie"} element={<MovieList/>}></Route>
                <Route path={"/movie/create"} element={<MovieCreate/>}></Route>
                <Route path={"/movie/edit:id"} element={<MovieEdit/>}></Route>
                <Route path={"/employee"} element={<EmployeeList/>}></Route>
                <Route path={"/employee/create"} element={<EmployeeCreate/>}></Route>
                <Route path={"/employee/edit:id"} element={<EmployeeEdit/>}></Route>
                <Route path={"/statistic/member"} element={<MemberStatistic/>}></Route>
                <Route path={"/statistic/movie"} element={<MovieStatistic/>}></Route>
                <Route path={"/booking"} element={<BookingSeat/>}></Route>
                <Route path={"/booking/confirm"} element={<TicketBookingConfirmation/>}></Route>
                <Route path={"/booking/checkout"} element={<Checkout/>}></Route>
                <Route path={'detail/:id'} element={<DetailMovie/>}></Route>
                <Route path={"/employee/ticketCheckout"} element={<TicketCheckout/>}></Route>
                <Route path={"/employee/ticketList"} element={<TicketList/>}></Route>
                <Route path={"/user/information"} element={<UserInformation/>}></Route>
            </Routes>
        </>
    );
}

export default App;
