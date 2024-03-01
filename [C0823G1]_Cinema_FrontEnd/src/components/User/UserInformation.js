import "../../style/test.css"
export default function UserInformation(){
    return(
        <>
            <div className="container light-style flex-grow-1 container-p-y">
                <h4 className="font-weight-bold py-3 mb-4">Thông Tin Tài Khoản</h4>
                <div className="card overflow-hidden">
                    <div className="row no-gutters row-bordered row-border-light">
                        <div className="col-md-3 pt-0">
                            <div className="list-group list-group-flush account-settings-links">
                                <a
                                    className="list-group-item list-group-item-action "
                                    href="#account-general"
                                >
                                    <div style={{ textAlign: "center" }}>
                                        <figure className="image-container">
                                            <img
                                                style={{ borderRadius: "100%", width: 150, height: 150 }}
                                                id="chosen-image"
                                                src="https://cdn.moveek.com/bundles/ornweb/img/no-avatar.png"
                                            />
                                            <p style={{ marginTop: 10 }}>Nguyen Minh Tuan</p>
                                            <span>
                  <i
                      style={{ color: "#EC7532" }}
                      className="fas fa-piggy-bank"
                  />{" "}
                                                Điểm tích luỹ: 120
                </span>
                                            <br />{" "}
                                        </figure>
                                    </div>
                                </a>
                                <a
                                    className="list-group-item list-group-item-action active"
                                    data-toggle="list"
                                    href="#account-general"
                                >
                                    <i className="far fa-address-card" /> Thông Tin Tài Khoản
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    data-toggle="list"
                                    href="#account-change-password"
                                >
                                    <i className="fas fa-exchange-alt" /> Đổi Mật Khẩu
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    data-toggle="list"
                                    href="#account-info"
                                >
                                    <i className="fas fa-history" /> Lịch Sử
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    data-toggle="list"
                                    href="#account-social-links"
                                >
                                    <i className="fas fa-ticket-alt" /> Vé đã đặt
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    data-toggle="list"
                                    href="#account-connections"
                                >
                                    <i className="fas fa-window-close" /> Vé đã huỷ
                                </a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="tab-content">
                                <div className="tab-pane fade active show" id="account-general">
                                    {/*                        <div class="card-body media align-items-center">*/}
                                    {/*                            <figure class="image-container">*/}
                                    {/*                            </figure>*/}
                                    {/*                            <div class="media-body ml-4">*/}
                                    {/*                                <div class="container">*/}
                                    {/*                                    <div class="form-group">*/}
                                    {/*                                        <label class="form-label">Tài khoản</label>*/}
                                    {/*                                        <input disabled type="text" class="form-control mb-1" value="nmaxwell">*/}
                                    {/*                                    </div>*/}
                                    {/*                                    <div class="form-group">*/}
                                    {/*                                        <label class="form-label">Tên</label>*/}
                                    {/*                                        <input disabled type="text" class="form-control" value="Nelle Maxwell">*/}
                                    {/*                                    </div>*/}
                                    {/*                                    <span><i style="color: #EC7532"*/}
                                    {/*                                             class="fas fa-piggy-bank"></i> Điểm tích luỹ: 120</span><br>*/}
                                    {/*                                    &lt;!&ndash; <label class="label-upload" for="upload-button">*/}
                                    {/*                                        <i class="fas fa-upload"></i> &nbsp; Choose A Photo*/}
                                    {/*                                    </label> &ndash;&gt;*/}
                                    {/*                                    &lt;!&ndash;                                    <input class="input-upload" type="file" id="upload-button" accept="image/*">&ndash;&gt;*/}
                                    {/*                                </div>*/}
                                    {/*                            </div>*/}
                                    {/*                        </div>*/}
                                    <hr className="border-light m-0" />
                                    <div className="card-body">
                                        <div className="form-group">
                                            <div className="form-group">
                                                <label className="form-label">Tên đăng nhập</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="nguyenminhtuan123"
                                                    disabled=""
                                                />
                                            </div>
                                            <label className="form-label">E-mail</label>
                                            <input
                                                type="text"
                                                className="form-control mb-1"
                                                defaultValue="gmail@gmail.com"
                                            />
                                            {/*                                <div class="alert alert-warning mt-3">*/}
                                            {/*                                    Your email is not confirmed. Please check your inbox.<br>*/}
                                            {/*                                    <a href="javascript:void(0)">Resend confirmation</a>*/}
                                            {/*                                </div>*/}
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Ngày Sinh</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="dd/mm/yyyy"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Giới Tính : </label>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input
                                                    type="radio"
                                                    id="customRadioInline1"
                                                    name="customRadioInline1"
                                                    className="custom-control-input"
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor="customRadioInline1"
                                                >
                                                    Nam
                                                </label>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input
                                                    type="radio"
                                                    id="customRadioInline2"
                                                    name="customRadioInline1"
                                                    className="custom-control-input"
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor="customRadioInline2"
                                                >
                                                    Nữ
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">CMND</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Chứng minh nhân dân"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Số Điện Thoại</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Số Điện Thoại"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Địa Chỉ</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Địa Chỉ"
                                            />
                                        </div>
                                        <div className="text-right mt-3">
                                            <button type="button" className="btn btn__add">
                                                Lưu
                                            </button>
                                            &nbsp;
                                            <button type="button" className="btn ">
                                                Huỷ
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="account-change-password">
                                    <div className="card-body pb-2">
                                        <div className="form-group">
                                            <label className="form-label">Mật Khẩu Hiện Tại</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Mật Khẩu Mới</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Xác Nhận Mật Khẩu Mới</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <button type="button" className="btn btn__add">
                                            Lưu
                                        </button>
                                        &nbsp;
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="account-info">
                                    <div className="card-body pb-2">
                                        <form className="form-inline my-2 my-lg-0">
                                            <div className="d-flex">
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <td>Từ:</td>
                                                        <td>
                                                            <label>
                                                                <input
                                                                    id="dateInput1"
                                                                    className="form-control mr-sm-2"
                                                                    type="date"
                                                                />
                                                            </label>
                                                        </td>
                                                        <td>Đến:</td>
                                                        <td>
                                                            <label>
                                                                <input
                                                                    id="dateInput2"
                                                                    className="form-control mr-sm-2"
                                                                    type="date"
                                                                />
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="radio"
                                                                id="html"
                                                                name="fav_language"
                                                                defaultValue="HTML"
                                                            />{" "}
                                                            Lịch sử cộng điểm
                                                        </td>
                                                        <td style={{ paddingLeft: 10 }}>
                                                            <input
                                                                type="radio"
                                                                id="html"
                                                                name="fav_language"
                                                                defaultValue="HTML"
                                                            />
                                                            Lịch sử dùng điểm
                                                        </td>
                                                        <td style={{ paddingLeft: 10 }}>
                                                            <button
                                                                className="btn btn__search my-2 my-sm-0"
                                                                style={{ width: 100 }}
                                                                type="submit"
                                                            >
                                                                Tìm kiếm
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </form>
                                    </div>
                                    <hr className="border-light m-0" />
                                    <div className="card-body pb-2">
                                        <table className="table table-striped table-hover">
                                            <thead>
                                            <tr>
                                                <th scope="col">Ngày Tạo</th>
                                                <th scope="col">Tên Phim</th>
                                                <th scope="col">Điểm Cộng</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">21/01/2017 8:08</th>
                                                <td>Harry Potter và Bảo bối tử thần</td>
                                                <td>120.000</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">21/01/2017 8:08</th>
                                                <td>Harry Potter và Bảo bối tử thần</td>
                                                <td>120.000</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">21/01/2017 8:08</th>
                                                <td>Harry Potter và Bảo bối tử thần</td>
                                                <td>120.000</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="account-social-links">
                                    <div className="card-body pb-2">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th scope="col">Tên Phim</th>
                                                <th scope="col">Ngày Đặt</th>
                                                <th scope="col">Tổng Tiền</th>
                                                <th scope="col">Trạng Thái</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">Harry Potter và Bảo bối tử thần</th>
                                                <td>21/01/2017 8:08</td>
                                                <td>120.000</td>
                                                <td>Đợi Nhận Vé</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Harry Potter và Bảo bối tử thần</th>
                                                <td>21/01/2017 8:08</td>
                                                <td>120.000</td>
                                                <td>Đã Nhận Vé</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Harry Potter và Bảo bối tử thần</th>
                                                <td>21/01/2017 8:08</td>
                                                <td>120.000</td>
                                                <td>Đợi Nhận Vé</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="account-connections">
                                    <div className="card-body">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th scope="col">Ngày Huỷ</th>
                                                <th scope="col">Tên Phim</th>
                                                <th scope="col">Trạng Thái</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">21/01/2017 8:08</th>
                                                <td>Harry Potter và Bảo bối tử thần</td>
                                                <td>Đã Huỷ</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">21/01/2017 8:08</th>
                                                <td>Harry Potter và Bảo bối tử thần</td>
                                                <td>Đang Chờ Xác Nhận</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">21/01/2017 8:08</th>
                                                <td>Harry Potter và Bảo bối tử thần</td>
                                                <td>Đang Chờ Xác Nhận</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="account-notifications">
                                    <div className="card-body pb-2">
                                        <h6 className="mb-4">Activity</h6>
                                        <div className="form-group">
                                            <label className="switcher">
                                                <input
                                                    type="checkbox"
                                                    className="switcher-input"
                                                    defaultChecked=""
                                                />
                                                <span className="switcher-indicator">
                    <span className="switcher-yes" />
                    <span className="switcher-no" />
                  </span>
                                                <span className="switcher-label">
                    Email me when someone comments on my article
                  </span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="switcher">
                                                <input
                                                    type="checkbox"
                                                    className="switcher-input"
                                                    defaultChecked=""
                                                />
                                                <span className="switcher-indicator">
                    <span className="switcher-yes" />
                    <span className="switcher-no" />
                  </span>
                                                <span className="switcher-label">
                    Email me when someone answers on my forum thread
                  </span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="switcher">
                                                <input type="checkbox" className="switcher-input" />
                                                <span className="switcher-indicator">
                    <span className="switcher-yes" />
                    <span className="switcher-no" />
                  </span>
                                                <span className="switcher-label">
                    Email me when someone follows me
                  </span>
                                            </label>
                                        </div>
                                    </div>
                                    <hr className="border-light m-0" />
                                    <div className="card-body pb-2">
                                        <h6 className="mb-4">Application</h6>
                                        <div className="form-group">
                                            <label className="switcher">
                                                <input
                                                    type="checkbox"
                                                    className="switcher-input"
                                                    defaultChecked=""
                                                />
                                                <span className="switcher-indicator">
                    <span className="switcher-yes" />
                    <span className="switcher-no" />
                  </span>
                                                <span className="switcher-label">News and announcements</span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="switcher">
                                                <input type="checkbox" className="switcher-input" />
                                                <span className="switcher-indicator">
                    <span className="switcher-yes" />
                    <span className="switcher-no" />
                  </span>
                                                <span className="switcher-label">Weekly product updates</span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="switcher">
                                                <input
                                                    type="checkbox"
                                                    className="switcher-input"
                                                    defaultChecked=""
                                                />
                                                <span className="switcher-indicator">
                    <span className="switcher-yes" />
                    <span className="switcher-no" />
                  </span>
                                                <span className="switcher-label">Weekly blog digest</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}