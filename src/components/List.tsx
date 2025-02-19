import { InfoDomain } from '../types/infoDomain';
import UserCard from './UserCard';

export default function List({ users }: { users: InfoDomain[] }) {
  return (
    <div className={`overflow-y-auto ${users?.length ? 'h-[450px]' : 'h-0'}`}>
      {users?.map((user, index) => <UserCard user={user} key={index} />)}
    </div>
  );
}
