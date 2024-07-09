export interface OrderClusterHealthCheckRiskNoticeRequest {
    /**
     * 实例ID。
     * @example `mse-cn-st21ri2****`
     */
    "InstanceId"?: string;
    /**
     * 风险编码。
     * @example `30010010001`
     */
    "RiskCode"?: string;
    /**
     * 是否禁用此风险项通知功能。
     * - true  禁用风险项通知
     * - false 开启风险项通知
     * @example `false`
     */
    "Mute"?: boolean;
    /**
     * 预留参数。
     * @example `null`
     */
    "NoticeType"?: string;
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
     * 返回信息的语言类型。
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
