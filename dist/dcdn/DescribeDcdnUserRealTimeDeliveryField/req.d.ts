export interface DescribeDcdnUserRealTimeDeliveryFieldRequest {
    /**
     * 业务类型，取值：
     * - **cdn_log_access_l1**（默认值）：用户访问日志。
     * - **cdn_log_er**：边缘程序日志。
     * - **cdn_log_waf**：WAF拦截日志。
     * @example `cdn_log_access_l1`
     */
    "BusinessType"?: string;
}
