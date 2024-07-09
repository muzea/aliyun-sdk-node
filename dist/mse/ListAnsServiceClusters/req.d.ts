export interface ListAnsServiceClustersRequest {
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
     * MSE集群ID。
     * > 此处的集群与nacos服务下的集群概念不同，勿混淆。
     * @example `mse-09k1q110q01`
     */
    "ClusterId"?: string;
    /**
     * 服务名称。
     * @example `nacos.test.3`
     */
    "ServiceName"?: string;
    /**
     * 分组名称。
     * @example `DEFAULT_GROUP`
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
     * 实例ID。
     * @example `mse_prepaid_public_cn-tl32a6****`
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
