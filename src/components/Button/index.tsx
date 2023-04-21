import { FC, ReactNode, useEffect, useState } from 'react';
import { KeyboardEvents } from '~/utils/enums';
import { showAlert } from '~/utils/helpers';
import { Button, LoadingIndicator } from './styles';

type ButtonProps = {
  id: string;
  children: ReactNode | string;
  transparent?: boolean;
  disabled?: boolean;
  column?: boolean;
  onKeyEnter?: boolean;
  onLoading?: boolean;
  onPress(): Promise<void> | void;
};

const ButtonComponent: FC<ButtonProps> = ({
  id,
  children,
  transparent,
  disabled,
  column,
  onKeyEnter,
  onLoading = false,
  onPress,
  ...rest
}) => {
  const [loading, setLoading] = useState(false);

  const handleOnPress = async (): Promise<void> => {
    try {
      setLoading(true);
      await onPress();
    } catch ({ message, status }) {
      showAlert({ message });
    } finally {
      setLoading(false);
    }
  };

  const detectKeyDown = (event: KeyboardEvent) => {
    if (onKeyEnter && !disabled && event.key === KeyboardEvents.ENTER) {
      handleOnPress();
    }
  };

  useEffect(() => {
    document.addEventListener(KeyboardEvents.TYPE, detectKeyDown, true);
    return () => {
      document.removeEventListener(KeyboardEvents.TYPE, detectKeyDown, true);
    };
  }, [!disabled]);

  return (
    <Button
      {...rest}
      id={`test_${id}`}
      loading={loading || onLoading}
      transparent={transparent}
      disabled={disabled}
      column={column}
      onClick={handleOnPress}
    >
      {loading || onLoading ? <LoadingIndicator /> : children}
    </Button>
  );
};

export default ButtonComponent;
