interface DescribeControlPolicyRequest {
    "RegionId"?: string;
    /**
    * 访问控制策略的流量方向。
    * - **in**：外对内流量访问控制
    * - **out**：内对外流量访问控制
    * @example `in`
    */ "Direction": string;
    /**
    * 指定返回结果的当前页码。默认值为1。
    * @example `1`
    */ "CurrentPage": string;
    /**
    * 指定列表每页显示数据条数。可设置值最大为50。
    * @example `10`
    */ "PageSize": string;
    /**
    * 访问者源IP地址。
    * @example `1.2.3.4`
    */ "SourceIp"?: string;
    /**
    * 指定请求和接收消息的语言类型。
    * - **zh**：中文
    * - **en**：英文
    * @example `zh`
    */ "Lang"?: string;
    /**
    * 访问控制源地址。
    * 对于不同SourceType的策略，支持以下几种模糊查询的方式：
    * - 当SourceType为net时，Source为源CIDR。例如：1.2.3.4/24
    * - 当SourceType为group时，Source为源地址簿名称。例如：db_group
    * - 当SourceType为location时，Source为源区域，支持中文或英文的查询。例如：北京或beijing
    * > 访问控制源支持模糊查询，不填表示查询所有访问控制源。
    * @example `1.2.3.5`
    */ "Source"?: string;
    /**
    * 访问控制目的地址。
    * 对于不同DestinationType的策略，支持以下几种模糊查询的方式：
    * - 当DestinationType为net时，Destination为目的CIDR。例如：1.2.3.0/24
    * - 当DestinationType为domain时，Destination为目的CIDR。例如：aliyun
    * - 当DestinationType为group时，Destination为目的地址簿名称。例如：db_group
    * - 当DestinationType为location时，Destination为目的区域，支持中文或英文的模糊查询。例如北京或beijing
    * > 访问控制目的支持模糊查询，不填表示查询所有访问控制目的。
    * @example `1.2.3.0`
    */ "Destination"?: string;
    /**
    * 待查询策略的描述信息。
    * > 支持模糊查询，不填表示查询所有策略的描述信息。
    * @example `test`
    */ "Description"?: string;
    /**
    * 策略的安全协议，不填表示查询所有协议。
    * - ANY
    * - TCP
    * - UDP
    * - ICMP
    * @example `TCP`
    */ "Proto"?: string;
    /**
    * 安全策略的流量通过云防火墙的方式。不填表示查询所有流量访问方式的策略。
    * - **accept**：放行
    * - **drop**：拒绝
    * - **log**：观察
    * @example `accept`
    */ "AclAction"?: string;
}
export { DescribeControlPolicyRequest };