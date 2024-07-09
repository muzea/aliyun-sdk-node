export interface CreateDcdnSLSRealTimeLogDeliveryRequest {
    /**
     * 实时日志项目名称。
     * @example `example`
     */
    "ProjectName": string;
    /**
     * 域名列表，多个域名用半角逗号（,）隔开。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 采样率。
     * @example `1.0`
     */
    "SamplingRate"?: string;
    /**
     * SLS实时日志区域名称。
     * @example `cn-hangzhou`
     */
    "SLSRegion": string;
    /**
     * SLS实时日志名称。
     * @example `aliyundoc`
     */
    "SLSProject": string;
    /**
     * SLS实时日志库名称。
     * @example `demo`
     */
    "SLSLogStore": string;
    /**
     * 数据中心。取值：
     * - cn：中国
     * - sg：新加坡
     * - in：印度
     * - eu：欧洲
     * - us：美国
     * @example `cn`
     */
    "DataCenter": string;
    /**
     * 业务类型，取值：
     * - **cdn_log_access_l1**（默认值）：用户访问日志。
     * - **cdn_log_er**：边缘程序日志。
     * - **cdn_log_waf**：WAF拦截日志。
     * @example `cdn_log_access_l1`
     */
    "BusinessType"?: string;
}
