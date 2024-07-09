export interface DeleteNacosInstanceRequest {
    /**
     * 实例ID。
     * @example `mse-cn-st21v5****`
     */
    "InstanceId": string;
    /**
     * 服务名称。
     * @example `hello_service`
     */
    "ServiceName": string;
    /**
     * 命名空间ID。
     * @example `9e78a671-4b9b-4dd4-99c1-0b9da87****`
     */
    "NamespaceId"?: string;
    /**
     * 分组名称。
     * @example `DEFAULT_GROUP`
     */
    "GroupName": string;
    /**
     * 集群别名。
     * @example `DEFAULT`
     */
    "ClusterName"?: string;
    /**
     * Nacos实例IP。
     * @example `10.237.1.32`
     */
    "Ip": string;
    /**
     * Nacos实例端口。
     * @example `8080`
     */
    "Port": number;
    /**
     * 是否临时节点标志，取值如下：
     * - `true`：是。
     * - `false`：否。
     * @example `false`
     */
    "Ephemeral": boolean;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
