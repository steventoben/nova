interface CheckboxProps {
    id: string;
    name: string;
    value: string;
    isChecked: boolean;
    label: string;
}
export function Checkbox(props: CheckboxProps) {
    const {
        id,
        name,
        value,
        isChecked,
        label
    } = props;
    return (
        <div className={`Checkbox-container`}>
            <label className={`Checkbox-label`} 
                    role={'presentation'}
                    htmlFor={id}
            >
                <input className={`Checkbox-input`} 
                        type={'checkbox'} 
                        name={name} 
                        value={value}
                        id={id}
                />
                <span className={`Checkbox-check`}></span>
                <span className={`Checkbox-text`}></span>
            </label>
        </div>
    );
}