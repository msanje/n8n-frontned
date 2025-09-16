export default function Footer() {
  return (
    <div className="h-24 py-6 justify-center fixed bottom-0 left-0 w-full shadow-inner">
      <div id="footer" className="h-full flex flex-col justify-center">
        <hr className="border-t-2 border-gray-300 mb-6" />
        <div className="flex justify-between text-sm text-gray-500 px-8">
          <p>© 2025 n8n. All rights reserved.</p>
          <div className="flex gap-4 text-orange-500">
            <a href="#">Status page</a>
            <a href="#">Impressum</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
}
