"use client";
import { useState } from "react";

export type LoginFormProps = {
  signIn: (provider: string, data: any) => void;
};

export const LoginForm = ({ signIn }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  return (
    <div className='flex flex-col items-center justify-center py-2 h-screen'>
      <form
        className='card w-96 bg-neutral text-neutral-content'
        onSubmit={(e) => {
          e.preventDefault();
          signIn("email", { email });
        }}>
        <div className='card-body items-center text-center space-y-3'>
          <h2 className='card-title'>Zaloguj się</h2>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Your Email</span>
            </label>
            <input type='email' placeholder='info@site.com' className='input input-bordered w-full max-w-xs' value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='email' />
          </div>
          <div className='card-actions justify-end'>
            <button type='submit' className='btn btn-primary'>
              Zaloguj się
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
