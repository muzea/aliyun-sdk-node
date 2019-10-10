interface ConfigLayer4RuleAttributeRequest {
    /**
    * @example `cn`
    */ "RegionId"?: string;
    /**
    * 转发协议，取值：**TCP**、**UDP**。
    * @example `TCP`
    */ "ForwardProtocol": string;
    /**
    * 前端端口。
    * @example `233`
    */ "FrontendPort": number;
    /**
    * 配置信息，传入**TcpConfig**或**UdpConfig**对象JSON串。
    * **TcpConfig**的具体结构描述见如下：
    * - **PersistenceTimeout**，Integer类型，必选，会话保持的超时时间，单位为秒。默认为**0**，表示关闭。
    * - **Synproxy**，String类型，必选，DDoS防护策略的虚假源，取值：**off**、**on**。
    * - **NodataConn**，String类型，必选，DDoS防护策略的空连接，取值：**off**、**on**。
    * - **Sla**，Struct类型，必选，目的限制配置。具体结构描述见**Sla**。
    * - **Slimit**，Struct类型，必选，源限制配置。具体结构描述见**Slimit**。
    * - **PayloadLen**，Struct类型，必选，包过滤配置。具体结构描述见**PayloadLen**。
    * **UdpConfig**的具体结构描述如下：
    * - **PersistenceTimeout**，Integer类型，必选，会话保持的超时时间，单位为秒。默认为**0**，表示关闭。
    * - **Synproxy**，String类型，必选，DDoS防护策略的虚假源，取值：**off**、**on**。
    * - **NodataConn**，String类型，必选，DDoS防护策略的空连接，取值：**off**、**on**。
    * - **Sla**，Struct类型，必选，目的限制配置。具体结构描述见**Sla**。
    * - **Slimit**，Struct类型，必选，源限制配置。具体结构描述见**Slimit**。
    * - **PayloadLen**，Struct类型，必选，包过滤配置。具体结构描述见**PayloadLen**。
    * **Sla**的具体结构描述如下：
    * - **Cps**，Integer类型，必选，DDoS防护策略/目的新建连接限速，取值范围：100~100,000。
    * - **Maxconn**，Integer类型，必选，DDoS防护策略/目的并发连接限速，取值范围：1,000~1,000,000。
    * - **CpsEnable**，Integer类型，必选，是否开启Cps，取值：**0**（禁用cps）、**1**（默认，启用cps）。
    * - **MaxconnEnable**，Integer类型，必选，是否开启Maxconnection，取值：**0**（禁用maxconn）、**1**（默认，启用maxconn）。
    * **Slimit**的具体结构描述如下：
    * - **Cps**，Integer类型，必选，DDoS防护策略/源新建连接限速，取值范围：100~100,000。
    * - **Maxconn**，Integer类型，必选，DDoS防护策略/源并发连接限速，取值范围：1,000~1,000,000。
    * - **CpsEnable**，Integer类型，必选，是否开启Cps，取值：**0**（禁用cps）、**1**（默认，启用cps）。
    * - **MaxconnEnable**，Integer类型，必选，是否开启Maxconnection，取值：**0**（禁用maxconn）、**1**（默认，启用maxconn）。
    * - **CpsMode**，Integer类型，必选，源新建连接限速开关，取值：**1**（关闭）、**2**（自动）。
    * **PayloadLen**的具体结构描述如下：
    * - **Min**，Integer类型，必选，DDoS防护策略/包长度过滤，包长度的最小值，取值范围为0~6,000。
    * - **Max**，Integer类型，必选，DDoS防护策略/包长度过滤，包长度的最大值，取值范围为0~6,000。
    * @example `{"Slimit":{"CpsEnable":1,"MaxconnEnable":1,"Cps":1,"Maxconn":1},"Sla":{"CpsEnable":1,"MaxconnEnable":1,"Cps":100,"Maxconn":1000},"PayloadLen":{"Min":0,"Max":6000}}`
    */ "Config": string;
    "SourceIp"?: string;
    /**
    * 要操作的实例ID。
    * @example `ddoscoo-cn-XXXXX`
    */ "InstanceId": string;
}
export { ConfigLayer4RuleAttributeRequest };