import React from 'react';
import { logo } from "../assets";

const Footer = () => {
    return (
        <footer class="bg-white dark:bg-gray-900">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <a href="/" class="flex items-center">
                            <img src={logo} class="h-8 me-3" alt="Laser world Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Laser World</span>
                        </a>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="/" class="hover:underline">Our Services</a>
                                </li>
                                {/* <li>
                                    <a href="" class="hover:underline"></a>
                                </li> */}
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="/" class="hover:underline ">Instagram</a>
                                </li>
                                <li>
                                    <a href="/" class="hover:underline">Facebook</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">Laser World © 2024. All Rights Reserved.
                    </span>
                    <div class="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                            </svg>
                            <span class="sr-only">Facebook page</span>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4">
                                <path d="M12 2.2c-3.25 0-3.638.012-4.914.071-1.13.058-2.039.236-2.78.478-.738.243-1.37.575-2.014 1.219-.645.645-.977 1.276-1.22 2.014-.242.741-.42 1.65-.478 2.78-.059 1.276-.071 1.664-.071 4.914s.012 3.638.071 4.914c.058 1.13.236 2.039.478 2.78.243.738.575 1.37 1.219 2.014.645.645 1.276.977 2.014 1.219.741.242 1.65.42 2.78.478 1.276.059 1.664.071 4.914.071s3.638-.012 4.914-.071c1.13-.058 2.039-.236 2.78-.478.738-.243 1.37-.575 2.014-1.219.645-.645.977-1.276 1.22-2.014.242-.741.42-1.65.478-2.78.059-1.276.071-1.664.071-4.914s-.012-3.638-.071-4.914c-.058-1.13-.236-2.039-.478-2.78-.243-.738-.575-1.37-1.219-2.014-.645-.645-1.276-.977-2.014-1.219-.741-.242-1.65-.42-2.78-.478-1.276-.059-1.664-.071-4.914-.071zm0 1.8c3.125 0 3.528.012 4.79.067 1.049.055 1.914.231 2.455.52.533.277.944.644 1.376 1.176.432.432.899.843 1.176 1.376.289.541.465 1.406.52 2.455.055 1.261.067 1.664.067 4.79s-.012 3.528-.067 4.79c-.055 1.049-.231 1.914-.52 2.455-.277.533-.644.944-1.176 1.376-.432.432-.843.899-1.376 1.176-.541.289-1.406.465-2.455.52-1.261.055-1.664.067-4.79.067s-3.528-.012-4.79-.067c-1.049-.055-1.914-.231-2.455-.52-.533-.277-.944-.644-1.376-1.176-.432-.432-.899-.843-1.176-1.376-.289-.541-.465-1.406-.52-2.455-.055-1.261-.067-1.664-.067-4.79s.012-3.528.067-4.79c.055-1.049.231-1.914.52-2.455.277-.533.644-.944 1.176-1.376.432-.432.843-.899 1.376-1.176.541-.289 1.406-.465 2.455-.52 1.261-.055 1.664-.067 4.79-.067zm0 5.4a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2zm0 10.8a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4zm5.8-10.8a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8z" />
                            </svg>  
                            <span class="sr-only">Instagram</span>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                            </svg>
                            <span class="sr-only">Twitter page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
