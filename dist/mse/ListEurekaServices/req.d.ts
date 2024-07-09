export interface ListEurekaServicesRequest {
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
     * 集群ID。
     * @example `mse-09k1q11****`
     */
    "ClusterId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
