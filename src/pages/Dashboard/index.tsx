import React from 'react'
import {Col, Row} from "antd";
import {DealsChart, UpcomingEvents} from "@/components/dashboard";

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
                    <UpcomingEvents />{/* TODO: Build this component   */}
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    xl={8}
                    style={{height: '460px'}}
                >
                    <DealsChart />{/* TODO: Build this component   */}
                </Col>
            </Row>
        </div>
    )
}
