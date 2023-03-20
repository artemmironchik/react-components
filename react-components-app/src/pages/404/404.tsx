import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="m-auto text-center">
      <h3 className="text-4xl">404</h3>
      <h2 className="text-5xl">Page not found</h2>
      <div className="text-3xl mt-4">
        <span className="text-gray-500">Go to main page </span>
        <Link to="/" className="text-blue-700 hover:underline cursor-pointer">
          Main
        </Link>
      </div>
    </div>
  );
}
