export interface UpdateNacosInstanceRequest {
    /**
     * 实例ID。
     * @example `mse-cn-123456`
     */
    "InstanceId": string;
    /**
     * 服务名称。
     * @example `hello_service`
     */
    "ServiceName": string;
    /**
     * 分组名称。
     * @example `DEFAULT_GROUP`
     */
    "GroupName": string;
    /**
     * 命名空间ID。
     * @example `9e78a671-4b9b-4dd4-99c1-0****`
     */
    "NamespaceId"?: string;
    /**
     * Nacos集群名称。
     * @example `DEFAULT`
     */
    "ClusterName"?: string;
    /**
     * Nacos实例IP。
     * @example `1.2.X.X`
     */
    "Ip": string;
    /**
     * Nacos实例端口。
     * @example `12281`
     */
    "Port": number;
    /**
     * 是否为非持久化节点，取值如下：
     * - `true`：是。
     * - `false`：否。
     * @example `false`
     */
    "Ephemeral": boolean;
    /**
     * 权重，为范围0～10000的整数。值越大，访问到该实例的频率越高。
     * @example `1`
     */
    "Weight": string;
    /**
     * 是否禁用此服务，取值如下：
     * - `true`：是。
     * - `false`：否。
     * @example `true`
     */
    "Enabled": boolean;
    /**
     * 节点元数据。
     * @example `[int]`
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
