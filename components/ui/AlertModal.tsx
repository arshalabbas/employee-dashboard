interface Props {
  id: string;
  title?: string;
  body?: string;
  buttonTitle: string;
  successHandler: () => void;
}

const AlertModal = ({
  id,
  title,
  body,
  buttonTitle,
  successHandler,
}: Props) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{body}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-ghost">Cancel</button>
          </form>
          <button onClick={successHandler} className="btn btn-error">
            {buttonTitle}
          </button>
        </div>
      </div>
    </dialog>
  );
};

export const alertButtonOnClickHandler = (id: string) => {
  (document.getElementById(id) as HTMLDialogElement)?.showModal();
};

export default AlertModal;
