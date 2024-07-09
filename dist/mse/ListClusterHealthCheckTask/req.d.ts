export interface ListClusterHealthCheckTaskRequest {
    /**
     * 实例ID。
     * @example `mse_prepaid_public_cn-7pp2o4wfx01`
     */
    "InstanceId"?: string;
    /**
     * 查询第几页
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页展示条数
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 集群所在地域。
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
