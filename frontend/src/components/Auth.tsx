import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { SignupInput } from "ads-blog-common";

export const Auth = ({type}:{type:"signup" | "signin"}) => {
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="text-xl font-extrabold">
                        Create an Account
                    </div>
                    <div className="text-slate-400">
                       {type==="signin"?"Don't have an account?":"Already have an account?"}
                        <Link className="pl-2 underline" to={type==="signin"?"/":"/signin"}>
                            Login
                        </Link>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <LabelInput
                            label="Email"
                            placeholder="Enter your email"
                           
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    email: e.target.value
                                });
                            }}
                        />
                        {type==="signup" &&<LabelInput
                            label="Name"
                            placeholder="Enter your name"
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    name: e.target.value
                                });
                            }}
                        />}
                        <LabelInput
                            label="Password"
                            placeholder="Enter your password"
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    password: e.target.value
                                });
                            }}
                        />
                        <button className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">
                            {type==="signup"?"Sign-Up":"Sign-in"}
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
    type:string
}

function LabelInput({ label, placeholder, onChange,type }: LabelInputField) {
    return (
        <div>
            <div>
                <label className="block mb-2 text-sm font-medium text-black">
                    {label}
                </label>
                <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder={placeholder}
                    onChange={onChange}
                    required
                />
            </div>
        </div>
    );
}
