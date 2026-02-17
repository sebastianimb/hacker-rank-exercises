type InputProps = {
  data: {
    title: string;
    description: string;
  };
  setData: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
    }>
  >;
};

function Input({ data, setData }: InputProps) {
  return (
    <div className="flex flex-col justify-content-center align-items-center">
      <input
        className="w-100 border outline-none border-neutral-800 p-4 rounded-md"
        type="text"
        placeholder="Enter Title"
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
        data-testid="title-input"
      />
      <textarea
        className="mt-10 w-100 border outline-none border-neutral-800 p-4 rounded-md"
        placeholder="Enter Description"
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
        data-testid="description-input"
      />
    </div>
  );
}

export default Input;
