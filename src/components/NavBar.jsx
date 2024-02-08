import { Avatar, DarkThemeToggle, Dropdown } from "flowbite-react";
import useAuthCalls from "../hooks/useAuthCalls";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const links = [
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "New Blog",
    path: "/newblog",
  },
  {
    title: "My Blogs",
    path: "/my-blogs",
  },
  {
    title: "Profile",
    path: "/profile",
  },
  {
    title: "About",
    path: "/about",
  },
];

const NavBar = () => {
  const { logout } = useAuthCalls();
  const  currentUser  = useSelector(state => state.auth.currentUser);

 
  
// const currentUser = {
//     id:58,
//     username:'umitmester',
//     first_name: 'Umit',
//     last_name: 'Mester',
//     email: 'umit@gmail.com',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
//     bio: "I am Umit",
//     token: "yes"
// }
  const navigate = useNavigate();

  return (
    <>
      <nav className="dark:bg-slate-800 bg-slate-500 flex justify-between items-center p-4 text-white fixed top-0 w-full z-10 ">
        <DarkThemeToggle className="bg-white dark:bg-slate-500" />

        <span
          onClick={() => navigate("/dashboard")}
          role="button"
          className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Umit Mester's Blog
        </span>

        <div className="flex md:order-2 z-30">
         <Dropdown
         arrowIcon={false}
        //  inline={true}
        label={<Avatar
        alt="User settings"
        img={currentUser?.image}
        rounded={true}
      />
      }>
        {currentUser ? (
              <>
                <Dropdown.Header>
                  <span className="block text-sm">{currentUser?.first_name}</span>
                  <span className="block truncate text-sm font-medium">
                    {currentUser?.email}
                  </span>
                </Dropdown.Header>
                {links.map(item => (
                  <Dropdown.Item className="bg-white dark:bg-slate-500" key={item.title} onClick={() => navigate(item.path)}>
                    {item.title}
                  </Dropdown.Item>
                ))}

                <Dropdown.Divider />
                <Dropdown.Item className="bg-white dark:bg-slate-500" onClick={() => logout()}>Sign out</Dropdown.Item>
              </>
            ) : (
              <>
                <Dropdown.Item className='bg-gray-100 dark:bg-gray-800 dark:text-white text-gray-500' onClick={() => navigate("/login")}>
                  Login
                </Dropdown.Item>
                <Dropdown.Item  className='bg-gray-100 dark:bg-gray-800 dark:text-white text-gray-500' onClick={() => navigate("/register")}>
                  Register
                </Dropdown.Item>
              </>
            )}
         

         </Dropdown>
        </div>
      </nav>
      <div className="h-[55px]"></div>
    </>
  );
};

export default NavBar;
