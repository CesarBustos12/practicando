import {
  ArrowDown,
  ArrowUp,
  Repeat,
  Bitcoin,
  MessageSquareMore,
  IdCard,
  Fan,
  UtilityPole,
  Antenna,
} from "lucide-react";
import Header from "../sections/Header";
import Button from "../components/Button";
import circle from "../img/logo/circle.png";
import Card from "../components/Card";
import TradingFee from "../components/TradingFee";

export const PaginaDiseño = () => {
  const titleSection = "text-gray-700 font-medium";
  const textBold = "font-bold, text-black";

  return (
    <>
      <div className="min-h-screen bg-[#F1F8FF] p-2">
        <div className="max-w-7xl mx-auto">

          <div className="bg-white rounded-xl shadow-lg p-8">
          <Header />
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-gray-500 font-medium mb-4">
                BALANCE DETAILS
              </h2>
              <div className="mb-4">
                <p className="text-5xl text-black font-bold mb-1">
                  $2,128,022.00
                </p>
                <p className="text-sm font-semibold text-gray-400">
                  3.30142057 BTC
                </p>
              </div>

              <div className="flex space-x-8 mb-6">
                <div className="flex items-center space-x-6">
                  <div className="w-9 h-9 bg-cyan-200 text-cyan-600 rounded-lg flex items-center justify-center">
                    <ArrowDown className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-black text-xl font-bold">$3,256.00</p>
                    <p className="text-sm text-gray-400">Income</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <ArrowUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-black text-xl font-bold">$1,289.00</p>
                    <p className="text-sm text-gray-400">Expense</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-6">
                <Button Titulo="RECEIVE" className="text-white bg-cyan-500 font-semibold border-transparent px-12 shadow-lg shadow-cyan-200"/>
                <Button Titulo="SEND" className="text-white bg-blue-600 font-semibold border-transparent px-16 shadow-lg shadow-blue-200"/>
              </div>
            </div>

            <div className="hidden md:block w-px bg-gray-300 my-4"></div>

            <div className="flex-1 flex justify-center items-center">
              <img src={circle} alt="Circle" className="rounded-lg h-60" />
            </div>

            <div className="flex-1 grid gap-4">
              <div className={`flex justify-between items-center ${textBold}`}>
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-r from-orange-200 to-orange-200">
                    <Bitcoin className="text-orange-400 " />
                  </div>

                  <div className="ml-3">
                    <p className="font-medium">BTC</p>
                    <p className="text-sm text-gray-500">Bitcoin</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">37%</p>
                  <p className="text-green-400 font-thin">+2.5%</p>
                </div>
              </div>

              <div className={`flex justify-between items-center ${textBold}`}>
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-r from-blue-200 to-blue-300">
                    <Antenna className="text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">STE</p>
                    <p className="text-sm text-gray-500">Streamex</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">25%</p>
                  <p className="text-green-400 font-thin">+7.2%</p>
                </div>
              </div>

              <div className={`flex justify-between items-center ${textBold}`}>
                <div className="flex items-center">
                  <div className="flex justify-center items-center w-9 h-9 rounded-lg bg-gradient-to-r from-cyan-200 to-cyan-200">
                    <Fan className="text-cyan-500" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">XRP</p>
                    <p className="text-sm text-gray-500">Ripple</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">20%</p>
                  <p className="text-green-400 font-thin">+3.1%</p>
                </div>
              </div>

              <div className={`flex justify-between items-center ${textBold}`}>
                <div className="flex items-center">
                  <div className="flex justify-center items-center w-9 h-9 rounded-lg bg-gradient-to-r from-green-200 to-green-300">
                    <UtilityPole className="text-green-500" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">USDT</p>
                    <p className="text-sm text-gray-500">Tether</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">20%</p>
                  <p className="text-green-400 font-thin">+1.8%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className="flex flex-col lg:flex-row gap-x-20 p-6">
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-10">
                <h2 className={titleSection}>WALLETS</h2>
                <button className="text-gray-700">More →</button>
              </div>
              <div className="flex gap-9">
                <Card className="bg-gradient-to-br from-orange-400 to-yellow-300 shadow-lg shadow-orange-200 w-full">
                  <div className="flex flex-col h-full justify-between mb-20">
                    <div>
                      <div className="inline-flex items-center justify-center p-3 bg-white rounded-md shadow-md">
                        <Bitcoin className="text-orange-400 w-6 h-6" />
                      </div>
                      <p className="text-xl opacity-80 mt-4">Bitcoin</p>
                    </div>

                    <div>
                      <p className="text-2xl font-bold">$3,256.00</p>
                      <p className="text-sm opacity-80"> 3.30142057 BTC</p>
                    </div>
                  </div>
                </Card>
                <Card className="bg-gradient-to-br from-blue-400 to-blue-500 shadow-lg shadow-blue-200 w-full">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="inline-flex items-center justify-center p-3 bg-white rounded-md shadow-md">
                        <Antenna className="text-blue-400 w-6 h-6" />
                      </div>
                      <p className="text-xl opacity-80 mt-4">Streamex</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">$1,123.00</p>
                      <p className="text-sm opacity-80">23.30146542 STE</p>
                    </div>
                  </div>
                </Card>
                <Card className="bg-gradient-to-br from-cyan-400 to-cyan-500 shadow-lg shadow-cyan-200 w-full">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="inline-flex items-center justify-center p-3 bg-white rounded-md shadow-md">
                        <Fan className="text-cyan-300 w-6 h-6" />
                      </div>
                      <p className="text-xl opacity-80 mt-4">Ripple</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">$3,789.00</p>
                      <p className="text-sm opacity-80">12.24670982 XRP</p>
                    </div>
                  </div>
                </Card>
                <Card className="bg-gradient-to-br from-green-400 to-green-500 shadow-lg shadow-green-200 w-full">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="inline-flex items-center justify-center p-3 bg-white rounded-md shadow-md">
                        <UtilityPole className="text-green-400 w-6 h-6" />
                      </div>
                      <p className="text-xl opacity-80 mt-4">Tether</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">$1,525.00</p>
                      <p className="text-sm opacity-80">≈ 1,525.00 USDT</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="lg:w-1/4">
              <div className="flex justify-between items-center mb-10">
                <h2 className={titleSection}>TRADING FEES</h2>
                <button className="text-gray-700">More →</button>
              </div>
              <div className="space-y-8">
                <TradingFee
                  title="Maker"
                  rate="0.069%"
                  progress={50}
                  icon={Repeat}
                  progressColor="bg-cyan-200"
                />
                <TradingFee
                  title="Taker"
                  rate="0.075%"
                  progress={30}
                  icon={Repeat}
                  iconBgColor="bg-blue-100"
                  progressColor="bg-blue-400"
                  iconColor="text-blue-400"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-x-20 p-6">
            <div>
              <div className="flex justify-between items-center mb-10">
                <h2 className={titleSection}>TRANSACTIONS</h2>
                <button className="text-gray-500">More →</button>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white rounded-lg shadow-lg">
                      <ArrowUp className="w-8 h-8 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-medium text-xl text-black">
                        Sent USDT
                      </p>
                      <p className="text-sm text-gray-500">23 Feb, 2020</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-blue-500">-$1,678.00</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white rounded-lg shadow-lg">
                      <ArrowDown className="w-8 h-8 text-cyan-500" />
                    </div>
                    <div>
                      <p className="font-medium text-xl text-black">
                        Received BTC
                      </p>
                      <p className="text-sm text-gray-500">23 Feb, 2020</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-cyan-500">+$3,098.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-10">
                <h2 className={titleSection}>SECURITY</h2>
                <button className="text-gray-500">More →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-white rounded-xl shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-orange-200 rounded-lg">
                        <IdCard className="w-8 h-8 text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium text-black">Identity</p>
                        <p className="text-sm text-gray-500">
                          Verify your identity
                        </p>
                      </div>
                    </div>
                    <div className="w-12 h-6 bg-gray-200 rounded-full p-1 duration-300 ease-in-out">
                      <div className="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"></div>
                    </div>
                  </div>
                </Card>
                <Card className="bg-white rounded-xl shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-green-200 rounded-lg">
                        <MessageSquareMore className="w-8 h-8 text-green-500" />
                      </div>
                      <div>
                        <p className="font-medium text-black">Phone</p>
                        <p className="text-sm text-gray-500">
                          Add your phone number
                        </p>
                      </div>
                    </div>
                    <div className="w-12 h-6 bg-gray-200 rounded-full p-1 duration-300 ease-in-out">
                      <div className="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"></div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
