export interface ListAnsInstancesRequest {
    /**
     * 扩展请求参数，JSON格式。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNum": number;
    /**
     * 每页展示实例数。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 集群ID。><notice>此接口同时有InstanceId与ClusterId，则其中一项必填。></notice>
     * @example `mse-09k1q11****`
     */
    "ClusterId"?: string;
    /**
     * 服务名称。
     * @example `name`
     */
    "ServiceName": string;
    /**
     * 联系人组名称。
     * @example `test`
     */
    "GroupName"?: string;
    /**
     * 命名空间ID。
     * @example `12233****`
     */
    "NamespaceId"?: string;
    /**
     * 集群别名。
     * @example `mse-7413****`
     */
    "ClusterName"?: string;
    /**
     * 实例ID。><notice>此接口同时有InstanceId与ClusterId，则其中一项必填。></notice>
     * @example `mse_prepaid_public_cn-tl327w****`
     */
    "InstanceId"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
