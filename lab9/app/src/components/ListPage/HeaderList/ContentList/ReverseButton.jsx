import Select from "react-select";

const ReverseButton = (props) => {
    const options = [
        {
            value: 'asc',
            label: 'in ascending order'
        },
        {
            value: 'desc',
            label: 'in descending order'
        }
    ]
    return (
        <Select
            placeholder={'in ascending order'}
            options={options}
            onChange={props.reverse}
        />
    )
}
export default ReverseButton;