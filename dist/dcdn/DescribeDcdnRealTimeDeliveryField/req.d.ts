export interface DescribeDcdnRealTimeDeliveryFieldRequest {
    /**
     * 业务类型，取值：
     * - **cdn_log_access_l1**（默认值）：全站加速 L1 节点访问日志。
     * - **cdn_log_origin**：回源日志。
     * - **cdn_log_er**：ER日志。
     * @example `cdn_log_access_l1`
     */
    "BusinessType"?: string;
}
