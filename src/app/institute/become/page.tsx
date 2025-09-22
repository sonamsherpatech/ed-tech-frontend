"use client";
import { useAppDispatch } from "@/lib/store/hooks";
import { createInstitute } from "@/lib/store/institute/institute-slice";
import { IInstituteData } from "@/lib/store/institute/institute-slice-types";
import { ChangeEvent, FormEvent, useState } from "react";

function becomeInstitute() {
  const dispatch = useAppDispatch();
  const [instituteData, setInstituteData] = useState<IInstituteData>({
    instituteName: "",
    instituteAddress: "",
    instituteEmail: "",
    institutePhoneNumber: "",
    institutePanNo: "",
    instituteVatNo: "",
  });

  function handleInstituteFormDataChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInstituteData({
      ...instituteData,
      [name]: value,
    });
  }

  function handleInstituteFormDataSubmission(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(createInstitute(instituteData));
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-emerald-600 flex items-center justify-center">
            <span className="mr-1 text-3xl font-bold">Create</span>
            Institute
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Do you wanna be Institute? Create now
          </p>
        </div>
        {/* Divider */}
        <div className="my-6 border-t border-gray-300 relative">
          <span className="absolute top-[-10px] bg-white left-1/2 transform -translate-x-1/2 px-3 text-gray-500">
            Create Institute
          </span>
        </div>
        {/* Form */}
        <form
          className="space-y-4"
          onSubmit={handleInstituteFormDataSubmission}
        >
          {/* Full Name */}
          <div>
            <input
              type="text"
              name="instituteName"
              onChange={handleInstituteFormDataChange}
              placeholder="Institute Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100"
            />
          </div>
          {/* Mobile Number */}
          <div>
            <input
              type="text"
              name="institutePhoneNumber"
              onChange={handleInstituteFormDataChange}
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100"
            />
          </div>
          {/* Email */}
          <div>
            <input
              type="email"
              name="instituteEmail"
              onChange={handleInstituteFormDataChange}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100"
            />
          </div>
          {/* Password */}
          <div className="relative">
            <input
              type="text"
              name="instituteAddress"
              onChange={handleInstituteFormDataChange}
              placeholder="Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100"
            />
          </div>
          {/* Confirm Password */}
          <div className="relative">
            <input
              type="text"
              name="institutePanNo"
              onChange={handleInstituteFormDataChange}
              placeholder="Pan No"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="instituteVatNo"
              onChange={handleInstituteFormDataChange}
              placeholder="Vat No"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-emerald-400 text-white py-2 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition"
          >
            Create Institute
          </button>
        </form>
      </div>
    </div>
  );
}

export default becomeInstitute;
