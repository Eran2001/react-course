# React + Vite

## Work with forms

#### First install these

```bash
npm install react-hook-form
npm install yup
npm i @hookform/resolvers
```

#### Usage

```bash
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const FormSchema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 flex flex-col justify-center items-center min-h-[50vh]"
    >
      <div className="flex flex-col justify-center gap-1">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          {...register("email")}
          className={`py-2 border rounded text-sm ${
            errors.name ? "border-red-500" : "border-slate-500"
          }`}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>

      <div className="flex flex-col justify-center gap-1">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register("password")}
          className={`py-2 border rounded text-sm ${
            errors.password ? "border-red-500" : "border-slate-500"
          }`}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>

      <div className="flex justify-start items-center">
        <button type="submit" className="cursor-pointer border">
          Submit
        </button>
      </div>
    </form>
  );
};

export default App;
```
