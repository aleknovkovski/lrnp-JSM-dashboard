import React from 'react'
import {DollarOutlined} from "@ant-design/icons";
import { Card } from 'antd';

import { Text } from "@/components/text";
import {Area} from "@ant-design/plots";
import {mapDealsData} from "@/utilities/helpers";
import {DASHBOARD_DEALS_CHART_QUERY} from "@/graphql/queries";
import {GetFieldsFromList} from "@refinedev/nestjs-query";
import {DashboardDealsChartQuery} from "@/graphql/types";
import {useList} from "@refinedev/core";

export default function DealsChart() {

    const { data } = useList<GetFieldsFromList<DashboardDealsChartQuery>>({
        resource: "dealStages",
        filters: [{ field: "title", operator: "in", value: ["WON", "LOST"] }],
        meta: {
            gqlQuery: DASHBOARD_DEALS_CHART_QUERY,
        },
    });


    const dealData = React.useMemo(() => {
        return mapDealsData(data?.data);
    }, [data?.data]);

    const config = {
        data: dealData,
        xField: "timeText",
        yField: "value",
        seriesField: "state",
    }

    return (
        <Card
            style={{ height: "100%" }}
            headStyle={{ padding: "8px 16px" }}
            bodyStyle={{ padding: "24px 24px 0px 24px" }}
            title={
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    <DollarOutlined />
                    <Text size="sm" style={{ marginLeft: ".5rem" }}>
                        Deals Chart
                    </Text>
                </div>
            }
        >
            <Area {...config} height={325} />
        </Card>
    )
}
