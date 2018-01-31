/**
 * Common used components
 */

// a link type button
function AButton(props){
    return (
        <a className={props.className} href={props.href}>
            <span className={props.glyphiconClassName}></span>
            {props.text}
        </a>
    );
}