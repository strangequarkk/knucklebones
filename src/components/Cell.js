import React, { useState } from "react";


const Column = (props) => {
    //(props: cellVal)

	return (
			<div className="cell">
                {props.cellVal}
            </div>
	);
};

export default Column;