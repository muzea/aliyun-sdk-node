export interface DescribeHybridMonitorDataListRequest {
    /**
     * 指标仓库名称。
     * 关于如何获取指标仓库名称，请参见[DescribeHybridMonitorNamespaceList](~~428880~~)。
     * @example `default-aliyun`
     */
    "Namespace": string;
    /**
     * 监控指标。
     * > 支持PromQL查询语句。
     * @example `AliyunEcs_cpu_total`
     */
    "PromSQL": string;
    /**
     * 开始时间戳。
     * 单位：秒。
     * @example `1653804865`
     */
    "Start": number;
    /**
     * 结束时间戳。
     * 单位：秒。
     * @example `1653805225`
     */
    "End": number;
    /**
     * 监控数据的统计周期。
     * 单位：秒。
     * @example `60`
     */
    "Period"?: string;
}
