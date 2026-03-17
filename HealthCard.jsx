export default function HealthCard({ title, value, color }) {
  return (
    <div className={`p-5 rounded-xl shadow-sm ${color}`}>
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="text-3xl font-bold mt-3">{value}</p>
    </div>
  );
}