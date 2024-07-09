export interface RetryClusterRequest {
    /**
     * 扩展请求参数，JSON格式。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 实例ID。
     * @example `mse-cn-st21ri2****`
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
