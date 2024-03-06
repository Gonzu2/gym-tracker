import * as React from "react";

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

function Dashboard() {
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
    <div className="flex justify-center align-center w-[100dvw] h-[80dvh] mt-[50px]">
      <div className="text-white w-[80%] max-w-[950px] max-[750px]:w-[95%] max-h-[100%] rounded-lg border-[#2c2a2a] border-2 z-10 overflow-x-hidden overflow-y-hidden bg-[#191919] box-border relative">
        <ul className="flex flex-row justify-between items-center w-[100%]">
          <li className="text-lg font-bold cursor-pointer transtion ease hover:opacity-80 duration-300 p-[15px]">
            Tracker
          </li>
          <li className="p-[15px]">
            <Select onValueChange={(event: string) => handleDayChange(event)}>
              <SelectTrigger className="w-[180px] max-[430px]:w-[100px]">
                <SelectValue placeholder={templateExcersises[chosenDay].day} />
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
        <ul className="w-[100%] h-[calc(100%-66px)] bg-[#191919] pb-[15px] px-[15px] flex flex-col justify-start items-start gap-[15px] overflow-x-hidden overflow-y-auto box-border relative">
          <div className="flex flex-row justify-between items-center w-[100%] max-[470px]:flex-col max-[470px]:justify-start max-[470px]:items-start sticky top-0 bg-[#191919] pt-[10px] pb-[10px] z-10 border-b-2 border-[#2c2a2a]">
            <h1 className="cursor-pointer">
              {templateExcersises[chosenDay].day} workout
            </h1>
            <h1>Excersises completed - {completedCount}</h1>
          </div>
          {templateExcersises[chosenDay].excersises.map((workout, index) => (
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
                      {completedExercises[index] ? "Finished" : "Not Finished"}
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
                          Input the information you need in this excersise
                        </DrawerDescription>
                      </DrawerHeader>
                      <DrawerDescription>
                        <ul className="flex flex-col justify-start items-start gap-[5px] width-[100%] p-4">
                          {[...Array(workout.sets)].map((_, index) => (
                            <li className="w-[100%]" key={index}>
                              <p>Set number {index + 1}</p>
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
                          <label htmlFor="completed" className="text-white">
                            Excersise completed
                          </label>
                        </div>
                      </DrawerDescription>
                      <DrawerFooter>
                        <DrawerClose asChild>
                          <Button>Submit</Button>
                        </DrawerClose>
                        <DrawerClose asChild>
                          <Button variant="outline" className="text-white">
                            Cancel
                          </Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
