import { RefObject } from 'react';

export interface FormState {
  type: string;
}

export interface FilterFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: FormState) => void;
  btnRef: RefObject<HTMLButtonElement>;
}
