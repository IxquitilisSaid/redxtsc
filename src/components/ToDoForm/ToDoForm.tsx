import React from 'react';

export default (props: {currentToDo: string; changeCurrent: any;}) => {
  const {currentToDo, changeCurrent} = props;

  const handleInputChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const val = (event.target as HTMLInputElement).value;

    changeCurrent(val);
  };

  return (
    <form>
      <input
        type="text"
        value={currentToDo}
        onChange={handleInputChange} />
    </form>
  );
}