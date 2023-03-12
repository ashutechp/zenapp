export const Toggle = () => {
  const [isOn, toggleIsOn] = useToggle();
  return (
    <>
      {isOn ? 'The light is on!' : 'Hey who turned off the lights'}
      <button onClick={toggleIsOn}>Press me</button>
    </>
  );
};
