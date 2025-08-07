// components/UI/SkeletonRow.jsx
export default function SkeletonRow() {
  return (
    <tr className="animate-pulse">
  <td className="p-3">
    <div className="flex items-center gap-2">
      <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
      <div className="w-24 h-4 bg-gray-700 rounded"></div>
    </div>
  </td>
  <td className="p-3">
    <div className="w-12 h-4 bg-gray-700 rounded"></div>
  </td>
  <td className="p-3">
    <div className="w-20 h-4 bg-gray-700 rounded"></div>
  </td>
   <td className="p-3">
    <div className="w-20 h-4 bg-gray-700 rounded"></div>
  </td>
   <td className="p-3">
    <div className="w-20 h-4 bg-gray-700 rounded"></div>
  </td>
   <td className="p-3">
    <div className="w-20 h-4 bg-gray-700 rounded"></div>
  </td>
   <td className="p-3">
    <div className="w-20 h-4 bg-gray-700 rounded"></div>
  </td>
   <td className="p-3">
    <div className="w-20 h-4 bg-gray-700 rounded"></div>
  </td>
   <td className="p-3">
    <div className="w-20 h-4 bg-gray-700 rounded"></div>
  </td>
</tr>
  );
}
