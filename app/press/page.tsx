import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../_components/ui/card";

const Press = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-2 gap-8">
        <Card className="flex w-96 h-48 shadow-lg rounded-lg overflow-hidden">
          <CardContent className="flex-none">
            <img
              src="/press.png"
              alt="sipnplay pic"
              className="w-48 h-48"
            />
          </CardContent>
          <CardHeader className="flex-grow p-4 flex flex-col justify-center bg-blue-300">
            <CardContent className="flex-none">
              <img
                src="/NY1.png"
                alt="sipnplay pic"
                className="w-20 h-10 pt-2"
              />
            </CardContent>
            <CardDescription className="text-gray-700 text-xs">
            SIP, PLAY AND STAY AT THIS PARK SLOPE CAFE
            January 15, 2020</CardDescription>
          </CardHeader>
        </Card>

        <Card className="flex w-96 h-48 shadow-lg rounded-lg overflow-hidden">
          <CardContent className="flex-none">
            <img
              src="/press_2.png"
              alt="sipnplay pic"
              className="w-48 h-48"
            />
          </CardContent>
          <CardHeader className="flex-grow p-4 flex flex-col justify-center bg-blue-500">
            <CardContent className="flex-none">
              <img
                src="/brooklyn.png"
                alt="sipnplay pic"
                className="w-20 h-10"
              />
            </CardContent>
            <CardDescription className="text-gray-700 text-sm">Card Description</CardDescription>
          </CardHeader>
        </Card>

        <Card className="flex w-96 h-48 shadow-lg rounded-lg overflow-hidden">
          <CardContent className="flex-none">
            <img
              src="/press_3.png"
              alt="sipnplay pic"
              className="w-48 h-48"
            />
          </CardContent>
          <CardHeader className="flex-grow p-4 flex flex-col justify-center bg-blue-500">
            <CardTitle className="text-xl font-bold mb-1">Card Title</CardTitle>
            <CardDescription className="text-gray-700 text-sm">Card Description</CardDescription>
          </CardHeader>
        </Card>

        <Card className="flex w-96 h-48 shadow-lg rounded-lg overflow-hidden">
          <CardContent className="flex-none">
            <img
              src="/press_4.png"
              alt="sipnplay pic"
              className="w-48 h-48"
            />
          </CardContent>
          <CardHeader className="flex-grow p-4 flex flex-col justify-center bg-blue-500">
            <CardTitle className="text-xl font-bold mb-1">Card Title</CardTitle>
            <CardDescription className="text-gray-700 text-sm">Card Description</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Press;
