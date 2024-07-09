export interface UpdateDcdnSLSRealtimeLogDeliveryRequest {
    /**
     * 项目名称。
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
     * 日志区域名称。
     * @example `cn-hangzhou`
     */
    "SLSRegion": string;
    /**
     * 日志名称。
     * @example `example-cn`
     */
    "SLSProject": string;
    /**
     * 日志库名称。
     * @example `example-cn`
     */
    "SLSLogStore": string;
    /**
     * 数据中心，取值：
     * - **cn**：中国。
     * - **sg**：新加坡。
     * - **in**：印度。
     * - **eu**：欧洲。
     * - **us**：美国。
     * @example `cn`
     */
    "DataCenter": string;
}
