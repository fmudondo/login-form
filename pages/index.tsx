import type { NextPage } from 'next';
import Head from 'next/head';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Prosper Farai Mudondo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold text-black">
              {' '}
              <span className="text-green-500">Prosper</span> Mudondo
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500 mb-2">
                Sign in to Account
              </h2>
              <div className="border-2 w-10 border-black inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a
                  href=""
                  className="border-2 border-green-500 rounded-full p-3 mx-1"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href=""
                  className="border-2 border-green-500 rounded-full p-3 mx-1"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a
                  href=""
                  className="border-2 border-green-500 rounded-full p-3 mx-1"
                >
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              {/*social icons*/}
              <p className="my-3">or use your email account</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-900 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-200 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-200 w-64 p-2 flex items-center">
                  <MdLockOutline className="text-gray-900 mr-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-200 outline-none text-sm flex-1"
                  />
                </div>
                <div className="w-64 mb-5 flex justify-between">
                  <label className="flex items-center text-xs mt-2">
                    <input type="checkbox" name="remember" className="mr-1" />
                    Remember Me
                  </label>
                  <a className="text-xs mt-2">Forgot Password?</a>
                </div>
                <a
                  href="#"
                  className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-blue-500"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>{' '}
          {/*sign in section*/}
          <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello Guys!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Fill up personal information and start journey with us.
            </p>
            <a
              href="#"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
            >
              Sign Up
            </a>
          </div>
          {/*sign up section*/}
        </div>
      </main>
    </div>
  );
};

export default Home;
