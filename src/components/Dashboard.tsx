import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="">
      <h1>Hello world</h1>
      <Navbar />
      <h1 className="pl-12 py-4 text-4xl">Dashboard</h1>
      <div className="flex w-full h-screen gap-4">
        <div className="w-1/2 h-1/2 ml-48">
          <div className="flex flex-row justify-between p-8">
            {/* TODO: Add an icon here */}
            <button className="border border-orange-500 p-2 rounded-sm text-orange-500">
              Settings
            </button>
            {/* TODO: Add an icon here */}
            <button className="bg-green-600 p-2 px-8 text-white rounded-sm cursor-pointer">
              Upgrade plan
            </button>
          </div>
          <div
            id="dashboard_options"
            className="flex flex-col justify-around items-center mt-18 h-36"
          >
            {/* TODO: Bring the user name */}
            <h1 className="text-2xl">sanjayachar</h1>
            <button
              onClick={() => navigate("/home")}
              className="bg-orange-500 p-2 px-12 rounded-sm text-white cursor-pointer"
            >
              Open instance
            </button>
            {/* TODO: Green icon to show online */}
            <div>
              <p className="text-gray-300">Currently online</p>
              <span className="text-gray-400">Running version n8n@1.110.1</span>
            </div>
          </div>
          <div id="footer" className="">
            <hr className="border-t-2 border-gray-300 my-36" />
            <div className="flex justify-between items-center px-4 text-sm text-gray-400 h-12">
              <span>Last updated: 2 hours ago</span>
              <button className="border border-orange-500 text-orange-500 px-4 py-1 rounded-sm">
                Refresh
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-1/2 mr-48">
          <div>
            <div>
              <img src="/card_community.png" alt="Community" />
            </div>
            <h3>Need help implementing a specific workflow?</h3>
            <p>
              Join our community forums to ask questions and share workflow
              solutions with the n8n team and other helpful n8n users.
            </p>
            <button className="border border-orange-500 text-orange-500 p-2">
              Visit forums
            </button>
          </div>
          {/* <div> */}
          {/*   <hr className="border-t-2 border-gray-300 my-36" /> */}
          {/* </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
