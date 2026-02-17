import { List } from "react-window";
import { type RowComponentProps } from "react-window";

function SimpleRowComponent({
  index,
  names,
  style,
}: RowComponentProps<{
  names: string[];
}>) {
  return (
    <div
      className="flex rounded-md px-4 border border-neutral-700 items-center justify-between"
      style={style}
    >
      <p>{names[index]}</p>
      <div className="text-green-500 text-xs">{`${index + 1} of ${names.length}`}</div>
    </div>
  );
}
function SimpleVirtualization({ names }: { names: string[] }) {
  return (
    <List
      rowComponent={SimpleRowComponent}
      rowCount={names.length}
      rowHeight={48}
      rowProps={{ names }}
    />
  );
}

export default SimpleVirtualization;
