
import ActiveLink from "../shared/ActiveLink";

const paths = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Contact",
    path: "/contact"
  }
]



export const Navbar = () => {



  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1>Navbar</h1>
      <ul className="flex space-x-4">
        {
          paths.map((path, index) => (
            <ActiveLink key={index}
              name={path.name}
              path={path.path}
            />
          ))
        }
      </ul>
    </nav>
  )
}