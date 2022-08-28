import ConnectSandbox from "./app/connect/sandbox";
import LoggerCore from "./app/logger/core";
import MessageWriter from "./app/logger/messageWriter";
import SandboxRuntime from "./runtime/content/sandbox";

// eslint-disable-next-line no-restricted-globals
const connectSandbox = new ConnectSandbox(top!);

// 初始化日志组件
const loggerCore = new LoggerCore({
  debug: process.env.NODE_ENV === "development",
  writer: new MessageWriter(connectSandbox),
});

loggerCore.logger({ env: "sandbox" }).debug("sandbox start");

const sandbox = new SandboxRuntime(connectSandbox);

sandbox.start();

window.onload = () => {
  connectSandbox.send("onload", {});
};
