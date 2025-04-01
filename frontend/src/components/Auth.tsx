import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { SignupInput, SigninInput } from "ads-blog-common";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput | SigninInput>(
    type === "signup"
      ? { name: "", email: "", password: "" }
      : { email: "", password: "" }
  );
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      const res = await axios.post(
        `https://backend.adsdevvs.workers.dev/api/v1/user/${
          type === "signup" ? "signup" : "sigin"
        }`,
        postInputs
      );
      //alert(res.data.token);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="text-xl font-extrabold">
            {type === "signup" ? "Create an Account" : "Sign In"}
          </div>
          <div className="text-slate-400">
            {type === "signin"
              ? "Don't have an account?"
              : "Already have an account?"}
            <Link className="pl-2 underline" to={type === "signin" ? "/" : "/signin"}>
              {type === "signin" ? "Sign Up" : "Sign In"}
            </Link>
          </div>
          <div className="flex flex-col gap-y-4">
            <LabelInput
              label="Email"
              placeholder="Enter your email"
              onChange={(e) =>
                setPostInputs({ ...postInputs, email: e.target.value })
              }
            />
            {type === "signup" && (
              <LabelInput
                label="Name"
                placeholder="Enter your name"
                onChange={(e) =>
                  setPostInputs({ ...postInputs, name: e.target.value })
                }
              />
            )}
            <LabelInput
              label="Password"
              placeholder="Enter your password"
              type="password"
              onChange={(e) =>
                setPostInputs({ ...postInputs, password: e.target.value })
              }
            />
            <button
              className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
              onClick={handleSubmit}
            >
              {type === "signup" ? "Sign-Up" : "Sign-in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelInputField {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelInput({ label, placeholder, onChange, type = "text" }: LabelInputField) {
  return (
    <div>
      <div>
        <label className="block mb-2 text-sm font-medium text-black">
          {label}
        </label>
        <input
          type={type}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
}
