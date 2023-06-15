import Header from "../components/Header";
import Spinner from "../components/spinner";
import chair from "../assets/chair.svg";
import lamp from "../assets/lamp.svg";

function Loading() {
  return (
    <div className="h-screen flex flex-col items-center justify-start gap-[100px] bg-[url('./assets/background.svg')]">
      <Header />
      <div className="relative w-[700px] h-[625px] flex flex-col justify-center items-center gap-12 rounded-md bg-white">
        <div className="w-4/5 h-3/5 flex items-center justify-center ">
          <Spinner />
        </div>
        <img
          src={chair}
          alt="chair"
          className="w-[220px] absolute bottom-[80px] left-[-120px]"
        />
        <img
          src={lamp}
          alt="lamp"
          className="w-[150px] absolute top-[80px] right-[-80px]"
        />
        <button className="w-[452px] h-[70px] text-semibold text-white bg-[#CC7541] text-xl uppercase rounded-lg">
          Generating Your Photo...
        </button>
      </div>
    </div>
  );
}

export default Loading;
