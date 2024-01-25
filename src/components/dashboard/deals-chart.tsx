import React from 'react'
import {DollarOutlined} from "@ant-design/icons";
import { Card } from 'antd';

import { Text } from "@/components/text";

export default function DealsChart() {
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
            Deals Chart
        </Card>
    )
}
