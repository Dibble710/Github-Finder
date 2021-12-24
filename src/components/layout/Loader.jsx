import Spinner from "./assets/spinner.gif";

function Loader() {
  return (
    <div className="w-100 mt-20">
      <img
        className="text-center mx-auto"
        width={180}
        src={Spinner}
        alt="loading..."
      />
    </div>
  );
}

export default Loader;
