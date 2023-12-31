import Child from "@/components/childrenParent/Child"
import Parent from "@/components/childrenParent/Parent"
import SecondChild from "@/components/childrenParent/SecondChild"

const ChildrenPropExample = () => {
    return (
        <div>
            <Parent>
                <Child />
                <SecondChild />
            </Parent>
        </div>
    )
}

export default ChildrenPropExample