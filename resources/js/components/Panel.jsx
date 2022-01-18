/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon, BellIcon } from "@heroicons/react/solid";
import { Formik } from "formik";
import classNames from "classnames";
import { Inertia } from "@inertiajs/inertia";

import { newsletterValidationSchema } from "./Forms/schemas";

import ContactForm from "./Forms/ContactForm";

export default function Panel({ isOpen, close }) {
  return (
    <Transition.Root show={isOpen} as={Fragment} onClose={close}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden z-50">
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    {/* <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={close}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button> */}
                  </div>
                </Transition.Child>
                <div className="h-full flex flex-col py-6 bg-primary-cobalt-blue-50 dark:bg-primary-cobalt-blue-700 shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white"></Dialog.Title>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    <Formik
                      initialValues={{
                        email: "",
                        firstname: "",
                        phone: "",
                        surname: "",
                        sector: "",
                        position: "",
                      }}
                      onSubmit={(values, { setSubmitting }) => {
                        Inertia.post("/newsletters", values, {
                          onBefore: () => {
                            setSubmitting(true);
                          },
                          onSuccess: () => {
                            close();
                            setSubmitting(false);
                          },
                          onError: (err) => {
                            console.error(err);
                            setSubmitting(false);
                          },
                        });
                      }}
                      validationSchema={newsletterValidationSchema}
                    >
                      {(formik) => (
                        <form
                          onSubmit={formik.handleSubmit}
                          className="absolute inset-0 px-4 sm:px-6"
                        >
                          <div
                            className="h-24 grid grid-cols-1 justify-center gap-2 w-full"
                            aria-hidden="true"
                          >
                            <ContactForm />

                            <div className="flex gap-1">
                              <button
                                type="button"
                                onClick={close}
                                disabled={formik.isSubmitting}
                                className="flex items-center justify-between mt-3 w-4/12 rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white
                                text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2
                                focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:bg-gray-400"
                              >
                                <XCircleIcon className="w-6 h-6 mr-2 -ml-1" />
                                <span>Cancel</span>
                              </button>
                              <button
                                type="submit"
                                disabled={formik.isSubmitting}
                                className={classNames(
                                  "ld-ext-right flex items-center w-8/12 justify-between rounded-full border border-transparent shadow-sm px-4 py-2 bg-primary-mn-blue text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm",
                                  {
                                    "running bg-gray-400":
                                      formik.isSubmitting,
                                    "hover:bg-primary-mn-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-mn-blue-light":
                                      !formik.isSubmitting,
                                  }
                                )}
                              >
                                <div className="ld ld-ring ld-spin"></div>
                                <BellIcon className="w-6 h-6" />
                                <span
                                  className={classNames(
                                    "text-sm transition-all",
                                    {
                                      hidden: formik.isSubmitting,
                                    }
                                  )}
                                >
                                  Notify me when there's some action
                                </span>
                              </button>
                            </div>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
