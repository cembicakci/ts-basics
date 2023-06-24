import Item from "./Item"

const ItemList = () => {
    return (
        <Item
            id={1}
            title="Title"
            extra={[{
                id: 1,
                username: 'cem'
            }]}
        />
    )
}

export default ItemList