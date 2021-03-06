import React from "react";
import { Link } from "react-router-dom";
    
function Home() {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="slider">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img id="mid" src="https://soict.hust.edu.vn/wp-content/uploads/Slide-show-website-2.png" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/t-1.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img id="mid" src="https://soict.hust.edu.vn/wp-content/uploads/SoICT-Talk-5.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img id="mid" src="https://soict.hust.edu.vn/wp-content/uploads/???nh-chung.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Four slide label</h5>
                                <p>Some representative placeholder content for the Four slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div style={{ height: "7px" }} class="underline"></div>
            <h2 style={{ textalign: "center", marginTop: "30px", marginBottom: "30px" }}>TIN M???I NH???T</h2>
            <div id="newfeed">
                <div class="card" style={{ width: "18rem", height: "23rem" }}>
                    <img src="https://soict.hust.edu.vn/wp-content/uploads/BKAI-NAVER-Challenge-2022-02.jpg" class="card-img-top" alt="..." />
                    <div style={{ height: "7px" }} class="underline"></div>
                    <div class="card-body">
                        <h5 id="left" class="post-title is-larger uppercase">V??NG CHUNG K???T BKAI-NAVER CHALLENGE 2022</h5>
                        <p id="lefttext" class="from_the_blog_excerpt ">BKAI-NAVER Challenge 2022 l?? ho???t ?????ng thu???c d??? ??n h???p t??c nghi??n c???u AI gi???a Trung t??m BKAI, Tr?????ng CNTT&amp;TT v?? T???p...</p>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem", height: "23rem" }}>
                    <img src="https://soict.hust.edu.vn/wp-content/uploads/05-Hoi-truong.jpg" class="card-img-top" alt="..." />
                    <div style={{ height: "7px" }} class="underline"></div>
                    <div class="card-body">
                        <h5 id="left" class="post-title is-larger uppercase">INNOVATION DAY V?? CU???C THI S??NG T???O ?? T?????NG SINH VI??N CREATIVE IDEA CHALLENGE 2022</h5>
                        <p id="lefttext" class="from_the_blog_excerpt ">Ng??y 14/05/2022, Innovation Day 2022 ???? di???n ra th??nh c??ng v???i r???t nhi???u ho???t ?????ng, tr???i nghi???m th?? v???, bao g???m: T???a...</p>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem", height: "23rem" }}>
                    <img src="https://soict.hust.edu.vn/wp-content/uploads/HT-SV-Ng-Van-Quyen-cover-1.jpg" class="card-img-top" alt="..." />
                    <div style={{ height: "7px" }} class="underline"></div>
                    <div class="card-body">
                        <h5 id="left" class="post-title is-larger uppercase">SOICT ?????ng h??nh v?? h??? tr??? sinh vi??n Nguy???n V??n Quy???n</h5>
                        <p id="lefttext" class="from_the_blog_excerpt ">Nguy???n V??n Quy???n l?? m???t sinh vi??n l???p KHMT04 K65 thu???c Tr?????ng CNTT&amp;TT, ?????i h???c B??ch khoa H?? N???i. Ho??n c???nh gia...</p>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem", height: "23rem" }}>
                    <img src="https://soict.hust.edu.vn/wp-content/uploads/DAT01879.jpg" class="card-img-top" alt="..." />
                    <div style={{ height: "7px" }} class="underline"></div>
                    <div class="card-body">
                        <h5 id="left" class="post-title is-larger uppercase">???T???NG K???T ?????I H???I ?????I BI???U ??O??N THANH NI??N TR?????NG C??NG NGH??? TH??NG TIN V?? TRUY???N TH??NG &#8211; NHI???M K??? 2022-2024</h5>
                        <p id="lefttext" class="from_the_blog_excerpt ">???V??o h???i 14h ng??y 07/05/2022 t???i H???i tr?????ng d???c t??a nh?? B1, ???????c s??? ?????ng ?? c???a ??o??n thanh ni??n Tr?????ng ?????i...</p>
                    </div>
                </div>
            </div>
            <div class="card text-center">
                <div id="gachsukien" class="card-header">
                    <Link id="sukien" to="/about">Xem th??m tin t???c</Link>
                </div>
                <div id="bg" class="card-body">
                    <h2 style={{ color: "white", textalign: "center", marginTop: "30px", marginBottom: "30px" }} class="card-title">S??? ki???n m???i nh???t</h2>
                    <div id="newfeed">
                        <div class="card" style={{ width: "18rem", height: "18rem" }}>
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/SoICT-Talk-5.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 id="left">SoICT???s Talk ??? Episode 5: V??o B??ch khoa ????? l??m vi???c KH??!!!</h5>
                                <div id="lefttext" class="eventtime">
                                    <span>Th???i gian:</span>
                                    <span> 9:00 AM - 25/10/2020</span>
                                </div>
                                <div id="lefttext" class="location-event">
                                    <span>?????a ??i???m:</span>
                                    <span> H???i tr?????ng C2</span>
                                </div>
                            </div>
                        </div>
                        <div class="card" style={{ width: "18rem", height: "18rem" }}>
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/Cover-event-final-UPDATE.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 id="left">SoICT ??? IBM Hackathon 2020</h5>
                                <div id="lefttext" class="eventtime">
                                    <span>Th???i gian:</span>
                                    <span> 5:00 PM - 26/06/2020</span>
                                </div>
                                <div id="lefttext" class="location-event">
                                    <span>?????a ??i???m:</span>
                                    <span> T??a nh?? B1</span>
                                </div>
                            </div>
                        </div>
                        <div class="card" style={{ width: "18rem", height: "18rem" }}>
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/Cover-event-final.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 id="left">Ng??y H???i ?????nh H?????ng V?? ?????i M???i S??ng T???o 2020</h5>
                                <div id="lefttext" class="eventtime">
                                    <span>Th???i gian:</span>
                                    <span> 7:30 AM - 13/06/2020</span>
                                </div>
                                <div id="lefttext" class="location-event">
                                    <span>?????a ??i???m:</span>
                                    <span> Tr?????ng ?????i h???c B??ch khoa H?? N???i</span>
                                </div>
                            </div>
                        </div>
                        <div class="card" style={{ width: "18rem", height: "18rem" }}>
                            <img src="https://soict.hust.edu.vn/wp-content/uploads/Cover-event-fb-final-of-final.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 id="left">T?? v???n Tuy???n sinh ?????i h???c 2020 ??? C??c ng??nh thu???c l??nh v???c CNTT</h5>
                                <div id="lefttext" class="eventtime">
                                    <span>Th???i gian:</span>
                                    <span> 9:00 AM - 30/04/2020</span>
                                </div>
                                <div id="lefttext" class="location-event">
                                    <span>?????a ??i???m:</span>
                                    <span> Livestream tr??n fanpage Vi???n</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="gachsukien" class="card-footer text-muted">
                    <p id="sukien">Xem th??m s??? ki???n</p>
                </div>
            </div>
            <h2 style={{ textalign: "center", marginTop: "30px", marginBottom: "30px" }}>????O T???O - TUY???N SINH</h2>
            <div>
                <div class="container-fluid" style={{ textalign: "center", width: "915px" }}>
                    <p>N??m 2020, T??? ch???c Gi??o d???c Quacquarelli Symonds (vi???t t???t QS ??? V????ng qu???c Anh) ???? ????nh gi?? v?? x???p ch???t l?????ng ????o t???o v?? nghi??n c???u c???a ??HBK H?? N???i trong c??c l??nh v???c m?? Tr?????ng ??ang ?????m nh???n thu???c nh??m h???ng t??? 451 ?????n 500 tr??n to??n Th??? gi???i, ti???p t???c gi??? v??? tr?? s??? 1 t???i Vi???t Nam.</p>
                </div>
            </div>
            <div>
                <div class="container-fluid">
                    <div className=" container-md flexoday" style={{width: "60%"}}>
                        <div class="card mb-3">
                            <div  class="row g-0">
                                <div  class="col-md-4">
                                <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/152127_1-400x267.jpg" class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div id="left" class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">CH????NG TR??NH ????O T???O</h5>
                                    <p class="card-text">Tr?????ng hi???n ??ang cung c???p h??n 20 ch????ng tr??nh ????o t???o ch???t l?????ng cao thu???c 3 h??? ?????i h???c, ThS v?? TS; trong ????, c?? ch????ng tr??nh ???????c th??? tr?????ng lao ?????ng qu???c t??? ????n nh???n v???i h??n 60% sinh vi??n t???t nghi???p l??m vi???c ??? n?????c ngo??i. C??c ch????ng tr??nh ????o t???o thu???c v??o 3 nh??m ng??nh ch??nh: Khoa h???c M??y t??nh, K??? thu???t M??y t??nh, v?? Khoa h???c D??? li???u v?? Tr?? tu??? Nh??n t???o???</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-4">
                                <img style={{width:"300"}} src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/IMG_8268_2-001-400x268.jpg" class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                <div id="left" class="card-body">
                                    <h5 class="card-title">KI???N T???O T????NG LAI V???I SoICT</h5>
                                    <p class="card-text">Th????ng hi???u K??? s?? CNTT B??ch khoa ???? v?????t ra kh???i bi??n gi???i n?????c nh??, v?? ng??y c??ng ch???ng minh ???????c ch???t l?????ng tr??n tr?????ng Qu???c t???. Trong l??n s??ng Chuy???n ?????i s???, l???a ch???n ph??t tri???n t????ng lai v???i SoICT s??? ??em l???i cho c??c b???n c?? h???i tr??? th??nh c??c chuy??n gia c??ng ngh???, c?? kh??? n??ng l??m ch??? v?? d???n d???t s??? ph??t tri???n KHCN n?????c nh????? </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card text-center">
                    <div id="bg2" class="card-body">
                        <h2 style={{ color: "white", textalign: "center", marginTop: "30px", marginBottom: "30px" }} class="card-title">H???P T??C ?????I NGO???I</h2>
                        <div class="container-fluid" style={{color:"white",textalign: "center", width: "915px" }}>
                            <p class="card-text">Tr?????ng CNTT&TT lu??n coi tr???ng c??c ho???t ?????ng h???p t??c qu???c t??? v?? h???p t??c doanh nghi???p ????? n??ng cao ch???t l?????ng c??c ho???t gi???ng d???y, nghi??n c???u v?? chuy???n giao c??ng ngh???.</p>
                        </div>
                        <div class="container-fluid">
                    <div className=" container-md flexoday1" style={{width: "80%"}}>
                        <div class="card mb-3">
                            <div  class="row g-0">
                                <div  class="col-md-4">
                                <img style={{width:"300px"}} src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/Screen-Shot-2019-05-02-at-1.51.23-PM-400x318.png" class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div id="left" class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">C??C TR?????NG ?????I T??C</h5>
                                    <p class="card-text">Tr?????ng CNTT&TT c?? quan h??? h???p t??c v???i nhi???u tr?????ng ?????i h???c v?? vi???n nghi??n c???u uy t??n tr??n Th??? gi???i. Th??ng qua h???p t??c, sinh vi??n c???a Tr?????ng c?? c?? h???i h???c t???p, nghi??n c???u t???i c??c tr?????ng ?????i t??c th??ng qua c??c h???c b???ng trao ?????i sinh vi??n, c??ng nh?? c??c d??? ??n h???p t??c nghi??n c???u. Tr?????ng h???p t??c v???i c??c ?????i h???c l???n ??? Ch??u ??u, Nh???t B???n??? ????? cung c???p cho sinh vi??n c??c ch????ng tr??nh ????o t???o song b???ng (double degree), m???t h??nh th???c ???du h???c??? kinh t??? v?? hi???u qu?????? (xem ti???p)</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-4">
                                <img style={{width:"300px"}} src="https://soict.hust.edu.vn/wp-content/uploads/DJI_0030-fixed2-mini-20190727T100030844048.jpg" class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                <div id="left" class="card-body">
                                    <h5 class="card-title">DOANH NGHI???P ?????I T??C</h5>
                                    <p class="card-text">????o t???o v?? nghi??n c???u r???t c???n s??? h???p t??c th???c ch???t v???i c???ng ?????ng doanh nghi???p. Tr?????ng hi???n ??ang duy tr?? h???p t??c v???i m???ng l?????i g???m h??n 130 doanh nghi???p CNTT trong v?? ngo??i n?????c, trong ???? c?? th??? k??? t???i HEDSPI Supporting Partner Network (HEDSPI-SPN), m???ng l?????i h??? tr??? sinh vi??n t??ng c?????ng ngo???i ng???, ph??t tri???n k??? n??ng m???m, c??ng nh?? l??m quen v???i v??n h??a DN ????? gia t??ng s???c c???nh tranh trong th??? tr?????ng lao ?????ng qu???c t?????? (xem ti???p)</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <h2 style={{ textalign: "center", marginTop: "30px", marginBottom: "30px" }}>C???U SINH VI??N</h2>
            <div id="newfeed">
                <div class="card" style={{ width: "18rem", height: "23rem" }}>
                    <img src="https://soict.hust.edu.vn/wp-content/uploads/205feec3d18738d96196.jpg" class="card-img-top" alt="..." />
                    <div style={{ height: "7px" }} class="underline"></div>
                    <div class="card-body">
                        <h5 id="left" class="post-title is-larger uppercase">Ho??ng Vi???t Anh ??? Ch??? c?? m???t t??nh y??u duy nh???t</h5>
                        <p id="lefttext" class="from_the_blog_excerpt ">Gia nh???p FPT n??m 1993, t??? khi c??n l?? sinh vi??n n??m 3 khoa CNTT ??H B??ch...</p>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem", height: "23rem" }}>
                    <img src="https://soict.hust.edu.vn/wp-content/uploads/Lu-Thanh-Long.jpg" class="card-img-top" alt="..." />
                    <div style={{ height: "7px" }} class="underline"></div>
                    <div class="card-body">
                        <h5 id="left" class="post-title is-larger uppercase">L??? Th??nh Long ??? Th??? l??nh c??ng ngh???</h5>
                        <p id="lefttext" class="from_the_blog_excerpt ">Nh???c ?????n ng??i tr?????ng ???? g???n b?? su???t 5 n??m h???c ?????i h???c, doanh nh??n L??? Th??nh...</p>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem", height: "23rem" }}>
                    <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/nam-2014-nguyen-ha-dong-va-flappy-bird-trong-hanh-trinh-mang-den-nhung-dieu-ky-dieu--400x267.jpg" class="card-img-top" alt="..." />
                    <div style={{ height: "7px" }} class="underline"></div>
                    <div class="card-body">
                        <h5 id="left" class="post-title is-larger uppercase">Nguy???n H?? ????ng ??? Cha ????? Flappy Bird ???n??o lo???n??? Th??? gi???i</h5>
                        <p id="lefttext" class="from_the_blog_excerpt ">T???p ch?? c??ng ngh??? Cnet c???a M??? c??ng b??? danh s??ch 25 ???ng d???ng c?? ???nh h?????ng...</p>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem", height: "23rem" }}>
                    <img src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/hungtran-400x250.jpg" class="card-img-top" alt="..." />
                    <div style={{ height: "7px" }} class="underline"></div>
                    <div class="card-body">
                        <h5 id="left" class="post-title is-larger uppercase">???TH??ng Tr???n ??? T???m g????ng kh???i nghi???p ng?????i Vi???t t???i Silicon Valley</h5>
                        <p id="lefttext" class="from_the_blog_excerpt ">??????G??i ????ng ch??? ng???a??? c???a ng?????i d??ng Tr???n Vi???t H??ng l?? c???u nghi??n c???u sinh Qu??? Gi??o...</p>
                    </div>
                </div>
            </div>
            <div class="card text-center">
                    <div id="bg3" class="card-body">
                        <h2 style={{textalign: "center", marginTop: "30px", marginBottom: "30px" }} class="card-title">V??? CH??NG T??I</h2>
                        <div class="container-fluid">
                        <div id="flex" className=" container-md flexoday1" style={{width: "80%"}}>
                            <p>QS ranking 2022<br></br>
                            <h1>401 ??? 450<br></br></h1>tr??n Th??? gi???i trong nh??m ng??nh <br></br> Khoa h???c M??y t??nh v?? H??? th???ng Th??ng tin</p>
                            <p>Sinh vi??n thu???c TOP<br></br>
                            <h1>1%0<br></br></h1>??i???m cao nh???t Kh???i A <br></br>To??n qu???c m??a Tuy???n sinh 2019 </p>
                            <p>Sinh vi??n<br></br>
                            <h1>4.000+</h1></p>
                            <p>Ch????ng tr??nh ????o t???o<br></br>
                            <h1>17+<br></br></h1>thu???c c??c h??? ????o t???o <br></br> c??? nh??n, k??? s??, th???c s??? khoa h???c, ti???n s??? </p>
                            <p>?????i t??c<br></br>
                            <h1>200+<br></br></h1>c??c tr?????ng ?????i h???c, vi???n nghi??n c???u<br></br> , t???p ??o??n, c??ng ty trong n?????c v?? qu???c t??? </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card text-center">
                    <div id="bg4" class="card-body">
                    Copyright ?? Tr?????ng C??ng ngh??? Th??ng tin v?? Truy???n th??ng
                    </div>  
            </div>
        </>
    )
}

export default Home;
