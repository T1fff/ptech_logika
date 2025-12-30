import { Input } from '@heroui/react';
import { Controller, type Control } from 'react-hook-form';

const CustomInput = ({
  customStyles,
  customLabel,
  customPlaceholder,
  customStart,
  customFinish,
  customType = 'text',
  isRequired = false,
  control,
  name: identifier,
  rules,
}: Props) => {
  return (
    <Controller
      control={control}
      name={identifier || ''}
      rules={
        rules ?? (isRequired ? { required: `${customLabel ?? name} es obligatorio` } : undefined)
      }
      render={({
        field: { name, value, onChange, onBlur, ref },
        fieldState: { invalid, error },
      }) => (
        <Input
          ref={ref}
          errorMessage={error?.message}
          validationBehavior="aria"
          isInvalid={invalid}
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
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
            helperWrapper:
              'group-data-[has-helper=true]:text-start group-data-[has-helper=true]:gap-0 group-data-[has-helper=true]:p-0',
            ...customStyles,
          }}
          label={customLabel}
          labelPlacement="outside"
          placeholder={customPlaceholder}
          startContent={customStart}
          endContent={customFinish}
          type={customType}
        />
      )}
    />
  );
};

export default CustomInput;

type Props = {
  customStyles?: object;
  customLabel: string;
  customPlaceholder: string;
  customStart?: React.ReactNode;
  customFinish?: React.ReactNode;
  customType?: string;
  isRequired?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name?: string;
  rules?: object;
};
