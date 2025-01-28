import PropTypes from "prop-types";

export default function PriorityContainer({priority, setPriority, darkMode}) {
    function handleClicked(selectedPriority) {
        setPriority((prev) => (prev === selectedPriority ? null : selectedPriority)); // Toggle the selected priority
      }

  return (
    <div className="container flex flex-col gap-2 w-fit">
      <strong className={`self-center ${darkMode && "text-white"}`}>Priority</strong>
      <form action="" className="flex gap-3 items-center">
        <div className="wrap flex gap-2">
          <input
            type="checkbox"
            checked={priority === 1} // Only "Low" is selected when priority is "Low"
            onClick={() => handleClicked(1)}
          />
          <p className={`text-sm ${darkMode && "text-white"}`}>Low</p>
        </div>

        <div className="wrap flex gap-2">
          <input
            type="checkbox"
            checked={priority === 2} // Only "Medium" is selected when priority is "Medium"
            onClick={() => handleClicked(2)}
          />
          <p className={`text-sm ${darkMode && "text-white"}`}>Medium</p>
        </div>

        <div className="wrap flex gap-2">
          <input
            type="checkbox"
            checked={priority === 3} // Only "High" is selected when priority is "High"
            onClick={() => handleClicked(3)}
          />
          <p className={`text-xs ${darkMode && "text-white"}`}>High</p>
        </div>
      </form>
    </div>
  );
}
PriorityContainer.propTypes = {
    priority: PropTypes.string,
    setPriority: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired,
  };