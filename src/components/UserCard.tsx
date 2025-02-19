import { InfoDomain } from '../types/infoDomain';

const UserCard = ({ user }: { user: InfoDomain }) => {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg bg-white p-4 my-[10px]">
      <div className="font-bold text-xl mb-2">
        {user.username || 'Unnamed User'}
      </div>
      <p className="text-gray-700 text-base">
        <strong>Email:</strong> {user.email || 'N/A'}
      </p>
      <p className="text-gray-700 text-base">
        <strong>Name:</strong> {user.name || 'N/A'}
      </p>
      <p className="text-gray-700 text-base">
        <strong>IP Address:</strong> {user.ip_address || 'N/A'}
      </p>
      <p className="text-gray-700 text-base">
        <strong>Phone:</strong> {user.phone || 'N/A'}
      </p>
      <p className="text-gray-700 text-base">
        <strong>Database:</strong> {user.database_name || 'N/A'}
      </p>
      <p className="text-gray-700 text-base">
        <strong>Address:</strong> {user.address || 'N/A'}
      </p>
      <p className="text-gray-700 text-base">
        <strong>Password:</strong> {user.password || 'N/A'}
      </p>
      <p className="text-gray-700 text-base">
        <strong>VIN:</strong> {user.vin || 'N/A'}
      </p>
    </div>
  );
};

export default UserCard;
