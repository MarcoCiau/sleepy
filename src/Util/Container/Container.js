import "./Container.css";


function Container(props) {
    const classNames = 'container ' + props.className;
    return (
        <div className={classNames}> {props.children} </div>
    );
}

export default Container;