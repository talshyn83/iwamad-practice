type TagProps = { 
  label: string | number; 
  onClick?: () => void;
};

export function Tag({ label, onClick }: TagProps) {
  return (
    <span className="tag" onClick={onClick}>
      {label}
    </span>
  );
}