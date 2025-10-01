import React from "react";
import Icon from "./Icons.tsx";

export default function IconDemo() {
  const [iconColor, setIconColor] = React.useState("#6B46C5");
  const [iconSize, setIconSize] = React.useState(48);

  const iconList = [
    { name: "logo", label: "Logo", desc: "Main app logo/brand" },
    { name: "app", label: "App Icon", desc: "Application icon" },
    { name: "workflow", label: "Workflow", desc: "Main workflow icon" },
    { name: "node", label: "Node", desc: "Individual node/step" },
    { name: "trigger", label: "Trigger", desc: "Workflow trigger" },
    { name: "execute", label: "Execute", desc: "Run workflow" },
    { name: "connection", label: "Connection", desc: "Node connections" },
    { name: "automation", label: "Automation", desc: "Automation symbol" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            N8N Clone Icons
          </h1>
          <p className="text-gray-600 mb-6">
            Single component with all workflow icons
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-700">
                Color:
              </label>
              <input
                type="color"
                value={iconColor}
                onChange={(e) => setIconColor(e.target.value)}
                className="w-12 h-10 rounded cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-700">Size:</label>
              <input
                type="range"
                min="24"
                max="96"
                value={iconSize}
                onChange={(e) => setIconSize(Number(e.target.value))}
                className="w-32"
              />
              <span className="text-sm text-gray-600 w-12">{iconSize}px</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {iconList.map(({ name, label, desc }) => (
              <div
                key={name}
                className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-400 transition-colors bg-gray-50"
              >
                <div className="flex justify-center mb-4">
                  <Icon
                    name={name}
                    size={iconSize}
                    color={iconColor}
                    className=""
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 text-center mb-1">
                  {label}
                </h3>
                <p className="text-sm text-gray-600 text-center">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Usage in Your App
          </h2>
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
            <pre className="text-sm">
              {`// Import the Icon component
import { Icon } from './components/Icon';

// Use anywhere in your app
function MyComponent() {
  return (
    <div>
      <Icon name="workflow" size={24} color="#6B46C5" />
      <Icon name="trigger" size={32} />
      <Icon name="execute" className="text-blue-500" />
    </div>
  );
}

// Available icon names:
// 'logo', 'app', 'workflow', 'node', 'trigger', 'execute', 'connection', 'automation'`}
            </pre>
          </div>
          <div className="mt-4 p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Props:</strong>
            </p>
            <ul className="text-sm text-gray-700 mt-2 space-y-1">
              <li>
                • <code className="bg-purple-100 px-2 py-1 rounded">name</code>{" "}
                - Icon name (required)
              </li>
              <li>
                • <code className="bg-purple-100 px-2 py-1 rounded">size</code>{" "}
                - Icon size in pixels (default: 24)
              </li>
              <li>
                • <code className="bg-purple-100 px-2 py-1 rounded">color</code>{" "}
                - Icon color (default: currentColor)
              </li>
              <li>
                •{" "}
                <code className="bg-purple-100 px-2 py-1 rounded">
                  className
                </code>{" "}
                - Additional CSS classes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
