import React from 'react'

import {Badge, Card, List} from "antd";
import {CalendarOutlined} from "@ant-design/icons";
import {Text} from "@/components/text";
import UpcomingEventsSkeleton from "@/components/skeleton/upcoming-events";
import {getDate} from "@/utilities/helpers";
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
                    dataSource={[{title: "Event 1", color: "red", startDate: "2021-09-01", endDate: "2021-09-01"}, {title: "Event 2", color: "blue", startDate: "2021-09-01", endDate: "2021-09-01"}, {title: "Event 3", color: "green", startDate: "2021-09-01", endDate: "2021-09-01"}, {title: "Event 4", color: "yellow", startDate: "2021-09-01", endDate: "2021-09-01"}, {title: "Event 5", color: "purple", startDate: "2021-09-01", endDate: "2021-09-01"}]}
                    renderItem={(item) => {
                        const renderDate = getDate(item.startDate, item.endDate)

                        return (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Badge color={item.color} />}
                                    title={<Text size="xs">{renderDate}</Text>}
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
