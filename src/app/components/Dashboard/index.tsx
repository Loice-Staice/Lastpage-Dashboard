import React from 'react';

const Dashboard = () => {
  return (
    <div className="max-w-full mx-auto p-4 bg-gray-100">
      {/* Header */}
      <div className="flex items-center mb-4">
        <button className="mr-4 text-2xl">&larr;</button>
        <h1 className="text-2xl font-bold">David Maina</h1>
      </div>

      {/* User Info Table */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm font-medium text-gray-500">
              <th className="pb-2">Name</th>
              <th className="pb-2">Phone number</th>
              <th className="pb-2">Gadget Id</th>
              <th className="pb-2">Location</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm">
              <td>Davis Maina</td>
              <td>+254 707416386</td>
              <td>001</td>
              <td>Gitaru</td>
              <td><span className="text-green-500 font-medium">Active</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* pH */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">pH</h2>
          <div className="w-full h-32 mx-auto mb-4 relative">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E5E7EB" strokeWidth="3" />
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10B981" strokeWidth="3" strokeDasharray="75, 100" />
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#F59E0B" strokeWidth="3" strokeDasharray="25, 100" strokeDashoffset="-75" />
            </svg>
          </div>
          <div className="text-sm">
            <p><span className="inline-block w-3 h-3 bg-yellow-500 mr-2"></span>Acidic (0-5.9)</p>
            <p><span className="inline-block w-3 h-3 bg-yellow-500 mr-2"></span>Alkaline (7.5-14)</p>
            <p><span className="inline-block w-3 h-3 bg-green-500 mr-2"></span>Neutral (6.5-7.5)</p>
          </div>
        </div>

        {/* Moisture */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Moisture</h2>
          <div className="w-full h-32 mx-auto mb-4 relative">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E5E7EB" strokeWidth="3" />
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 a=0 -31.831" fill="none" stroke="#10B981" strokeWidth="3" strokeDasharray="50,100"/>
            </svg>
          </div>
          <div className="text-sm">
            <p><span className="inline-block w-3 h-3 bg-yellow-800 mr-2"></span>Dry (0%-10%)</p>
            <p><span className="inline-block w-3 h-3 bg-green-500 mr-2"></span>Moist (40%-50%)</p>
            <p><span className="inline-block w-3 h-3 bg-green-300 mr-2"></span>Excessive moist (80%-100%)</p>
          </div>
        </div>

        {/* Nutrients */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Nutrients</h2>
          <div className="w-full h-32 mx-auto mb-4 relative">
            <svg className="w-full h-full" viewBox="0 0 36,36">
              {/* SVG paths as before */}
            </svg>
          </div>
          <div className="text-sm">
            {/* Nutrient descriptions */}
          </div>
        </div>
      </div>
    </div>
   );
};

export default Dashboard;
