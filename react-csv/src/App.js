import { CSVLink } from "react-csv";
import "./App.css";
import dummy from "./dummy.json";

function App() {
  const csv = [
    Object.keys(dummy[0]),
    ...dummy.map((value) => Object.values(value)),
  ];
  return (
    <div className="w-screen h-screen bg-[#304463]">
      <div className="flex justify-center pt-28">
        <CSVLink data={csv} filename="output">
          <button className="text-white text-[25px] font-[600] rounded-xl w-[12rem] h-[4rem] bg-[#7D8ABC]">
            Export csv
          </button>
        </CSVLink>
      </div>
      <div className="flex justify-center mt-4">
        <table className="border border-white">
          <thead>
            <tr>
              {Object.keys(dummy[0]).map((value, index) => {
                return (
                  <th
                    className="p-4 text-white text-[20px] bg-[#7D8ABC]"
                    key={index}
                  >
                    {value}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {dummy.map((value, index) => {
              return (
                <tr className="even:bg-slate-400" key={index}>
                  <th className="p-4 text-white text-[20px]">{value.id}</th>
                  <th className="p-4 text-white text-[20px]">{value.name}</th>
                  <th className="p-4 text-white text-[20px]">
                    {value.username}
                  </th>
                  <th className="p-4 text-white text-[20px]">{value.email}</th>
                  <th className="p-4 text-white text-[20px]">{value.phone}</th>
                  <th className="p-4 text-white text-[20px]">
                    {value.website}
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
