import SimpleVirtualization from "../components/SimpleVirtualization";
import VirtualizationWithVariableRowHeight from "../components/VirtualizationWithVariableRowHeight";

function Virtualization() {
  const names = Array.from({ length: 10000 }, (_, i) => `Name ${i + 1}`);
  const items = Array.from({ length: 10000 }, (_, i) =>
    i % 2 === 0
      ? { type: "state" as const, state: `State ${i / 2 + 1}` }
      : {
          type: "zip" as const,
          city: `City ${Math.floor(i / 2) + 1}`,
          zip: `Zip ${Math.floor(i / 2) + 1}`,
        },
  );
  return (
    <>
      <h1 className="mt-8 mb-4 font-bold text-2xl text-center">
        Virtualization With Static Row Height
      </h1>
      <div
        className="max-w-1/2 h-64 p-8 rounded-md border border-neutral-800"
        style={{ margin: "2rem auto" }}
      >
        <SimpleVirtualization names={names} />
      </div>
      <h1 className="mt-8 mb-4 font-bold text-2xl text-center">
        Virtualization With Variable Row Height
      </h1>
      <div
        className="max-w-1/2 h-64 p-8 rounded-md border border-neutral-800"
        style={{ margin: "2rem auto" }}
      >
        <VirtualizationWithVariableRowHeight items={items} />
      </div>
    </>
  );
}

export default Virtualization;
