export interface ListAnsServicesRequest {
    /**
     * 服务名称。
     * @example `name`
     */
    "ServiceName"?: string;
    /**
     * 联系人组名称。
     * @example `name`
     */
    "GroupName"?: string;
    /**
     * 命名空间ID。
     * @example `12233****`
     */
    "NamespaceId"?: string;
    /**
     * 查询服务下某个集群的实例列表时所需要的参数。
     * @example `DEFAULT`
     */
    "ClusterName"?: string;
    /**
     * 是否查询服务实例数量。
     * @example `true`
     */
    "HasIpCount"?: string;
    /**
     * 集群ID。
     * > 此接口同时有InstanceId与ClusterId，则其中一项必填。
     * @example `mse-09k1q11****`
     */
    "ClusterId"?: string;
    /**
     * 实例ID。
     * > 此接口同时有InstanceId与ClusterId，则其中一项必填。
     * @example `mse-cn-st21v5****`
     */
    "InstanceId"?: string;
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
     * 地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 扩展请求参数，JSON格式。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
