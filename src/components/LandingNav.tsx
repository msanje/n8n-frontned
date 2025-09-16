function LandingNav() {
  return (
    <div className="flex justify-between bg-gray-900 text-gray-400 h-16 w-full px-12">
      <div className="flex gap-8 text-sm">
        <div className="flex items-center">
          {/* LOGO */}
          <h1 className="text-3xl">n8n</h1>
        </div>

        <button>Product</button>
        <button>Use cases</button>
        <button>Docs</button>
        <button>Community</button>
        <button>Enterprise</button>
        <button>Pricing</button>
      </div>
      <div className="flex gap-8">
        <button>GitHub</button>
        <button>Sign in</button>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default LandingNav;
