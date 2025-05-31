interface ToggleButtonProps {
  isActive: boolean;
  onChange: () => void;
}

const ToggleButton = ({ isActive, onChange }: ToggleButtonProps) => {
  return (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        isActive ? "bg-[#4F46E5]" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          isActive ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
};

export default ToggleButton;