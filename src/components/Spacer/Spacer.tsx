interface SpacerProps {
    size: number;
}

export function Spacer(props: SpacerProps) {
    const {
        size
    } = props;
    return (
        <div style={{height: `${size}rem`}} className={`Spacer`}/>
    );
}