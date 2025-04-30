import SliderInput from './SliderInput';

interface Props {
  value: number;
  onChange: (val: number) => void;
}

const InitialSavingsSlider: React.FC<Props> = ({ value, onChange }) => (
    <SliderInput
        label="Initial Savings"
        value={value}
        onChange={onChange}
        min={0}
        max={10000}
        step={100}
        suffix="£"
    />
);

export default InitialSavingsSlider;
