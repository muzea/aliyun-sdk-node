export interface DescribeNsasSuspEventTypeRequest {
    /**
     * 访问源的IP地址。
     * @example `180.212.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 服务器的名称。
     * @example `testECS`
     */
    "Remark"?: string;
    /**
     * 安全告警类型名称。
     * @example `Unusual Logon`
     */
    "Name"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 请求来源标识，固定为**sas**，表示请求来源为云安全中心。
     * @example `sas`
     */
    "From"?: string;
    /**
     * 指定服务器的UUID。存在多个UUID时使用英文逗号（,）分隔。
     * > 调用[DescribeCloudCenterInstances](~~141932~~)接口获取该参数。
     * @example `f56406cb-916d-42db-b6f7-2ff79e34****`
     */
    "Uuids"?: string;
    /**
     * 容器字段。取值：
     * - **clusterId**：集群编号
     * @example `clusterId`
     */
    "ContainerFieldName"?: string;
    /**
     * 容器字段对应值。
     * @example `ca3108551c83c4d949106e1ab9e1e****`
     */
    "ContainerFieldValue"?: string;
}
