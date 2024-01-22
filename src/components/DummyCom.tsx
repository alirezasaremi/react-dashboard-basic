const DummyCom = () => {
  return (
    <div className="mt-6">
      <div className="flex flex-row space-x-3">
        <div className="border border-gray-300 shadow h-72 w-full rounded-md p-3">
          <h3 className="text-gray-500">Section 1</h3>
        </div>
        <div className="border border-gray-300 shadow h-72 w-full rounded-md p-3">
          <h3 className="text-gray-500">Section 2</h3>
        </div>
      </div>
      <div className="border border-gray-300 shadow h-96 w-full rounded-md mt-4 p-3 bg-stone-50">
        <h3 className="text-gray-500">Section 3</h3>
      </div>
    </div>
  );
};

export default DummyCom;
