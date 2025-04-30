import SliderInput from './SliderInput';

interface Props {
  value: number;
  onChange: (val: number) => void;
}

const InterestRateSlider: React.FC<Props> = ({ value, onChange }) => (
    <SliderInput
        label="Interest Rate"
        value={value}
        onChange={onChange}
        min={0}
        max={15}
        step={0.1}
        suffix="%"
    />
  ); 

export default InterestRateSlider;