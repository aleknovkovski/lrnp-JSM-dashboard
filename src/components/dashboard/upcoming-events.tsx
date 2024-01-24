import React from 'react'

import { Card, List } from "antd";
import {CalendarOutlined} from "@ant-design/icons";
import {Text} from "@/components/text";
export default function UpcomingEvents() {
    const [isLoading, setIsLoading] = React.useState(true);

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
        >
            {isLoading ? (
                <List
                    itemLayout="horizontal"
                    dataSource={["loading1", "loading2", "loading3", "loading4", "loading5"]}
                    renderItem={(item) => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                >
                </List>
            ) : (
                <List
                    itemLayout="horizontal"
                    dataSource={[1, 2, 3, 4, 5]}
                    renderItem={(item) => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                >
                </List>
            )}
        </Card>
    )
}
