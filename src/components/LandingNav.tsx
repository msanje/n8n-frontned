function LandingNav() {
  return (
    <div className="flex justify-between bg-gray-900 text-gray-400 h-16 w-full px-12">
      <div className="flex gap-8 text-sm">
        <div className="flex items-center">
          {/* LOGO */}
          <h1 className="text-3xl cursor-pointer">n8n</h1>
        </div>

        {/* <button className="cursor-pointer">Product</button> */}
        {/* <button className="cursor-pointer">Use cases</button> */}
        {/* <button className="cursor-pointer">Docs</button> */}
        {/* <button className="cursor-pointer">Community</button> */}
        {/* <button className="cursor-pointer">Enterprise</button> */}
        {/* <button className="cursor-pointer">Pricing</button> */}
      </div>
      <div className="flex gap-8">
        <button className="cursor-pointer">GitHub</button>
        <button className="cursor-pointer">Sign in</button>
        <button className="cursor-pointer">Get Started</button>
      </div>
    </div>
  );
}

export default LandingNav;
