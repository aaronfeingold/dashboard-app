const UserCard = ({ user }) => (
  <li className="px-6 py-4 hover:bg-gray-50">
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
        {user.name.charAt(0)}
      </div>
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">{user.name}</div>
        <div className="text-sm text-gray-500">{user.email}</div>
      </div>
      <div className="ml-auto">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {user.role}
        </span>
      </div>
    </div>
  </li>
);

export default UserCard;
