export interface QueryInstancesInfoRequest {
    /**
     * 集群ID。
     * @example `mse-09k1q11****`
     */
    "ClusterId"?: string;
    /**
     * 实例ID。
     * @example `mse_prepaid_public_cn-tl32g1u9k01`
     */
    "InstanceId"?: string;
    /**
     * 订单ID。
     * @example `20574710974****`
     */
    "OrderId"?: string;
    /**
     * 实例所属地域的ID。
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
