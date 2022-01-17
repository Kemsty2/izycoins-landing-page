import { useContext } from "react";
import Modal from "react-modal";
import { Formik } from "formik";
import { newsletterValidationSchema } from "./Forms/schemas";
import classNames from "classnames";
import { Inertia } from "@inertiajs/inertia";

import { ThemeContext } from "./ThemeContext";
import { BellIcon, XCircleIcon } from "@heroicons/react/solid";
import ContactForm from "./Forms/ContactForm";

const NewsLetter = () => {
  const { setModalIsOpen, modalIsOpen } = useContext(ThemeContext);
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
      overlayClassName="bg-transparent"
      className="bg-transparent"
    >
      <div
        className="fixed inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-transparent transition-opacity"
            aria-hidden="true"
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
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
                  closeModal();
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
                className="inline-block align-bottom z-50 bg-white dark:bg-dark-mn-blue-bold rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
              >
                <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                        id="modal-title"
                      >
                        Contact Us
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 ml-4 sm:px-6 grid grid-cols-2 gap-2">
                  <ContactForm />
                </div>
                <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className={classNames(
                      "ld-ext-right flex items-center justify-between rounded-full border border-transparent shadow-sm px-4 py-2 bg-primary-mn-blue text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm",
                      {
                        "running bg-gray-400 ": formik.isSubmitting,
                        "hover:bg-primary-mn-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-mn-blue-light":
                          !formik.isSubmitting,
                      }
                    )}
                    disabled={formik.isSubmitting}
                  >
                    <div className="ld ld-ring ld-spin"></div>
                    <BellIcon className="w-6 h-6 mr-2 -ml-1" />
                    <span
                      className={classNames("text-sm transition-all", {
                        hidden: formik.isSubmitting,
                      })}
                    >
                      Notify me when there's some action
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    disabled={formik.isSubmitting}
                    className="flex items-center justify-between mt-3 w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white
                    text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:bg-gray-400"
                  >
                    <XCircleIcon className="w-6 h-6 mr-2 -ml-1" />
                    <span>Cancel</span>
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default NewsLetter;
