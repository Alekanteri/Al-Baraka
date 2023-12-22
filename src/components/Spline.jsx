import Spline from "@splinetool/react-spline";
import Wheel from "../assets/img/Tire-Clip-Art-Transparent-File.png";
import '../sass/components/spline.scss'
import MacBook from '../assets/img/MacBook-Air-M2-Thumbnail.png'
import Pngwing from '../assets/img/pngwing.com.png'

export default function SplineApp() {
  return (
    <div className="spline">
      {/* <div className="spline__container_1">
        <img width={100} src={Wheel} alt="Wheel" />
      </div> */}
      {/* <div className="spline__container_2">
        <img width={100} src={MacBook} alt="MacBook" />
      </div> */}
      {/* <div className="spline__container_3">
        <img width={100} src={Pngwing} alt="MacBook" />
      </div> */}
      <Spline className="splineScene" scene="https://prod.spline.design/WAanC2ol5Nco1Vme/scene.splinecode" />
    </div>
  );
}
