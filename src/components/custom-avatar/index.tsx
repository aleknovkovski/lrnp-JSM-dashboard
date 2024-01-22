import React from "react";

import type { AvatarProps } from "antd";
import { Avatar as AntdAvatar } from "antd";
import {getNameInitials} from "@/utilities/get-name-initials";

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
            {getNameInitials(name)}
        </AntdAvatar>
    );
};
