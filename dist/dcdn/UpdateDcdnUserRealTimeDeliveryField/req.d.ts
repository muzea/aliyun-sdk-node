export interface UpdateDcdnUserRealTimeDeliveryFieldRequest {
    /**
     * 业务类型，取值：
     * - **cdn_log_access_l1**（默认值）：用户访问日志。
     * - **cdn_log_er**：边缘程序日志。
     * - **cdn_log_waf**：WAF拦截日志。
     * @example `cdn_log_access_l1`
     */
    "BusinessType"?: string;
    /**
     * 字段列表，多个字段用半角逗号（,）隔开。取值请参见[实时日志采集字段说明](~~324199~~)。
     * @example `body_bytes_sent,client_ip,content_type`
     */
    "Fields": string;
}
