interface ModifyHealthCheckConfigRequest {
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
    * 健康检查配置内容（JSON字符串格式），具体结构描述如下：
    * - **check**，Object类型，必选，健康检查内容配置，具体结构描述如下：
    *     > 该参数名以小写开头。
    *     - **interval**，Integer类型，必选，检查间隔。
    *     - **port**，Integer类型，可选，检测端口。
    *
    *         > 协议为**tcp**或**udp**时必填。
    *     - **timeout**，Integer类型，必选，响应超时时间。
    *     - **type**，String类型，必选，协议类型，取值：
    *         - **tcp**
    *         - **udp**
    *         - **http**
    *     - **up**，Integer类型，必选，健康阈值。
    *     - **down**，Integer类型，必选，不健康阈值。
    *     - **domain**，String类型，可选，域名。
    *         > 协议为**http**时可填，非必需。
    *     - **uri**，String类型， 可选，检查路径。
    *         > 协议为http时必填。
    * @example `{"check":{"interval":5,"port":255,"timeout":5,"type":"http","up":3,"down":3,"domain":"www.aliyun.com","uri":"/a/a/a"}}`
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
export { ModifyHealthCheckConfigRequest };