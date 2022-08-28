import ScriptEditor from "@App/pages/options/routes/script/ScriptEditor";
import ScriptList from "@App/pages/options/routes/ScriptList";
import Subscribe from "@App/pages/options/routes/Subscribe";
import { Layout, Menu } from "@arco-design/web-react";
import {
  IconCode,
  IconFile,
  IconSettings,
  IconSubscribe,
  IconTool,
} from "@arco-design/web-react/icon";
import React, { useState } from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";

const MenuItem = Menu.Item;
let { hash } = window.location;
if (!hash.length) {
  hash = "/";
} else {
  hash = hash.substring(1);
}
const Sider: React.FC = () => {
  const [menuSelect, setMenuSelect] = useState(hash);

  return (
    <HashRouter>
      <Layout.Sider className="h-full" collapsible breakpoint="xl">
        <Menu
          style={{ width: "100%", height: "100%" }}
          selectedKeys={[menuSelect]}
          selectable
          onClickMenuItem={(key) => {
            setMenuSelect(key);
          }}
        >
          <Link to="/">
            <MenuItem key="/">
              <IconCode /> 脚本列表
            </MenuItem>
          </Link>
          <Link to="/subscribe">
            <MenuItem key="/subscribe">
              <IconSubscribe /> 订阅列表
            </MenuItem>
          </Link>
          <Link to="/logger">
            <MenuItem key="/logger">
              <IconFile /> 运行日志
            </MenuItem>
          </Link>
          <Link to="/tools">
            <MenuItem key="/tools">
              <IconTool /> 系统工具
            </MenuItem>
          </Link>
          <Link to="/setting">
            <MenuItem key="/setting">
              <IconSettings /> 系统设置
            </MenuItem>
          </Link>
        </Menu>
      </Layout.Sider>
      <Layout.Content
        style={{
          borderLeft: "1px solid var(--color-bg-5)",
          overflowY: "scroll",
        }}
      >
        <Routes>
          <Route index element={<ScriptList />} />
          <Route path="/script/editor/:id" element={<ScriptEditor />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </Layout.Content>
    </HashRouter>
  );
};

export default Sider;
