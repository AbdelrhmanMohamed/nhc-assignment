type ProductInfoRowProps = {
  label: string;
  value: React.ReactNode;
};

export default function ProductInfoRow({ label, value }: ProductInfoRowProps) {
  return (
    <div className="text-gray-700">
      <span className="font-medium">{label}:</span>{" "}
      <span className="text-primary font-semibold">{value}</span>
    </div>
  );
}
