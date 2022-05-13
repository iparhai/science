import React from "react";
import PropTypes from 'prop-types'
import './loader.css'
class Loader extends React.Component {
    state = {
        msg: 1
    };
    intervalRef;

    componentDidMount() {
        this.intervalRef = setInterval(() => this.setState(this.handleCount), 1000);

    }

    handleCount = prevState => {
        if (prevState.msg === 1) {
            return { msg: "GO" };
        }

        if (prevState.msg === "GO") {
            return { msg: undefined };
        }
        return { msg: prevState.msg - 1 };
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.msg === undefined) {
            clearInterval(this.intervalRef);
            this.props.isComplete();
            return false;
        }
        return true;
    }

    componentWillUnmount() {
        clearInterval(this.intervalRef);

    }

    render() {
        return (

            <div class="wrapLoaderx">
                <div class="loaderx"></div>
            </div>

            // <div className="loaderBody">
            //     {/* <h3> GET READY...</h3>
            //         <h1>{this.state.msg}</h1> */}

            //     <div className="loader-bar">
            //         <div className="block-border"></div>
            //         <div className="block-border"></div>
            //         <div className="block-border"></div>
            //         <div className="block-border"></div>
            //         <div className="block-border"></div>
            //         <div className="block-border"></div>
            //         <div className="block-border"></div>
            //         <div className="block-border"></div>
            //         <div className="block-meter"></div>
            //         <div className="block-meter"></div>
            //         <div className="block-meter"></div>
            //         <div className="block-meter"></div>
            //         <div className="block-meter"></div>
            //         <div className="block-meter"></div>
            //         <div className="block-meter"></div>
            //         <div className="block-meter"></div>
            //     </div>

            // </div>
        );
    }
}
{/* <script type="text/javascript">	
//--- Page Loader ---//

$("body").hide();
window.onload = function () { $('.wrapLoaderx').fadeOut(500);$("body").fadeIn(500) }

//--- End --//	
</script>

<div class="wrapLoaderx">
<div class="loaderx"></div>
</div> 

.wrapLoaderx{
	position: fixed;
	z-index: 999;
	width:100vw;
	height: 100vh;
	line-height: 100vh;
	background: hsla(228.8, 100%, 6.3%, 0.9);
}

.loaderx {
	margin: auto;
	position: relative;
	top:45%;
	border: 16px solid hsla(359,100%,100%,0.6);
	border-radius: 50%;
	border-top: 16px solid #FFC300;
	transition-duration: 0.3s;
	width: 8vw;
	height: 8vw;
	-webkit-animation: spin 3s linear infinite; /* Safari */
    // animation: spin 3s linear infinite;
}


Loader.propTypes = {
    isComplete: PropTypes.func.isRequired,
}

export default Loader;
