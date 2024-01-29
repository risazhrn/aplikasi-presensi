import React from "react";
import { IoIosMore } from "react-icons/io";
import { FiCalendar } from "react-icons/fi";
import { AiOutlineFileExcel } from "react-icons/ai";
import {
  Button,
  SparkLine,
  Card,
  Button2,
  Pie as PieChart,
} from "../components";
import {
  medicalproBranding,
  weeklyStats,
  SparklineAreaData,
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
  pieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import product9 from "../data/product9.jpg";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  SplineAreaSeries,
  Legend,
} from "@syncfusion/ej2-react-charts";
import avatar from '../data/avatar.jpg';

const Dashboard = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="mt-3">
      <div className="flex flex-wrap justify-center">
        <div className="md:w-800 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 my-3">
          <p className="text-sm font-semibold">Kamis, 28 Desember 2023</p>
          <div className="flex gap-3 mt-3">
            <div className="basis-1/3">
              <Card bgColor="bg-[#2F80ED]">
                <p>Tepat Waktu</p>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-semibold">50</p>
                    <p className="text-sm">Karyawan</p>
                  </div>
                  <p className="text-sm">50%</p>
                </div>
              </Card>
            </div>
            <div className="basis-1/3">
              <Card bgColor="bg-[#EB5757]">
                <p>Terlambat</p>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-semibold">25</p>
                    <p className="text-sm">Karyawan</p>
                  </div>
                  <p className="text-sm">25%</p>
                </div>
              </Card>
            </div>
            <div className="basis-1/3">
              <Card bgColor="bg-[#E5ECF6]" textColor="text-black">
                <p>Tidak Presensi</p>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-semibold">25</p>
                    <p className="text-sm">Karyawan</p>
                  </div>
                  <p className="text-sm">25%</p>
                </div>
              </Card>
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-8">
            <Button2
              color="#2F80ED"
              size={"md"}
              bgColor="white"
              text="Januari - 2023"
              bor
              icon={<FiCalendar />}
              borderRadius="10px"
            />

            <Button2
              color="white"
              size={"md"}
              bgColor="#2F80ED"
              text="Export"
              icon={<AiOutlineFileExcel />}
              borderRadius="10px"
            />
          </div>
          <ChartComponent
            id="charts"
            primaryXAxis={areaPrimaryXAxis}
            primaryYAxis={areaPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            background="#fff"
            legendSettings={{ background: "white" }}
          >
            <Inject services={[SplineAreaSeries, DateTime, Legend]} />
            <SeriesCollectionDirective>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              {areaCustomSeries.map((item, index) => (
                <SeriesDirective key={index} {...item} />
              ))}
            </SeriesCollectionDirective>
          </ChartComponent>

          {/* <div className="mt-10 ">
            {weeklyStats.map((item) => (
              <div
                key={item.title}
                className="flex justify-between mt-4 w-full"
              >
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{ background: item.iconBg }}
                    className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>

                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
            <div className="mt-4">
              <SparkLine
                currentColor={currentColor}
                id="area-sparkLine"
                height="160px"
                type="Area"
                data={SparklineAreaData}
                width="320"
                color="rgb(242, 252, 253)"
              />
            </div>
          </div> */}
        </div>
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-8 my-3 border-l">
          <div className="w-full">
            <p className="text-xl font-bold">Persentasi Presensi</p>
            <PieChart
              id="chart-pie"
              data={pieChartData}
              legendVisiblity
              height="full"
            />
          </div>
          <div className="mt-10">
            <p className="text-xl font-bold mb-4">Real Time Presensi</p>
            <ul>
              <li>
                <div className="flex gap-5 items-center border-color border-b-1 pb-6">
                  <img
                    className="rounded-full h-12 w-12"
                    src={avatar}
                    alt="user-profile"
                  />
                  <div>
                    <p className="font-semibold text-xl dark:text-gray-200">
                      Michael Roberts
                    </p>
                    <p className="text-red-500 text-sm font-semibold dark:text-gray-400">
                      Terlambat, 08:15
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-5 items-center border-color border-b-1 pb-6">
                  <img
                    className="rounded-full h-12 w-12"
                    src={avatar}
                    alt="user-profile"
                  />
                  <div>
                    <p className="font-semibold text-xl dark:text-gray-200">
                      Michael Roberts
                    </p>
                    <p className="text-red-500 text-sm font-semibold dark:text-gray-400">
                      Terlambat, 08:15
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-5 items-center border-color border-b-1 pb-6">
                  <img
                    className="rounded-full h-12 w-12"
                    src={avatar}
                    alt="user-profile"
                  />
                  <div>
                    <p className="font-semibold text-xl dark:text-gray-200">
                      Michael Roberts
                    </p>
                    <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
                      Tepat Waktu, 08:00
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-5 items-center border-color border-b-1 pb-6">
                  <img
                    className="rounded-full h-12 w-12"
                    src={avatar}
                    alt="user-profile"
                  />
                  <div>
                    <p className="font-semibold text-xl dark:text-gray-200">
                      Michael Roberts
                    </p>
                    <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
                      Tepat Waktu, 08:00
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-5 items-center border-color border-b-1 pb-6">
                  <img
                    className="rounded-full h-12 w-12"
                    src={avatar}
                    alt="user-profile"
                  />
                  <div>
                    <p className="font-semibold text-xl dark:text-gray-200">
                      Michael Roberts
                    </p>
                    <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
                      Tepat Waktu, 08:00
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
