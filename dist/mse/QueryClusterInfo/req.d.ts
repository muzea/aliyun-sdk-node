export interface QueryClusterInfoRequest {
    /**
     * 集群ID。
     * @example `mse-09k1q11****`
     */
    "ClusterId"?: string;
    /**
     * 实例ID。
     * @example `mse_prepaid_public_cn-7mz2t63ci03`
     */
    "InstanceId"?: string;
    /**
     * 订单ID。
     * @example `20574710974****`
     */
    "OrderId"?: string;
    /**
     * 是否查询公网白名单配置。
     * @example `false`
     */
    "AclSwitch"?: boolean;
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
