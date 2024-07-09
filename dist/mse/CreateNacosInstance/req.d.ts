export interface CreateNacosInstanceRequest {
    /**
     * 实例ID。
     * @example `mse-cn-123456`
     */
    "InstanceId": string;
    /**
     * 服务名。
     * @example `hello_service`
     */
    "ServiceName": string;
    /**
     * 分组名。
     * @example `DEFAULT_GROUP`
     */
    "GroupName": string;
    /**
     * 命名空间ID。
     * @example `9e78a671-4b9b-4dd4-99c1-0b9da87****`
     */
    "NamespaceId"?: string;
    /**
     * Nacos集群名。
     * @example `DEFAULT`
     */
    "ClusterName"?: string;
    /**
     * Nacos实例IP。
     * @example `1.2.xx.xx`
     */
    "Ip": string;
    /**
     * Nacos实例端口。
     * @example `12281`
     */
    "Port": number;
    /**
     * 临时节点标志。
     * @example `false`
     */
    "Ephemeral": boolean;
    /**
     * 权重，为范围0～10000的整数。值越大，访问到该实例的频率越高。
     * @example `1`
     */
    "Weight": string;
    /**
     * 服务禁用标志。
     * @example `true`
     */
    "Enabled": boolean;
    /**
     * 节点元数据。
     * @example `{\"grayversion\":\"1.0\",\"preserved.register.source\":\"SPRING_CLOUD\",\"management.context-path\":\"\"}`
     */
    "Metadata"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
