import { useState } from "react";

const Colors = () => {
  const [color, setColor] = useState("pink");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: `${color}` }}
    >
      <h1 className="font-bold flex justify-center align-middle p-8 text-3xl ">
        Change the colors{" "}
      </h1>
      <div className="fixed flex flex-wrap justify-center bottom-5  inset-x-0 px-2 gap-4  shadow-inner">
        <button
          className="bg-pink-500 px-4 py-2 m-4 rounded-xl shadow-lg"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="bg-blue-600  px-4 py-2 m-4 rounded-xl shadow-lg "
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="bg-green-500  px-4 py-2 m-4 rounded-xl shadow-2xl"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="bg-yellow-500  px-4 py-2 m-4 rounded-xl shadow-2xl"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="bg-purple-500  px-4 py-2 m-4 rounded-xl shadow-2xl"
          onClick={() => setColor("purple")}
        >
          purple
        </button>
        <button
          className="bg-rose-600  px-4 py-2 m-4 rounded-xl shadow-inner"
          onClick={() => setColor("red")}
        >
          Rose
        </button>
      </div>
    </div>
  );
};

export default Colors;
