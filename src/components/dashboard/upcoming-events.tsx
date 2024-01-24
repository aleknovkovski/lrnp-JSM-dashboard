import React from 'react'

import {Badge, Card, List} from "antd";
import {CalendarOutlined} from "@ant-design/icons";
import {Text} from "@/components/text";
import UpcomingEventsSkeleton from "@/components/skeleton/upcoming-events";
import {getDate} from "@/utilities/helpers";
import {useList} from "@refinedev/core";
import {DASHBOARD_CALENDAR_UPCOMING_EVENTS_QUERY} from "@/graphql/queries";
import dayjs from "dayjs";
export default function UpcomingEvents() {
        const { data, isLoading } = useList({
        resource: "events",
        pagination: {
            pageSize: 5,
        },
        sorters: [
            {
                field: "startDate",
                order: "asc",
            },
        ],
        filters: [
            {
                field: "startDate",
                operator: "gte",
                value: dayjs().format("YYYY-MM-DD"),
            },
        ],
        meta: {
            gqlQuery: DASHBOARD_CALENDAR_UPCOMING_EVENTS_QUERY,
        },
    });

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
                />
            ) : (
                <List
                    itemLayout="horizontal"
                    dataSource={data?.data || []}
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
                />
            )}

            {!isLoading && data?.data.length === 0 && <NoEvent />}
        </Card>
    )
}
const NoEvent = () => (
    <span
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "220px",
        }}
    >
    No Upcoming Event
  </span>
);