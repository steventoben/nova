export function OutlierDebugCards(props) {
    const {
        items
    } = props;
    return (
        <div className="Cards-grid">
            {items.map(item => (
                <article className="Card">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </article>
            ))}
        </div>
    );
}