//function Profile() {
//  return (
//   <img
//     src="https://i.imgur.com/MK3eW3As.jpg"
//     alt="Katherine Johnson"
//   />
//  );
//}
function Line (children){
    return(<><hr/>
    {children}
    <hr/></>);
}
function Profile(props) {
    return (<h1> Hello {props.name} {props.surname}
    </h1>);
}
export default function Hello(props) {
    return (<Line>
        <Profile {...props} />
        </Line>)
};


