export interface DescribeSiteMonitorDataRequest {
    /**
     * 任务ID。
     * @example `49f7b317-7645-4cc9-94fd-ea42e522****`
     */
    "TaskId": string;
    /**
     * 监控的数据类型。取值：
     * - metric：时序类指标监控
     * - event：事件类监控
     * @example `metric`
     */
    "Type"?: string;
    /**
     * 监控项的名称。取值：
     * - Availability：可用率
     * - ResponseTime：响应时间
     * @example `Availability`
     */
    "MetricName": string;
    /**
     * 开始时间。支持的格式：
     * - Unix时间戳：从1970年1月1日开始所经过的毫秒数。
     * - Format格式：YYYY-MM-DDThh:mm:ssZ。
     * @example `1551579637000`
     */
    "StartTime"?: string;
    /**
     * 结束时间。支持的格式：
     * - Unix时间戳：从1970年1月1日开始所经过的毫秒数。
     * - Format格式：YYYY-MM-DDThh:mm:ssZ。
     * @example `1551581437000`
     */
    "EndTime"?: string;
    /**
     * 统计周期。单位：秒，取值为60或60的整数倍。
     * >默认根据探测频率最小周期返回数据。
     * @example `60`
     */
    "Period"?: string;
    /**
     * 分页游标。
     * @example `49f7b317-7645-4cc9-94fd-ea42e5220930ea42e5220930ea42e522****`
     */
    "NextToken"?: string;
    /**
     * 返回的数据点数量。
     * @example `1000`
     */
    "Length"?: number;
}
