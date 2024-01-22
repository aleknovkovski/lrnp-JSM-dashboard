import React from "react";

import { Popover } from "antd";
import { CustomAvatar } from "../../custom-avatar";


export const CurrentUser = () => {


    return (
        <>
            <Popover
                placement="bottomRight"
                trigger="click"
                overlayInnerStyle={{ padding: 0 }}
                overlayStyle={{ zIndex: 999 }}
            >
                <CustomAvatar name="Firstname Lastname"/> {/*TODO: Make Dynamic}*/}
            </Popover>
        </>
    );
};
