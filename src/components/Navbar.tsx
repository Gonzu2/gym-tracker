import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faTv,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import { NavigationMenu } from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

//Importing styling
import "./css/navbar.css";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/context/authContext";

function Navbar() {
  const { user, handleLogout } = useAuth();
  const navigateTo = useNavigate();

  React.useEffect(() => {
    if (user !== null) {
      setLoggedIn(true);
      setUserName(user.name);
    } else {
      setLoggedIn(false);
      setUserName("");
      navigateTo("/");
    }
  }, [user]);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userName, setUserName] = React.useState("");

  return (
    <NavigationMenu className=" w-[100%] max-w-[100dvw] justify-start bg-[#19191] border-b-[1px] border-b-[#2b2a2a] box-border relative overflow-hidden">
      <ul className="flex items-center justify-between w-[100%] box-border relative">
        <li className="navbar-brand">
          <a href="/">Gym Tracker</a>
        </li>
        <li className="navbar-menu box-border">
          <Sheet>
            <SheetTrigger>
              <FontAwesomeIcon className="bars-icon" icon={faBars} />
            </SheetTrigger>
            <SheetContent className="border-l-[1px] border-l-[#2b2a2a]">
              <SheetHeader>
                <SheetTitle>Gym Tracker</SheetTitle>
              </SheetHeader>
              <ul className="sheet-list flex flex-col items-start justify-start h-[97%] mt-[25px] pb-5 box-border relative">
                {!loggedIn ? (
                  <li className="sheet-list-item flex flex-row items-center justify-between w-[100%] text-white">
                    <SheetClose asChild>
                      <div
                        className="sheet-list-item-login flex items-center justify-center text-lg cursor-pointer bg-[#272626] p-[7px] rounded-lg"
                        onClick={() => navigateTo("/login")}
                      >
                        Login
                      </div>
                    </SheetClose>
                    <SheetClose asChild>
                      <div
                        className="sheet-list-item-register flex items-center justify-center text-lg cursor-pointer bg-[#272626] p-[7px] rounded-lg"
                        onClick={() => navigateTo("/register")}
                      >
                        Register
                      </div>
                    </SheetClose>
                  </li>
                ) : (
                  <li className="sheet-list-item flex flex-row items-center justify-between w-[100%] text-white">
                    <div className="flex flex-row justify-start items-center gap-x-3 text-white">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>{userName}</AvatarFallback>
                      </Avatar>
                      <h1 className="text-white text-lg">{userName}</h1>
                    </div>
                    <div className="sheet-list-item-login flex items-center justify-center text-lg cursor-pointer bg-slate-800 p-[7px] rounded-lg">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <button>Log out</button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-white">
                              Are you sure you want to log out?
                            </AlertDialogTitle>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="text-white">
                              Cancel
                            </AlertDialogCancel>
                            <SheetClose asChild>
                              <AlertDialogAction onClick={handleLogout}>
                                Log out
                              </AlertDialogAction>
                            </SheetClose>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </li>
                )}
                <li className="relative box-border w-[100%] mt-[15px]">
                  <div className="line w-[100%]"></div>
                </li>
                <li className="sheet-list-item flex flex-row items-center justify-start w-[100%] text-white mt-[15px]">
                  <SheetClose asChild>
                    <h1
                      className="text-lg w-[100%] text-start relative box-border cursor-pointer flex items-center justify-start gap-x-2"
                      onClick={() => navigateTo("/")}
                    >
                      <FontAwesomeIcon icon={faHome} />
                      Home
                    </h1>
                  </SheetClose>
                </li>
                <li className="sheet-list-item flex flex-row items-center justify-start w-[100%] text-white mt-[15px]">
                  <SheetClose asChild>
                    <h1
                      className="text-lg w-[100%] text-start relative box-border cursor-pointer flex items-center justify-start gap-x-2"
                      onClick={() => navigateTo("/about-us")}
                    >
                      <FontAwesomeIcon icon={faUsers} />
                      About us
                    </h1>
                  </SheetClose>
                </li>
                <li className="sheet-list-item flex flex-row items-center justify-start w-[100%] text-white mt-[15px]">
                  <h1 className="text-lg w-[100%] text-start relative box-border cursor-pointer flex items-center justify-start gap-x-2">
                    <FontAwesomeIcon icon={faTv} />
                    {!loggedIn ? (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <button>Dashboard</button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-white">
                              You must be logged in, in order to view dashboard!
                            </AlertDialogTitle>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="text-white">
                              Cancel
                            </AlertDialogCancel>
                            <SheetClose asChild>
                              <AlertDialogAction
                                onClick={() => navigateTo("/login")}
                              >
                                Login
                              </AlertDialogAction>
                            </SheetClose>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    ) : (
                      <SheetClose>
                        <span onClick={() => navigateTo("/dashboard")}>
                          Dashboard
                        </span>
                      </SheetClose>
                    )}
                  </h1>
                </li>
                <li className="sheet-list-item flex flex-col items-end justify-end gap-y-5 w-[100%] h-[100%] text-white">
                  <div className="line relative box-border w-[100%]"></div>
                  <h1 className="text-lg w-[100%] text-start relative box-border cursor-pointer">
                    Created by Paulius Česna JS22/1v
                  </h1>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </li>
      </ul>
    </NavigationMenu>
  );
}

export default Navbar;
