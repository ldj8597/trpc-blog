import { useForm } from "react-hook-form";
import { RegisterUserInput, registerUserSchema } from "../schema/user-schema";
const SigninForm = () => {
  return (
    <form className="flex flex-col gap-5 border px-10 py-10 rounded-lg">
      <label>
        <span>Email</span>
        <input type="email" placeholder="Enter your email" />
      </label>
      <input className="mt-2" type="submit" value="Register" />
    </form>
  );
};

export default SigninForm;
