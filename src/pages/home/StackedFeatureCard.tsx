const StackedFeatureCard = () => {
  return (
    <div className="h-screen bg-red-300 flex justify-center items-center sticky top-[300px]">
      <div className="max-w-3xl mx-auto p-8 rounded-xl shadow-lg bg-white sticky top-[300px]">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-indigo-100 text-indigo-800">
            Feature
          </span>
        </div>

        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Powerful Feature Title
        </h2>

        <p className="text-lg text-gray-600 mb-6">
          A compelling description of this amazing feature and how it can help
          your users achieve their goals. This section should clearly
          communicate the value proposition.
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2">
            <ul className="space-y-3">
              {[
                "Benefit one with specific details",
                "Another key benefit users will love",
                "A third impressive feature detail",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-gray-100 h-64 rounded-lg grid place-items-center">
            <div className="text-center text-gray-400">
              <svg
                className="mx-auto h-12 w-12 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p>Feature Image/Illustration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackedFeatureCard;