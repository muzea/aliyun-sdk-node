export interface UpdateNacosClusterRequest {
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
     * @example `9e78a671-4b9b-4dd4-99c1-0b9da87d3dec`
     */
    "NamespaceId"?: string;
    /**
     * Nacos集群名。
     * @example `DEFAULT`
     */
    "ClusterName": string;
    /**
     * 健康检查端口。
     * @example `80`
     */
    "CheckPort"?: number;
    /**
     * 是否使用实例端口进行健康检查。
     * @example `false`
     */
    "UseInstancePortForCheck"?: boolean;
    /**
     * 健康检查类型。
     * @example `{"type":"none"}`
     */
    "HealthChecker"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
