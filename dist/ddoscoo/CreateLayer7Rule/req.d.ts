interface CreateLayer7RuleRequest {
    /**
    * @example `cn`
    */ "RegionId"?: string;
    /**
    * 源站类型，取值：
    * - **0**：IP
    * - **1**：域名
    * @example `0`
    */ "RsType": number;
    /**
    * 传入7层规则Layer7Rule数组JSON串。具体结构描述如下：
    * - **ProxyRules**，数组类型，必选，规则对象数组，包含以下元素：
    *     - **ProxyPort**，Integer类型，必选，协议端口，取值：**80**、**443**。
    *     - **RealServers**，[]String类型，必选，用户源站。例如，1.1.1.1:443。
    * - **ProxyType**，String类型，必选，协议类型，取值：**http**、**https**、**websocket**、**websockets**。
    * @example `[{"ProxyRules":[{"ProxyPort":443,"RealServers":["1.1.1.1:443"]}],"ProxyType":"https"},{"ProxyRules":[{"ProxyPort":80,"RealServers":["1.1.1.1:80"]}],"ProxyType":"http"}]`
    */ "Rules": string;
    "SourceIp"?: string;
    /**
    * 要添加的域名。
    * @example `www.aliyun.com`
    */ "Domain": string;
    /**
    * 资源组ID。
    * @example `test`
    */ "ResourceGroupId"?: string;
    "InstanceIds"?: string[];
}
export { CreateLayer7RuleRequest };