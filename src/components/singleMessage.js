import React from 'react';
class SingleMessage extends React.Component {
    render() {
        return (
            <div class="section no-pad-bot" id="index-banner">
                <div class="container">
                    <div id="chatDiv" />
                    <ul class="collection" id="chatList">
                        <li class="collection-item avatar">
                            <i class="material-icons circle red">play_arrow</i>
                            <span class="title">{this.props.user}</span>
                            <br />
                            <p>{new Date().toString()}</p>
                            <b>{this.props.msg}</b>
                            {/* <p>First Line in a long time</p> */}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default SingleMessage