"use client";

import "../app/custom-global.css";
import React, { useState } from "react";
import {
  Layout,
  Button,
  theme,
  Drawer,
  DrawerProps,
  Row,
  Col,
  Divider,
  Menu,
  FloatButton,
} from "antd";
import Card from "./component/card";
import Icon, { MenuOutlined } from "@ant-design/icons";
const { Header, Sider, Content, Footer } = Layout;

const items = [
  {
    key: "1",
    label: "nav 1",
  },
  {
    key: "21",
    label: "nav 2",
  },
  {
    key: "3",
    label: "nav 3",
  },
  {
    key: "4",
    label: "nav 4",
  },
  {
    key: "5",
    label: "nav 5",
  },
  {
    key: "6",
    label: "nav 6",
  },
];
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
    />
  </svg>
);

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div className="App">
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "transparent",
            height: "56px",
            lineHeight: 56,
            zIndex: 19,
          }}
        ></Header>
        <Header
          style={{
            position: "fixed",
            background: "transparent",
            display: "flex",
            height: "56px",
            width: "100%",
            paddingInline: "0",
            paddingBlock: "0",
            borderBlockEnd: "1px solid rgba(5, 5, 5, 0.06)",
            zIndex: "100",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              type="text"
              onClick={() => showDrawer()}
              style={{
                fontSize: "16px",
                width: 64,
              }}
            >
              <MenuOutlined />
            </Button>
          </div>
        </Header>
        <Content
          style={{
            paddingBlock: 32,
            paddingInline: 40,
            minHeight: 280,
            background: "transparent",
            width: "100%",
          }}
        >
          <Row>
            <Col xs={24} style={{ marginBottom: "24px" }}>
              <Card />
            </Col>

            <Col xs={24} style={{ marginBottom: "24px" }}>
              <Card />
            </Col>

            <Col xs={24} style={{ marginBottom: "24px" }}>
              <Card />
            </Col>

            <Col xs={24} style={{ marginBottom: "24px" }}>
              <Card />
            </Col>
          </Row>
        </Content>

        <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
      <FloatButton
        type="primary"
        href="./newPost"
        // onClick={() => console.log("onClick")}
      />

      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        styles={{
          wrapper: {
            width: "256px",
          },
          body: {
            padding: "0px",
          },
        }}
      >
        <Sider
          width={256}
          // style={{
          //   backgroundColor: colorBgContainer,
          // }}
          trigger={null}
        >
          <div className="App-logo" />
          <Menu theme="light" defaultSelectedKeys={["1"]} items={items} />
        </Sider>
      </Drawer>
    </div>
  );
};

export default Home;
