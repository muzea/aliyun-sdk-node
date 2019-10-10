interface ModifyControlPolicyRequest {
    "RegionId"?: string;
    /**
    * 安全策略的流量通过云防火墙的方式。
    * - **accept**：放行
    * - **drop**：拒绝
    * - **log**：观察
    * @example `accept`
    */ "AclAction": string;
    /**
    * 安全策略支持的应用类型。
    * 支持的应用类型有以下几种:：
    * - **ANY**
    * - **HTTP**
    * - **HTTPS**
    * - **MySQL**
    * - **SMTP**
    * - **SMTPS**
    * - **RDP**
    * - **VNC**
    * - **SSH**
    * - **Redis**
    * - **MQTT**
    * - **MongoDB**
    * - **Memcache**
    * - **SSL**
    * > **ANY**表示策略应用在所有类型的应用中。
    * @example `HTTP`
    */ "ApplicationName": string;
    /**
    * 安全访问控制策略的描述信息。
    * @example `test`
    */ "Description": string;
    /**
    * 访问控制目的地址。
    * - 当DestinationType为net时，Destination为目的CIDR。例如：1.2.3.4/24
    * - 当DestinationType为group时，Destination为目的地址簿名称。例如：db_group
    * - 当DestinationType为domain时，Destination为目的域名。例如：*.aliyuncs.com
    * - 当DestinationType为location时，Destination为目的区域（具体区域位置编码见后文）。例如： \["BJ11", "ZB"\]
    * @example `1.2.3.4/24`
    */ "Destination": string;
    /**
    * 目的地址类型。
    * - net：目的网段(CIDR)
    * - group：目的地址簿
    * - domain：目的域名
    * - location：目的区域
    * @example `net`
    */ "DestinationType": string;
    /**
    * 访问控制策略的流量方向。
    * - **in**：外对内流量访问控制
    * - **out**：内对外流量访问控制
    * @example `in`
    */ "Direction": string;
    /**
    * 策略的安全协议。
    * - ANY
    * - TCP
    * - UDP
    * - ICMP
    * @example `TCP`
    */ "Proto": string;
    /**
    * 访问控制源地址。
    * - 当SourceType为net时，Source为源CIDR。例如：1.2.3.0/24
    * - 当SourceType为group时，Source为源地址簿名称。例如：db_group
    * - 当SourceType为location时，Source为源区域（具体区域位置编码见后文）。例如\["BJ11", "ZB"\]
    * @example `1.2.3.0/24`
    */ "Source": string;
    /**
    * 访问控制策略唯一ID。
    * @example `00281255-d220-4db1-8f4f-c4df221ad84c`
    */ "AclUuid": string;
    /**
    * 源地址类型。
    * - net：源网段(CIDR)
    * - group：源地址簿
    * - location：源区域
    * @example `net`
    */ "SourceType": string;
    /**
    * 访问者源IP地址。
    * @example `1.2.3.5`
    */ "SourceIp"?: string;
    /**
    * 指定请求和接收消息的语言类型。
    * - **zh**：中文
    * - **en**：英文
    * @example `zh`
    */ "Lang"?: string;
    /**
    * 控制访问策略中流量访问的目的端口。
    * @example `80`
    */ "DestPort"?: string;
    /**
    * 目的端口类型。
    * - **port**：端口
    * - **group**：端口地址簿
    * @example `port`
    */ "DestPortType"?: string;
    /**
    * 流量访问的目的端口地址簿名称。
    * @example `my_port_group`
    */ "DestPortGroup"?: string;
}
export { ModifyControlPolicyRequest };