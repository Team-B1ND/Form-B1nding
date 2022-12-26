export interface ModalProps {
  width: number;
  height: number;
  zIndex: number;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  customStyle: React.CSSProperties;
}
