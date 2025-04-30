import SliderInput from './SliderInput';

interface Props {
  value: number;
  onChange: (val: number) => void;
}

const MonthlyDepositSlider: React.FC<Props> = ({ value, onChange }) => (
    <SliderInput
        label="Monthly Deposit"
        value={value}
        onChange={onChange}
        min={0}
        max={2000}
        step={50}
        suffix="£"
    />
);  

export default MonthlyDepositSlider;
