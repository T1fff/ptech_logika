import { Input } from '@heroui/react';

const myInput = ({
  customStyles,
  customLabel,
  customPlaceholder,
  customStart,
  customFinish,
  customType = 'text',
  isRequired = false,
}: Props) => {
  return (
    <Input
      isRequired={isRequired}
      classNames={{
        label: 'text-black/50 dark:text-white/90',
        input: [
          'bg-transparent',
          'text-black/90 dark:text-white/90',
          'placeholder:text-default-700/50 dark:placeholder:text-white/60',
        ],
        innerWrapper: 'bg-transparent',
        inputWrapper: [
          'bg-transparent',
          'dark:bg-default/60',
          'data-[hover=true]:bg-default-200/50',
          'dark:hover:bg-default-100/25',
          'group-data-[focus=true]:bg-default-200/25',
          'dark:group-data-[focus=true]:bg-default-100/20',
          'cursor-text!',
          'my-3',
          'border',
          'border-gray-300',
          'rounded-sm',
        ],
        ...customStyles,
      }}
      label={customLabel}
      labelPlacement="outside"
      placeholder={customPlaceholder}
      startContent={customStart}
      endContent={customFinish}
      type={customType}
    />
  );
};

export default myInput;

type Props = {
  customStyles?: object;
  customLabel: string;
  customPlaceholder: string;
  customStart?: React.ReactNode;
  customFinish?: React.ReactNode;
  customType?: string;
  isRequired?: boolean;
};
