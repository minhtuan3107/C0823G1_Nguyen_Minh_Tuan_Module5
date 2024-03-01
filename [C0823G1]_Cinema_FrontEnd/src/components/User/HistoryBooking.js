import './HistoryBookingCss.css'
import {useEffect, useState} from "react";

export default function HistoryBooking() {
    const [listHistory, setListHistory] = useState([]);
    useEffect(() => {

    }, []);
    return (
        <>
            <div className="container light-style ">
                <h4 className="font-weight-bold" style={{marginTop: 10}}>
                    Thông Tin Tài Khoản
                </h4>
                <div className="card ">
                    <div className="row ">
                        <div className="col-md-3 ">
                            <div className="list-group list-group-flush account-settings-links">
                                <a
                                    className="list-group-item list-group-item-action "
                                    href="#account-general"
                                >
                                    <div style={{textAlign: "center"}}>
                                        <figure className="image-container">
                                            <img
                                                style={{borderRadius: "100%", width: 150, height: 150}}
                                                id="chosen-image"
                                                src="https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png"
                                            />
                                            <p style={{marginTop: 10}}>Nguyen Minh Tuan</p>
                                            <span>
                  <i style={{color: "#EC7532"}} className="fas fa-piggy-bank"/>
                                                Điểm tích luỹ: 120
                </span>
                                            <br/>
                                        </figure>
                                    </div>
                                </a>
                                <a
                                    className="list-group-item list-group-item-action active"
                                    data-toggle="list"
                                    href="#account-general"
                                >
                                    <i className="fas fa-history"/> Lịch Sử
                                </a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <table className="table table-striped table-hover">
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            ư
        </>
    )
}
