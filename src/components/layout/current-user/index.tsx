import React from "react";

import { useGetIdentity } from "@refinedev/core";
import type { User } from "@/graphql/schema.types";

import { SettingOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import { CustomAvatar } from "../../custom-avatar";
import { Text } from "../../text";


export const CurrentUser = () => {
    const { data: user } = useGetIdentity<User>();

    const content = (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Text
                strong
                style={{
                    padding: "12px 20px",
                }}
            >
                {user?.name}
            </Text>
            <div
                style={{
                    borderTop: "1px solid #d9d9d9",
                    padding: "4px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                }}
            >
                <Button
                    style={{ textAlign: "left" }}
                    icon={<SettingOutlined />}
                    type="text"
                    block
                    onClick={() => {null}}
                >
                    Account settings
                </Button>
            </div>
        </div>
    );

    return (
        <>
            <Popover
                placement="bottomRight"
                content={content}
                trigger="click"
                overlayInnerStyle={{ padding: 0 }}
                overlayStyle={{ zIndex: 999 }}
            >
                <CustomAvatar
                    name={user?.name}
                    src={user?.avatarUrl}
                    size="default"
                    style={{ cursor: "pointer" }}
                />
            </Popover>
        </>
    );
};
