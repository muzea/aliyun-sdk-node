interface ConfigLayer7RuleRequest {
    /**
    * @example `cn`
    */ "RegionId"?: string;
    /**
    * 源站类型，取值：
    * - **0**：IP
    * - **1**：域名
    * @example `0`
    */ "RsType": number;
    "RealServers": string[];
    "SourceIp"?: string;
    /**
    * 要操作的域名。
    * @example `www.aliyun.com`
    */ "Domain": string;
    /**
    * 资源组ID。
    * @example `test`
    */ "ResourceGroupId"?: string;
    /**
    * 协议数组。具体结构描述如下：
    * - **ProxyType**，String类型，必选，协议类型，取值：**http**、**https**、**websocket**、**websockets**。
    * - **ProxyPorts**，Integer类型，必选，协议端口。
    * @example `[{"ProxyPorts":[80,8080],"ProxyType":"http"},{"ProxyPorts":[443],"ProxyType":"https"}]rts\":[443],\"ProxyType\":\"https\"}]`
    */ "ProxyTypeList"?: string;
    "ProxyTypes"?: string[];
    "InstanceIds"?: string[];
}
export { ConfigLayer7RuleRequest };