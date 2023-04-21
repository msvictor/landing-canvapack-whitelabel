import { Toastify, styled } from '~/modules';
import 'react-toastify/dist/ReactToastify.css';

type AlertMessage = string | string[] | Element | Element[];
type TypeOptions = 'info' | 'success' | 'warning' | 'error' | 'default';
type TypePosition =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';

type ShowAlertProps = {
  message: AlertMessage;
  type?: TypeOptions;
  position?: TypePosition;
};

const Msg = ({ message }: any): JSX.Element => (
  <div id="toast_msg"> {message} </div>
);

export default function Alert({
  message,
  type = 'error',
  position = 'top-left',
  ...rest
}: ShowAlertProps): void {
  Toastify.toast(<Msg message={message} />, { type, position, ...rest });
}

export const ToastContainer = styled(Toastify.ToastContainer)`
  flex-direction: column;
  min-width: 400px;
  width: max-content;
  max-width: 35%;
`;
