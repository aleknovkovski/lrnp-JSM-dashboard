import React from 'react'

import { Card } from 'antd'
import {CalendarOutlined} from "@ant-design/icons";
import {Text} from "@/components/text";
export default function UpcomingEvents() {
    return (
        <Card
            style={{
                height: "100%",
            }}
            headStyle={{ padding: "8px 16px" }}
            bodyStyle={{
                padding: "0 1rem",
            }}
            title={
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    <CalendarOutlined />
                    <Text size="sm" style={{ marginLeft: ".7rem" }}>
                        Upcoming events
                    </Text>
                </div>
            }
        > </Card>
    )
}
