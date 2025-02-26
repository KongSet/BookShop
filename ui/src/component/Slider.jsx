import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { Button, Container, Image } from "react-bootstrap";
import img1 from "./../assets/Image1.png";
import img2 from "./../assets/Image2.png";
import img3 from "./../assets/Image3.png";
export default function Slider() {
    return (<>
        <section id="slider">
            <Container>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation

                >
                    <SwiperSlide>
                        <div className="row container px-5 mt-lg-5">
                            <div className="col-6 px-4">
                                <h2 className="text-center text-white pb-3">
                                    &quot;အရှေ့မြို့ရိုးမှမိုးရေစက်များ&quot;
                                </h2>
                                <p className="text-white text-center">
                                    &quot;ဒီအိပ်ထဲမှာ ကျွန်မအမေရဲ့ ဓါတ်ပုံလေးပါပါတယ် <br />
                                    အခု ကျွန်မ &lsquo;က&lsquo; တာကို မေမေလဲ သိစေ ကြည်စေချင်တဲ့<br />
                                    အတွက်ကြောင့် ဒီဓါတ်ပုံလေးကို ဒီထောင့်နားလေးမှာ <br />
                                    ထားခွင့်ပြုပါ။ တမလွန်ကနေ သူလဲကြည့်ပါစေ&quot;
                                </p>
                                <div className="d-flex px-5 gap-2 mt-5">
                                    <Button variant="success"><i className="fa fa-arrow-right"></i> Details</Button>
                                    <Button variant="warning"><i className="fa fa-cart-plus"></i> Add to Cart</Button>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="img">
                                    <Image src={img1} alt="အရှေ့မြို့ရိုးမှမိုးရေစက်များ"></Image>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row container px-5 mt-lg-5">
                            <div className="col-6 px-4">
                                <h2 className="text-center text-white pb-3">
                                    &quot;ကမ္ဘာကုန်ကျယ်သရွေ့ဝယ်&quot;
                                </h2>
                                <p className="text-white text-center">
                                    &quot;ပုလ္လင်နန်းမြိုင်၊ ရာထီးဆိုင်တို့၊ မခိုင်ပျက်ယွင်း၊ နိစ္စကင်း၏။ <br />
                                    မော်ကွန်းဝှဲလှိုင်း၊ စစ်သမိုင်းလည်း၊ မှုန်မှိုင်းညနှယ်၊<br /> ပျောက်၍ကွယ်လိမ့်။<br />
                                    မြင်းအိုသခင်၊ လယ်ကြီးရှင်နှင့်၊ လယ်ပြင်မီးခိုး၊ <br />
                                    လယ်မျိုးလုံမ၊ လုလင်လှ၏၊ သာစွဂုဏ်ပေါင်း၊<br /> လူ့ဇာတ်ကြောင်းသည်၊<br />
                                    မဟောင်းကမ္ဘာကုန်ကျယ် ဆက်လိမ့်တည်း&quot;
                                </p>
                                <div className="d-flex px-5 gap-2 mt-5">
                                    <Button variant="success"><i className="fa fa-arrow-right"></i> Details</Button>
                                    <Button variant="warning"><i className="fa fa-cart-plus"></i> Add to Cart</Button>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="img">
                                    <Image src={img2} alt="ကမ္ဘာကုန်ကျယ်သရွေ့ဝယ်"></Image>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row container px-5 mt-lg-5">
                            <div className="col-6 px-4">
                                <h2 className="text-center text-white pb-3">
                                    &quot;လေးသည်တော်ရှင်ရသေ့ နှင့် ဗုဒ္ဓယဉ်ကျေးမှု&quot;
                                </h2>
                                <p className="text-white text-center">
                                    &quot;ကျုပ်သတ်ရမယ့်သူဟာ ဘုရင်တစ်ပါးဖြစ်စေဦး၊ <br />
                                    မိန်းမချောတစ်‌ယောက်ဖြစ်စေဦး၊ ကလေးငယ်တစ်‌ယောက်ဖြစ်စေဦး၊ 
                                    ဘီလူးတစ်ကောင်ဖြစ်စေဦး၊ ...<br />
                                    အဲဒါတွေဟာ ကျုပ်အတွက် ဘာမှအရေးမပါဘူး။ <br />
                                    ကျုပ် အခု အသပြာတစ်ထောင်ယူထားတယ်။<br /> 
                                    အဲဒါနဲ့ ထိုက်တန်တဲ့ အလုပ် ကျုပ်လုပ်တယ်၊ ဒါပဲ&quot;
                                </p>
                                <div className="d-flex px-5 gap-2 mt-5">
                                    <Button variant="success"><i className="fa fa-arrow-right"></i> Details</Button>
                                    <Button variant="warning"><i className="fa fa-cart-plus"></i> Add to Cart</Button>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="img">
                                    <Image src={img3} alt="လေးသည်တော်ရှင်ရသေ့ နှင့် ဗုဒ္ဓယဉ်ကျေးမှု"></Image>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </section>
    </>);
}