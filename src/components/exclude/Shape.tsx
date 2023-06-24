type ShapeType = "cube" | "square" | "rectangle" | "triangle"
type TwoDShapeType = Exclude<ShapeType, "cube">

type ThemeType = "light" | "dark"
type ColorType = "red" | "blue" | "yellow"

type ItemProps = {
    // color: `${ThemeType}-${ColorType}`
    color: Exclude<`${ThemeType}-${ColorType}`, 'dark-yellow'>
}

const Shape = (props: ItemProps) => {

    const shape: ShapeType = "cube"
    const twodshape: TwoDShapeType = 'rectangle'

    return (
        <div>Shape</div>
    )
}

export default Shape