import React, { useRef, useState, useEffect } from "react";
import "./Select.css";
import Arrow from "./icons/ArrowIcon/Arrow";
import Close from "./icons/CloseIcon/Close";
const Select = ({ options, id, label }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef();

  console.log({ value });
  const searchFilter = (options) => {
    return options.filter(
      (option) =>
        option[label].toLowerCase().indexOf(searchQuery.toLowerCase()) > -1
    );
  };

  const displayValue = () => {
    if (searchQuery.length > 0) return searchQuery;
    if (value) return value[label];
    return "";
  };

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  function close(e) {
    setOpen(e && e.target === inputRef.current);
  }

  function resetValue() {
    setValue(null);
  }
  return (
    <div className={`select ${open ? "select open" : null}`}>
      <div
        className="select-control"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder={value ? value[label] : "Select country..."}
          value={displayValue()}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setValue(null);
          }}
        />
      </div>

      <div className={`select-options ${open ? `open` : null}`}>
        <ul className="options-list">
          {searchFilter(options).map((option) => (
            <li
              // className="option"
              className={option === value ? `option selected` : `option`}
              //if option.code === value.code
              key={option[id]}
              onClick={() => {
                setSearchQuery("");
                setValue(option);
                setOpen(false);
              }}
            >
              {option[label]}
            </li>
          ))}
        </ul>
      </div>
      {value ? <Close onClick={resetValue} /> : <Arrow open={open} />}
    </div>
  );
};

export default Select;
