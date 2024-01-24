import React from 'react'
import {Col, Row} from "antd";

export function Dashboard() {
    return (
        <div>
            <Row
                gutter={[32, 32]}
                style={{marginTop: '32px'}}
            >
                <Col
                    xs={24}
                    sm={24}
                    xl={8}
                    style={{height: '460px'}}
                >
                    <h1>CalendarUpcoming</h1>{/* TODO: Build this component   */}
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    xl={8}
                    style={{height: '460px'}}
                >
                    <h1>DashboardDealsChart</h1>{/* TODO: Build this component   */}
                </Col>
            </Row>
        </div>
    )
}
