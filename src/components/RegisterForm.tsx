import { useForm } from "react-hook-form";
import { RegisterUserInput, registerUserSchema } from "../schema/user-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "../util/trpc";
import { useEffect, useState } from "react";

const RegisterForm = () => {
  const [emailTaken, setEmailTaken] = useState(false);
  const { mutate, isLoading } = trpc.useMutation("user.register", {
    onSuccess(data) {
      console.log("register success", data);
    },
    onError(errors) {
      console.log("register fail");
      console.log(errors.message);
      if (errors.message === "User already exists") {
        setEmailTaken(true);
      }
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterUserInput>({
    resolver: zodResolver(registerUserSchema),
  });

  const onSubmit = (data: RegisterUserInput) => {
    setEmailTaken(false);
    console.log(data);
    mutate(data);
  };

  const email = watch("email");
  useEffect(() => {
    setEmailTaken(false);
  }, [email]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 border px-10 py-10 rounded-lg"
    >
      <label>
        <span>Name</span>
        <input
          {...register("name")}
          type="text"
          placeholder="Enter your name"
        />
        {errors.name?.message && (
          <p className="text-red-500">{errors.name.message}</p>
        )}
      </label>
      <label>
        <span>Email</span>
        <input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
        />
        {errors.email?.message && (
          <p className="text-red-500">{errors.email.message}</p>
        )}
      </label>
      <input className="mt-2" type="submit" value="Register" />
      {emailTaken && (
        <p className="text-red-500 text-center">Email already taken</p>
      )}
    </form>
  );
};

export default RegisterForm;
