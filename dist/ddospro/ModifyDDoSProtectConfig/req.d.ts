interface ModifyDDoSProtectConfigRequest {
    "RegionId"?: string;
    /**
    * 要操作的高防实例IP。
    * @example `1.1.1.1`
    */ "Ip": string;
    /**
    * 转发端口。
    * @example `255`
    */ "FrontPort": number;
    /**
    * DDoS防护配置内容（JSON字符串格式），具体结构描述如下：
    * - **check**，Object类型，必选，DDoS防护策略配置，具体结构描述如下：
    *     > 该参数名以小写开头。
    *     - **PayloadLength**，Object类型，包长度过滤，具体结构描述如下：
    *         - **Min**，Integer类型，必选，包长度最小值。
    *         - **Max**，Integer类型，必选，包长度最大值。
    *     - **PersistenceTimeout**，Integer类型，必选，会话保持检查时间，单位为秒。
    *     - **NoDataConn**，String类型，必选，虚假源开关。
    *     - **SynProxy**，String类型，必选，空连接开关。
    *     - **Sla**，Object类型，必选，目的新建、并发链接配置，具体结构描述如下：
    *         - **MaxConnEnable**，Integer类型，必选，目的并发连接限速开关，取值：
    *             - **0**：关闭
    *             - **1**：打开
    *         - **MaxConn**，Integer类型，必选，目的并发连接限速。
    *         - **CpsEnable**，Integer类型，必选，目的新建连接限速开关，取值：
    *             - **0**：关闭
    *             - **1**：打开
    *         - **Cps**，Integer类型，必选，目的新建连接限速。
    *     - **Slimit**，Object类型，必选，源新建、并发链接配置，具体结构描述如下：
    *         - **MaxConnEnable**，Integer类型，必选，源并发连接限速开关，取值：
    *             - **0**：关闭
    *             - **1**：打开
    *         - **MaxConn**，Integer类型，必选，源并发连接限速。
    *         - **CpsEnable**，Integer类型，必选，源新建连接限速开关，取值：
    *             - **0**：关闭
    *             - **1**：打开
    *         - **Cps**，Integer类型，必选，源新建连接限速。
    * @example `{"payload_len":{"min":0,"max":6000},"synproxy":"on","slimit":{"pps":0,"maxconn_enable":1,"bps":0,"maxconn":124,"cps":123,"cps_enable":1},"sla":{"pps":0,"maxconn_enable":1,"outbps":536870912,"cps":125,"maxconn":1226,"inbps":0,"cps_enable":1},"nodata_conn":"off"}`
    */ "ConfigJson": string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
    /**
    * 高防IP策略修改标识。
    * @example `xxxxxxx-xxxx-xxxx-xxxxxxxx`
    */ "LbId"?: string;
}
export { ModifyDDoSProtectConfigRequest };