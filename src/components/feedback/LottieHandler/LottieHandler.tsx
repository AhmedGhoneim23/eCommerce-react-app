import Lottie from "lottie-react";
import notFound from "@assets/lottieFiles/notFound.json";
import error from "@assets/lottieFiles/error.json";
import empty from "@assets/lottieFiles/empty.json";
import loading from "@assets/lottieFiles/loading.json";

const lottieFilesMap = {
  notFound, error, empty, loading
}

type LottieHandlerProps = {
  type: keyof typeof lottieFilesMap;
  message?: string;
  className?: string;
}

const LottieHandler = ({type = "loading", message, className }: LottieHandlerProps) => {
  return (
  <>
    <div className="d-flex flex-column align-items-center">
      <Lottie animationData={lottieFilesMap[type]} style={{width: "350px"}} />
      <h1 className={className} style={{fontSize: "19px"}}>{message}</h1>
    </div>
    
  </>
    
  )
}

export default LottieHandler