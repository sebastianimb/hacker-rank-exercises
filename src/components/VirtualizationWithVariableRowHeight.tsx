import { List } from "react-window";
import { type RowComponentProps } from "react-window";

type Item =
  | { type: "state"; state: string }
  | { type: "zip"; city: string; zip: string };

type RowProps = {
  items: Item[];
};

function RowComponentWithVariableRowHeight({
  index,
  items,
  style,
}: RowComponentProps<{
  items: Item[];
}>) {
  return (
    <div
      className="flex rounded-md px-4 border border-neutral-700 items-center justify-between"
      style={style}
    >
      {items[index].type === "state"
        ? items[index].state
        : `${items[index].city}, ${items[index].zip}`}
      <div className="text-green-500 text-xs">{`${index + 1} of ${items.length}`}</div>
    </div>
  );
}

function VirtualizationWithVariableRowHeight({ items }: { items: Item[] }) {
  return (
    <List
      rowComponent={RowComponentWithVariableRowHeight}
      rowCount={items.length}
      rowHeight={rowHeight}
      rowProps={{ items }}
    />
  );
}

function rowHeight(index: number, { items }: RowProps) {
  switch (items[index].type) {
    case "state": {
      return 32;
    }
    case "zip": {
      return 56;
    }
  }
}

export default VirtualizationWithVariableRowHeight;
