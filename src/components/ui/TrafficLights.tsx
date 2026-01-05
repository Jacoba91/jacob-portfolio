interface TrafficLightsProps {
  className?: string;
  interactive?: boolean;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

export function TrafficLights({
  className = "",
  interactive = false,
  onClose,
  onMinimize,
  onMaximize,
}: TrafficLightsProps) {
  const baseClasses = "w-3 h-3 rounded-full transition-transform";
  const hoverClasses = interactive ? "hover:scale-110 cursor-pointer" : "";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        type="button"
        className={`${baseClasses} ${hoverClasses} bg-[#ff5f56]`}
        onClick={onClose}
        aria-label="Close"
        disabled={!interactive}
      />
      <button
        type="button"
        className={`${baseClasses} ${hoverClasses} bg-[#ffbd2e]`}
        onClick={onMinimize}
        aria-label="Minimize"
        disabled={!interactive}
      />
      <button
        type="button"
        className={`${baseClasses} ${hoverClasses} bg-[#27c93f]`}
        onClick={onMaximize}
        aria-label="Maximize"
        disabled={!interactive}
      />
    </div>
  );
}
