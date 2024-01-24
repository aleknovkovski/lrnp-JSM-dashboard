import React from 'react'

import {Badge, Card, List} from "antd";
import {CalendarOutlined} from "@ant-design/icons";
import {Text} from "@/components/text";
import UpcomingEventsSkeleton from "@/components/skeleton/upcoming-events";
export default function UpcomingEvents() {
    const [isLoading, setIsLoading] = React.useState(false);

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
                    renderItem={() => (
                        <UpcomingEventsSkeleton />
                    )}
                >
                </List>
            ) : (
                <List
                    itemLayout="horizontal"
                    dataSource={[{title: "Event 1", color: "red"}, {title: "Event 2", color: "blue"}, {title: "Event 3", color: "green"}, {title: "Event 4", color: "yellow"}, {title: "Event 5", color: "purple"}]}
                    renderItem={(item) => {
                        return (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Badge color={item.color} />}
                                    title={<Text size="xs">{`Date`}</Text>}
                                    description={
                                        <Text ellipsis={{ tooltip: true }} strong>
                                            {item.title}
                                        </Text>
                                    }
                                />
                            </List.Item>
                        );
                    }}
                >
                </List>
            )}
        </Card>
    )
}
