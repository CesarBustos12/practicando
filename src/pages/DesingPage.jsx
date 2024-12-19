import image from "../img/image.png";
import icono1 from "../img/icon1.png";
import icono2 from "../img/icono2.png";
import icono3 from "../img/icono3.png";
import icono4 from "../img/icono 4.png";
import mapa from "../img/mapa.png";
import first from "../img/first.png";
import {
  Building2,
  DollarSign,
  Users,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Flame,
  Zap,
  Droplets,
} from "lucide-react";
import { Link } from "react-router-dom";

export const DesingPage = () => {
  return (
    <>
      <div className="flex min-h-screen bg-[#F1F2F7]">
        <div className="w-[260px] p-8 flex flex-col relative">
          <div className="absolute top-[5%] bottom-[5%] right-0 w-[1px] bg-gray-300"></div>
          <div className="mb-8">
            <h1 className="text-xl font-bold text-indigo-900">HOMMY</h1>
          </div>
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <img src={first} className="w-15 h-15 rounded-full" alt="first" />
              <div className="flex flex-col">
                <h2 className="font-bold text-gray-900 text-lg">Adam Ringl</h2>
                <p className="text-sm text-gray-500">Chief Manager</p>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-5 p-3 rounded-lg text-gray-600">
              <div className="p-4 rounded-xl bg-white">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <div className="font-bold">Property</div>
                <div className="text-sm text-gray-500">15 facilities</div>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 rounded-lg text-gray-600">
              <div className="p-4 rounded-xl bg-indigo-500 shadow-xl shadow-indigo-500/50">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold">Payments</div>
                <div className="text-sm text-gray-500">$ 8,354 in queue</div>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 rounded-lg text-gray-600">
              <div className="p-4 rounded-xl bg-white">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold">Team</div>
                <div className="text-sm text-gray-500">5 members</div>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 rounded-lg text-gray-600">
              <div className="p-4 rounded-xl bg-white">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold">Analytics</div>
                <div className="text-sm text-gray-500">12 advices</div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <img src={image} className="flex items-center w-full h-30" />
          </div>
        </div>

        <main className="flex-1 p-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-white rounded-xl p-6 mb-10 shadow">
              <div className="flex flex-wrap md:flex-nowrap gap-20">
                <div className="ml-auto mb-6">
                  <h2 className="text-sm text-gray-500 mb-4 ml-3 font-semibold">
                    PAYMENTS QUEQUE
                  </h2>
                  <div className="flex flex-col mb-10 ml-1">
                    <div className="relative text-6xl font-bold text-[#2C405B] mb-6">
                      <span className="absolute left-0 top-1 text-2xl ml-3">
                        $
                      </span>
                      <span className="ml-8">8,354</span>
                    </div>

                    <div className="flex gap-10 text-sm text-gray-400">
                      
                      <div className="relative p-4 font-semibold">
                        Utilities
                        <span className="text-gray-900 font-bold p-4">
                          $ 6,250
                        </span>
                        
                        <div className="relative mt-2 h-1 w-full bg-gray-300 rounded">
                          <div className="absolute h-full w-3/4 bg-green-500 rounded" />
                        </div>
                      </div>

                      <div className="relative p-4 font-semibold">
                        Rent
                        <span className="text-gray-900 font-bold p-5">
                          $ 2,104
                        </span>
                        <div className="relative mt-2 h-1 w-full bg-gray-300 rounded">
                          <div className="absolute top-0 left-0 h-full w-1/4 bg-orange-400 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-20">
                    <Link to="/" className="bg-indigo-600 font-bold text-white px-6 py-3 rounded-full ml-4">
                      <span>PAY ALL</span>
                      <span className="ml-10">{">"}</span>
                    </Link>
                    <div className="flex gap-2">
                      <button className="p-1 bg-gray-100 rounded-full border">
                        <ChevronLeft className="w-5 h-5 text-black" />
                      </button>
                      <button className="p-1 bg-gray-100 rounded-full border">
                        <ChevronRight className="w-5 h-5 text-black" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-3 gap-4">
                  <div className="rounded-2xl p-4 text-white bg-gradient-to-b from-blue-400 to-pink-200">
                    <div className="bg-blue-500 rounded-full p-3 inline-block mb-2 ml-4">
                      <Droplets className="w-8 h-8" />
                    </div>
                    <p className="text-xl font-bold text-white mb-10 ml-4">
                      Water
                    </p>
                    <div className="relative text-5xl font-bold text-[#2C405B] mb-4 ml-4">
                      <span className="absolute left-0 top-1 text-2xl ml-1">
                        $
                      </span>
                      <span className="ml-6">432</span>
                    </div>
                    <p className="text-sm opacity-90 text-slate-900 ml-5">
                      Commission is 3%
                    </p>
                  </div>

                  <div className="rounded-2xl p-4 text-white bg-gradient-to-b from-orange-400 to-orange-100">
                    <div className="bg-orange-500 rounded-full p-3 inline-block mb-2 ml-4">
                      <Flame className="w-8 h-8" />
                    </div>
                    <p className="text-xl text-white font-bold mb-10 ml-4">
                      Heating
                    </p>
                    <div className="relative text-5xl font-bold text-[#2C405B] mb-4 ml-4">
                      <span className="absolute left-0 top-1 text-2xl ml-1">
                        $
                      </span>
                      <span className="ml-6">352</span>
                    </div>
                    <p className="text-sm opacity-90 text-slate-900 ml-5">
                      Commission is 5%
                    </p>
                  </div>

                  <div className="rounded-2xl p-4 text-white bg-gradient-to-b from-green-400 to-orange-100">
                    <div className="bg-green-500 rounded-full p-3 inline-block mb-2 ml-4">
                      <Zap className="w-8 h-8" />
                    </div>
                    <p className="text-xl text-white mb-10 font-bold ml-4">
                      Electricity
                    </p>
                    <div className="relative text-5xl font-bold text-[#2C405B] mb-4 ml-4">
                      <span className="absolute left-0 top-1 text-2xl ml-1">
                        $
                      </span>
                      <span className="ml-6">570</span>
                    </div>
                    <p className="text-sm opacity-90 text-slate-900 ml-5">
                      Commission is 1%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4">
              <div className="p-4 flex-1">
                <div className="flex gap-8 mb-2">
                  <div className="relative p-4 text-slate-900 font-bold text-2xl ">
                    Tenants
                    <div className="relative mt-2 h-1 w-full bg-[#f2f2f5] rounded">
                      <div className="absolute top-0 left-0 h-full w-2/4 bg-indigo-600 rounded" />
                    </div>
                  </div>
                  <button className="text-gray-400 pb-2 text-2xl">Organizations</button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-separate border-spacing-y-1">
                    <tbody>
                      <tr>
                        <td className="py-4 pl-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden p-2">
                              <img
                                src={icono1}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-semibold text-[#31404C]">
                                Nolan Ice
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">$ 2500</td>
                        <td className="py-4">11 Months</td>
                        <td className="py-4">
                          <div className="flex justify-center items-center w-8 h-8 mx-auto">
                            <span className="text-black text-sm font-bold">
                              ...
                            </span>
                          </div>
                        </td>
                      </tr>

                      <tr className="bg-gray-50">
                        <td className="py-2 pl-4 rounded-l-full">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 overflow-hidden p-2">
                              <img src={icono3} className="w-full h-full" />
                            </div>
                            <div>
                              <div className="font-bold text-[#31404C]">
                                Villy Lustos
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">$ 1234</td>
                        <td className="py-4">14 Months</td>
                        <td className="py-4 rounded-r-full">
                          <div className="flex justify-center items-center mx-auto">
                            <div className="bg-indigo-600 w-8 h-8 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm font-bold p-2">
                                ...
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="py-4 pl-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg overflow-hidden p-2">
                              <img src={icono2} className="w-full h-full" />
                            </div>
                            <div>
                              <div className="font-semibold text-[#31404C]">
                                Gerry Lonse
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">$ 1463</td>
                        <td className="py-4">13 Months</td>
                        <td className="py-4">
                          <div className="flex justify-center items-center w-8 h-8 mx-auto">
                            <span className="text-black text-sm font-bold">
                              ...
                            </span>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="py-4 pl-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg overflow-hidden p-2">
                              <img src={icono4} className="w-full h-full" />
                            </div>
                            <div>
                              <div className="font-semibold text-[#31404C]">
                                Niko Veid
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">$ 1355</td>
                        <td className="py-4">43 Months</td>
                        <td className="py-4">
                          <div className="flex justify-center items-center w-8 h-8 mx-auto">
                            <span className="text-black text-sm font-bold">
                              ...
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 flex-2">
                <div className="relative">
                  <h2 className="text-2xl font-bold mb-2 p-2 text-slate-900 flex items-center">
                    Alerts
                    <span className="absolute -top-2 left-[80px] w-6 h-6 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      12
                    </span>
                  </h2>
                </div>

                <div className="relative h-[250px] rounded-lg overflow-hidden mt-4">
                  <img
                    src={mapa}
                    className="w-full h-full object-cover"
                    alt="Mapa"
                  />
                </div>

                <div className="mt-6 flex items-center justify-center gap-x-20">
                  <button className="bg-indigo-600 text-white px-6 py-3 font-bold rounded-full flex items-center">
                    <span>EXPLORE</span>
                    <span className="ml-6">{">"}</span>
                  </button>

                  <div className="text-sm text-gray-600">
                    <p className="text-sm text-gray-400 font-bold text-center">
                      Last updated
                    </p>
                    <p className="text-slate-900 font-semibold text-center">
                      2 hours
                      <span className="text-gray-400 font-semibold ml-1">
                        ago.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </main>
      </div>
    </>
  );
};
