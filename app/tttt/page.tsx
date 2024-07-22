"use client";

import { Avatar, Button, Col, Divider, Layout, Row, Slider } from "antd";

const Home = () => (
  <div className="App">
    <Row>
      <Col span={24}>
        <Avatar src="./avatar.png"></Avatar>
      </Col>
    </Row>

    <Divider />

    <div>공지사항? 광고 슬라이드 배너?</div>

    <Row gutter={10} style={{ backgroundColor: "blue" }}>
      <Col span={8} style={{ backgroundColor: "red" }}>
        asdf
      </Col>
      <Col span={8} style={{ backgroundColor: "red" }}>
        asdf
      </Col>
      <Col span={8}>asdf</Col>
    </Row>

    <Row
      style={{
        marginTop: "2em",
      }}
    >
      <Col
        span={24}
        style={{
          marginBottom: "1em",
        }}
      >
        <h2>미션</h2>
      </Col>
      <Col
        span={24}
        style={{
          marginBottom: "1em",
        }}
      >
        <div>
          # M1. 하나님에게 하고 싶은 말이 있다면?
          <div>2024/07/15</div>
        </div>
      </Col>
      <Col
        span={24}
        style={{
          marginBottom: "1em",
        }}
      >
        <div>
          # M2. 하나님에 대한 내 생각이 어떻게 바뀌었는지
          <div>2024/07/16</div>
        </div>
      </Col>
    </Row>

    <Row>강의 레벨 1. 수업 수강 시간 2.완료 시간 등등...</Row>

    <Row>하단 네비게이션</Row>
  </div>
);

export default Home;
