export interface GetServiceListenersRequest {
    /**
     * 查询指定的服务名信息。
     * @example `zeekr-orderboss`
     */
    "ServiceName": string;
    /**
     * 服务所在的分组。
     * @example `WEB_GROUP`
     */
    "GroupName": string;
    /**
     * 服务所在的 namespace。
     * @example `ddaf8f12-****-b1c1-86e7c72e266b`
     */
    "NamespaceId": string;
    /**
     * 服务所属集群名字。
     * > 此处集群为nacos服务中的概念，非MSE集群。
     * @example `DEFAULT`
     */
    "ClusterName"?: string;
    /**
     * 保留字段。
     * @example `none`
     */
    "HasIpCount"?: string;
    /**
     * 待查询服务所属的MSE集群ID。
     * >  InstanceId与ClusterId其中一个必填。
     * @example `mse-09k1q11****`
     */
    "ClusterId"?: string;
    /**
     * 当前查询服务的集群ID。
     * >  InstanceId与ClusterId其中一个必填。
     * @example `mse_prepaid_public_cn-tl32odtt20j`
     */
    "InstanceId"?: string;
    /**
     * 查询第几页。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页展示条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 地域ID。
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
