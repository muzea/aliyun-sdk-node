export interface CreateNacosServiceRequest {
    /**
     * 实例ID。
     * > 此接口同时有InstanceId与ClusterId，则其中一项必填。
     * @example `mse-cn-st21ri2****`
     */
    "InstanceId"?: string;
    /**
     * 服务名称。
     * @example `com.alibabacloud.hipstershop.cartserviceapi.service.CartService`
     */
    "ServiceName": string;
    /**
     * 分组名称。
     * @example `DEFAULT_GROUP`
     */
    "GroupName"?: string;
    /**
     * 命名空间ID。
     * @example `production`
     */
    "NamespaceId"?: string;
    /**
     * 保护阈值。
     * @example `0`
     */
    "ProtectThreshold"?: string;
    /**
     * 是否临时节点标志，取值如下：
     * - `true`：是。
     * - `false`：否。
     * @example `true`
     */
    "Ephemeral"?: boolean;
    /**
     * 集群ID。
     * > 此接口同时有InstanceId与ClusterId，则其中一项必填。
     * @example `mse-3691a080`
     */
    "ClusterId"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
