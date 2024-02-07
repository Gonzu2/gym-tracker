// import * as React from "react";

import axios from "axios";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import * as z from "zod";
import { ChangeEvent, useState } from "react";

const formSchema = z.object({
  username: z
    .string()
    .min(4, {
      message: "Username must be at least 4 letters long!",
    })
    .max(50, {
      message: "Username must be under 50 letters!",
    }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 letters long!",
    })
    .max(120, {
      message: "Username must be under 120 letters!",
    }),
});

function Login() {
  const [formError, setFormError] = useState("hidden");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formData = new FormData();
      formData.append("username", values.username);
      formData.append("password", values.password);

      // Assuming your API endpoint is "/api/register"
      const response = await axios.post(
        "http://localhost:4000/user/login",
        formData
      );

      if (response.status === 202) {
        setFormError("Invalid password");
      }
    } catch (error) {
      setFormError("Error submitting the registration form");
    }
  }

  return (
    <>
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
        className="-z-10"
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
      <div
        style={{ height: "calc(100dvh - 150px)" }}
        className="grid place-items-center z-100"
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-[50%] text-white z-100 bg-[#191919] bg-opacity-60 p-[25px] rounded-[10px]"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="username-gym-tracker"
                      placeholder="Username"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="password-gym-tracker"
                      type="password"
                      placeholder="******"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your private password.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              {formError !== "hidden" ? (
                <p className="text-red-500">{formError}</p>
              ) : (
                <></>
              )}
            </div>
            <Button type="submit">Login</Button>
          </form>
        </Form>
      </div>
    </>
  );
}

export default Login;
