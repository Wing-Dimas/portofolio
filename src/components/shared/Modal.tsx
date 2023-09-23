import React from "react";

interface ModalPropsType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ open = false, setOpen }: ModalPropsType) {
  return (
    <>
      <div className={`modal-wrapper ${open && "active"}`}>
        <div className="modal-box">
          {/*content*/}
          <div className="modal-content">
            {/*body*/}
            <div className="modal-body">
              <div className="flex justify-center">
                {open ? (
                  <video
                    width={250}
                    height={250}
                    autoPlay={true}
                    loop={true}
                    src="/Animation-smile.mp4"
                  ></video>
                ) : (
                  <div className="w-[250px] h-[250px]"></div>
                )}
              </div>
              <p className="my-4 -mt-12 text-slate-500 text-lg leading-relaxed">
                Thank you for sending your message
              </p>
              <div className="flex justify-center">
                <button
                  className="bg-primary text-light active:bg-secondary font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setOpen(false)}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div
          className="opacity-25 fixed inset-0 z-40 bg-black"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}
