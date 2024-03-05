import * as React from "react";
import Cookies from "js-cookie";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

import { Checkbox } from "@/components/ui/checkbox";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

//Importing needed elements.
import "./css/home.css";

//Importing images
import benchpress1 from "./assets/benchpress1.png";
import { Button } from "./components/ui/button";
import { useNavigate } from "react-router-dom";

function Home() {
  let templateExcersises = {
    0: {
      dayIndex: 0,
      day: "Monday",
      excersises: [
        {
          excersiseNumber: 1,
          excersiseName: "Bench Press",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
        {
          excersiseNumber: 2,
          excersiseName: "Deadlift",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
        {
          excersiseNumber: 3,
          excersiseName: "Squats",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
      ],
    },
    1: {
      dayIndex: 1,
      day: "Tuesday",
      excersises: [
        {
          excersiseNumber: 1,
          excersiseName: "Bench Press",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
        {
          excersiseNumber: 2,
          excersiseName: "Deadlift",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
        {
          excersiseNumber: 3,
          excersiseName: "Squats",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
      ],
    },
    2: {
      dayIndex: 2,
      day: "Wednesday",
      excersises: [
        {
          excersiseNumber: 1,
          excersiseName: "Bench Press",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
        {
          excersiseNumber: 2,
          excersiseName: "Deadlift",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
        {
          excersiseNumber: 3,
          excersiseName: "Squats",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
      ],
    },
    3: {
      dayIndex: 3,
      day: "Thursday",
      excersises: [
        {
          excersiseNumber: 1,
          excersiseName: "Bench Press",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
        {
          excersiseNumber: 2,
          excersiseName: "Deadlift",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
        {
          excersiseNumber: 3,
          excersiseName: "Squats",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
      ],
    },
    4: {
      dayIndex: 4,
      day: "Friday",
      excersises: [
        {
          excersiseNumber: 1,
          excersiseName: "Bench Press",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
        {
          excersiseNumber: 2,
          excersiseName: "Deadlift",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
        {
          excersiseNumber: 3,
          excersiseName: "Squats",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
      ],
    },
    5: {
      dayIndex: 5,
      day: "Saturtday",
      excersises: [
        {
          excersiseNumber: 1,
          excersiseName: "Bench Press",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
        {
          excersiseNumber: 2,
          excersiseName: "Deadlift",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
        {
          excersiseNumber: 3,
          excersiseName: "Squats",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
      ],
    },
    6: {
      dayIndex: 6,
      day: "Sunday",
      excersises: [
        {
          excersiseNumber: 1,
          excersiseName: "Bench Press",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
        {
          excersiseNumber: 2,
          excersiseName: "Deadlift",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
        {
          excersiseNumber: 3,
          excersiseName: "Squats",
          reps: 12,
          sets: 3,
          images: benchpress1,
        },
      ],
    },
  };

  type DayIndex = keyof typeof templateExcersises;

  const [chosenCategory, setChosenCategory] = React.useState("workout-tracker");

  const [chosenDay, setChosenDay] = React.useState<DayIndex>(
    ((new Date().getDay() + 6) % 7) as DayIndex
  );

  const [completedExercises, setCompletedExercises] = React.useState(
    Array(templateExcersises[chosenDay].excersises.length).fill(false)
  );

  const [completedCount, setCompletedCount] = React.useState(0);

  // Function to update the completion status for a specific exercise index
  const handleExerciseCompletion = (index: number) => {
    const updatedCompletion = [...completedExercises];
    updatedCompletion[index] = !updatedCompletion[index];
    setCompletedExercises(updatedCompletion);

    const completedCount = updatedCompletion.filter(
      (completed) => completed
    ).length;
    setCompletedCount(completedCount);
  };

  function handleDayChange(event: string) {
    const numericValue = parseInt(event, 10);
    setChosenDay(numericValue as DayIndex);
    setCompletedCount(0);
    setCompletedExercises(
      Array(templateExcersises[chosenDay].excersises.length).fill(false)
    );
  }

  return (
    <div className="flex flex-col gap-[100px] justify-start items-center w-[100dvw] h-auto box-border relative p-[25px]">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width="1200px"
        id="blobSvg"
        style={{
          opacity: "1",
          position: "absolute",
          left: "-300px",
          top: "-350px",
        }}
        filter="blur(0px)"
        transform="rotate(0)"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "rgb(25, 25, 25)" }}></stop>
            <stop
              offset="100%"
              style={{ stopColor: "rgb(50, 59, 149)" }}
            ></stop>
          </linearGradient>
        </defs>
        <path id="blob" fill="url(#gradient)" style={{ opacity: "1" }}>
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z;M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,196.76266Q143.52532,143.52532,196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,176.75422Q423.07519,250,409.06419,322.5266Z;M405.0078,325.44624Q400.89248,400.89248,325.44624,434.97549Q250,469.0585,165.42535,444.1039Q80.8507,419.1493,84.75627,334.57465Q88.66184,250,94.44262,175.1117Q100.2234,100.2234,175.1117,82.29749Q250,64.37159,306.73538,100.45042Q363.47075,136.52925,386.29693,193.26462Q409.12312,250,405.0078,325.44624Z;M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M449.66467,329.57458Q409.14917,409.14917,329.57458,407.97733Q250,406.80549,191.3735,387.02924Q132.74701,367.25299,77.06026,308.6265Q21.3735,250,49.05191,163.36516Q76.73032,76.73032,163.36516,85.537Q250,94.34367,322.00775,100.16408Q394.01551,105.98449,442.09784,177.99225Q490.18018,250,449.66467,329.57458Z;M408.24461,332.63257Q415.26513,415.26513,332.63257,434.71568Q250,454.16622,179.33614,422.74697Q108.67228,391.32772,65.87585,320.66386Q23.07942,250,63.27221,176.73251Q103.46501,103.46501,176.73251,63.02288Q250,22.58075,311.86507,74.4253Q373.73015,126.26985,387.47712,188.13493Q401.22409,250,408.24461,332.63257Z;M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z"
          ></animate>
        </path>
      </svg>

      <ul className="flex flex-col items-start justify-start w-[80%] max-[750px]:w-[100%]">
        <li>
          <ul className="gap-[50px] flex flex-row items-start justify-start w-[100%] mt-[15px] box-border relative max-[1280px]:flex-col">
            <li className="w-[50%] max-[1280px]:w-[100%]">
              <ul className="gap-[25px] flex flex-col items-start justify-start w-[100%] mt-[15px] box-border relative">
                <li className="text-white w-[100%] text-[42px] self-start box-border relative">
                  Supercharge Fitness Goals: Plan & Track Effortlessly!
                </li>
                <li className="text-white w-[100%] text-[18px] self-start box-border relative">
                  Empower your fitness journey! Plan custom workouts and
                  effortlessly track progress. Our website simplifies
                  goal-driven fitness by allowing you to create your own custom
                  workout plans, and keep track of the progress you've made on
                  the workouts!
                </li>
              </ul>
            </li>
            <li className="w-[50%] max-[1280px]:w-[100%]">
              <Accordion type="multiple" className="text-white">
                <AccordionItem value="item-1">
                  <AccordionTrigger className=" text-start">
                    Does it have inbuilt excersises?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes it does! It has over 50+ excersises that you can choose!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className=" text-start">
                    Can I create my own excersises?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can easily add your own excersise that would only be
                    seen by you on your dashboard page.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className=" text-start">
                    Can I Track Performance for a Specific Lift?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely! Navigate to the dashboard and select the
                    specific lift you wish to examine performance metrics for.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className=" text-start">
                    Why should I use this?
                  </AccordionTrigger>
                  <AccordionContent>
                    Completely free and user-friendly! This page caters to gym
                    enthusiasts seeking enhanced performance. Effortlessly track
                    your progress and elevate your workout experience!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          </ul>
        </li>
      </ul>

      <div className="w-[80%] max-w-[950px] max-[750px]:w-[100%] h-[800px] max-h-[800px] rounded-lg border-[#2c2a2a] border-2 z-10 overflow-x-hidden overflow-y-auto bg-[#191919] box-border relative">
        <nav className="flex flex-row justify-between items-center w-[100%] border-b-2 border-b-[#2c2a2a]">
          <div className="flex flex-row gap-[5px] max-[790px]:hidden">
            <h1 className="text-xl border-r-2 border-r-[#2c2a2a] pr-[10px] cursor-pointer max-[790px]:border-none ">
              Dashboard
            </h1>
            <ul className="flex flex-row justify-start items-center gap-[10px] ">
              <li
                className="pl-[5px] text-md cursor-pointer"
                onClick={() => setChosenCategory("workout-tracker")}
              >
                Workout tracker
              </li>
              <li
                className="text-md cursor-pointer"
                onClick={() => setChosenCategory("workout-plan")}
              >
                Workout planner
              </li>
              <li
                className="text-md cursor-pointer"
                onClick={() => setChosenCategory("excersises")}
              >
                Excersises
              </li>
            </ul>
          </div>

          <div className="category-dashboard max-[790px]:flex hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>Category</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => setChosenCategory("workout-tracker")}
                >
                  Workout Tracker
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setChosenCategory("workout-plan")}
                >
                  Workout planner
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setChosenCategory("excersises")}
                >
                  Excersises
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>Gonzu</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Gonzu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div
          style={{ height: "calc(100% - 75px)" }}
          className="p-[15px] text-white w-[100%] flex flex-col justify-start items-start gap-[15px]"
        >
          {chosenCategory === "workout-tracker" ? (
            <>
              <ul className="flex flex-row justify-between items-center w-[100%]">
                <li className="text-lg font-bold cursor-pointer transtion ease hover:opacity-80 duration-300">
                  Workout Tracker
                </li>
                <li>
                  <Select
                    onValueChange={(event: string) => handleDayChange(event)}
                  >
                    <SelectTrigger className="w-[180px] max-[430px]:w-[100px]">
                      <SelectValue
                        placeholder={templateExcersises[chosenDay].day}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="0">Monday</SelectItem>
                        <SelectItem value="1">Tuesday</SelectItem>
                        <SelectItem value="2">Wednesday</SelectItem>
                        <SelectItem value="3">Thursday</SelectItem>
                        <SelectItem value="4">Friday</SelectItem>
                        <SelectItem value="5">Saturday</SelectItem>
                        <SelectItem value="6">Sunday</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </li>
              </ul>
              <ul className="w-[100%] h-[100%] bg-[#191919] pb-[15px] px-[15px] flex flex-col justify-start items-start gap-[15px] overflow-x-hidden overflow-y-auto box-border relative">
                <div className="flex flex-row justify-between items-center w-[100%] max-[470px]:flex-col max-[470px]:justify-start max-[470px]:items-start sticky top-0 bg-[#191919] pt-[10px] pb-[10px] z-10 border-b-2 border-[#2c2a2a]">
                  <h1 className="cursor-pointer">
                    {templateExcersises[chosenDay].day} workout
                  </h1>
                  <h1>Excersises completed {completedCount}</h1>
                </div>
                {templateExcersises[chosenDay].excersises.map(
                  (workout: any, index: number) => (
                    <li
                      key={index}
                      className={`w-[100%] h-auto max-h-[525px] border-2 border-[#2c2a2a] rounded-md flex flex-col justify-start items-start gap-[10px] ${
                        completedExercises[index]
                          ? "border-[#323b95]"
                          : "border-[#2c2a2a]"
                      }`}
                    >
                      <div className="w-[100%] h-[100%] flex flex-col justify-start items-start overflow-hidden">
                        <div className="w-[100%] h-[80%] flex justify-center items-center overflow-hidden box-border relative">
                          <img
                            src={workout.images}
                            alt="background"
                            className="rounded-md h-[auto] w-[100%] opacity-[0.15]"
                          />
                          <p className="absolute w-[100%] text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[36px] font-bold excersise-name">
                            {workout.excersiseName}
                          </p>
                        </div>
                        <div className="w-[100%] h-[auto] min-h-[48px] flex justify-between items-center px-[10px]">
                          <ul className="flex flex-row justify-between items-center gap-[15px] w-[100%] max-[405px]:gap-[5px] max-[405px]:flex-col max-[405px]:justify-start max-[405px]:items-start max-[405px]:mb-[10px]">
                            <li>
                              <ul className="flex flex-row gap-[15px] max-[405px]:flex-col max-[405px]:gap-[5px] max-[405px]:justify-start max-[405px]:items-start">
                                <li>Sets - {workout.sets}</li>
                                <li>Reps - {workout.reps}</li>
                              </ul>
                            </li>
                            <li
                              style={{
                                color: completedExercises[index]
                                  ? "#35AF50"
                                  : "#AF3535",
                              }}
                            >
                              {completedExercises[index]
                                ? "Finished"
                                : "Not Finished"}
                            </li>
                          </ul>
                        </div>
                        <Drawer>
                          <DrawerTrigger
                            asChild
                            className="p-0 mx-[10px] mb-[10px] h-[10%] w-[calc(100%-20px)] text-center flex justify-center items-center no-underline box-border"
                          >
                            <Button variant="outline">View more</Button>
                          </DrawerTrigger>
                          <DrawerContent>
                            <div className="mx-auto w-full max-w-sm bg-[#191919]">
                              <DrawerHeader>
                                <DrawerTitle className="text-white">
                                  Excersise information
                                </DrawerTitle>
                                <DrawerDescription>
                                  Input the information you need in this
                                  excersise
                                </DrawerDescription>
                              </DrawerHeader>
                              <DrawerDescription>
                                <ul className="flex flex-col justify-start items-start gap-[5px] width-[100%] p-4">
                                  {[...Array(workout.sets)].map((_, index) => (
                                    <li className="w-[100%]" key={index}>
                                      <p className="text-white">
                                        Set number {index + 1}
                                      </p>
                                      <Input
                                        type="number"
                                        min={0}
                                        placeholder="Input reps amount"
                                      />
                                    </li>
                                  ))}
                                </ul>
                                <div className="flex flex-row gap-[5px] justify-start items-center p-4">
                                  <Checkbox
                                    onCheckedChange={() => {
                                      handleExerciseCompletion(index);
                                    }}
                                    checked={completedExercises[index]}
                                    id={`terms${index}`}
                                  />
                                  <label
                                    htmlFor={`terms${index}`}
                                    className="text-white"
                                  >
                                    Excersise completed
                                  </label>
                                </div>
                              </DrawerDescription>
                              <DrawerFooter>
                                <DrawerClose asChild>
                                  <Button>Submit</Button>
                                </DrawerClose>
                                <DrawerClose asChild>
                                  <Button
                                    variant="outline"
                                    className="text-white"
                                  >
                                    Cancel
                                  </Button>
                                </DrawerClose>
                              </DrawerFooter>
                            </div>
                          </DrawerContent>
                        </Drawer>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </>
          ) : (
            <></>
          )}
          {chosenCategory === "workout-plan" ? (
            <>
              <h1 className="text-2xl font-bold cursor-pointer transtion ease hover:opacity-80 duration-300">
                Workout Planner
              </h1>
            </>
          ) : (
            <></>
          )}
          {chosenCategory === "excersises" ? (
            <>
              <h1 className="text-2xl font-bold cursor-pointer transtion ease hover:opacity-80 duration-300">
                Excersises
              </h1>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
