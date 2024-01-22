import React from "react";

import type { AvatarProps } from "antd";
import { Avatar as AntdAvatar } from "antd";

type Props = AvatarProps & {
    name?: string;
};

export const CustomAvatar = ({ name = "", style, ...rest }: Props) => {
    return (
        <AntdAvatar
            alt={name}
            size="small"
            style={{
                backgroundColor: "#87d068",
                display: "flex",
                alignItems: "center",
                border: "none",
                ...style,
            }}
            {...rest}
        >
            {name}
        </AntdAvatar>
    );
};
